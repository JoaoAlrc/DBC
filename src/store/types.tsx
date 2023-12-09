import { Character } from "../services/home";

export interface UserContextType {
    username: string | null;
    saveUsername: (name: string) => Promise<void>;
    favorites: Character[];
    saveFavorite: (items: Character) => Promise<void>;
    removeFavorite: (id: number) => Promise<void>;
}
