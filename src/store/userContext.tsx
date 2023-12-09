import React, { createContext, useState, useEffect, useContext, ReactNode, FC } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContextType } from './types';
import { Character } from '../services/home';

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [username, setUsername] = useState<string | null>(null);
    const [favorites, setFavorites] = useState<Character[]>([]);

    useEffect(() => {
        const loadUserData = async () => {
            const storedUsername = await AsyncStorage.getItem('username');
            if (storedUsername) setUsername(storedUsername);

            const storedFavorites = await AsyncStorage.getItem('favorites');
            if (storedFavorites) setFavorites(JSON.parse(storedFavorites));
        };

        loadUserData();
    }, []);

    const saveUsername = async (name: string) => {
        await AsyncStorage.setItem('username', name);
        setUsername(name);
    };

    const saveFavorites = async (items: Character[]) => {
        await AsyncStorage.setItem('favorites', JSON.stringify(items));
        setFavorites(items);
    };

    const saveFavorite = async (item: Character) => {
        saveFavorites([item, ...favorites]);
    };

    const removeFavorite = async (id: number) => {
        const updatedFavorites = favorites.filter(item => item.id !== id);
        await saveFavorites(updatedFavorites);
    };

    return (
        <UserContext.Provider value={{ username, saveUsername, favorites, saveFavorite, removeFavorite }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUserContext must be used within a UserProvider');
    }
    return context;
};
