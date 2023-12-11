import React, { createContext, useState, useEffect, useContext, ReactNode, FC } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContextType } from '../interfaces/store';

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const loadUserData = async () => {
            const storedUsername = await AsyncStorage.getItem('username');
            if (storedUsername) setUsername(storedUsername);
        };

        loadUserData();
    }, []);

    const saveUsername = async (name: string) => {
        await AsyncStorage.setItem('username', name);
        setUsername(name);
    };

    return (
        <UserContext.Provider value={{ username, saveUsername }}>
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
