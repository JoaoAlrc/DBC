export interface UserContextType {
    username: string | null;
    saveUsername: (name: string) => Promise<void>;
}
