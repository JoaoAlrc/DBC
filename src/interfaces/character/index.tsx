
export type Character = {
    id: number;
    name: string;
    image: string;
    status?: Status;
    type?: string;
    species?: string;
    gender?: string;
    origin?: string;
    location?: {
        dimension: string;
        name: string;
        type: string;
    };
    episode?: {
        air_date: string;
        episode: string;
        name: string;
    }
};

export enum Status {
    alive = "Alive",
    dead = "Dead",
    unknown = "Unknown",
}

export enum Gender {
    female = 'Female',
    male = 'Male',
    genderless = 'Genderless',
    unknown = 'Unknown'
}

export enum Species {
    human = 'Human',
    alien = 'Alien',
    humanoid = 'Humanoid',
    poopybutthole = 'Poopybutthole',
    mythological = 'Mythological',
    unknown = 'Unknown',
    animal = 'Animal',
    disease = 'Disease',
    robot = 'Robot',
    cronenberg = 'Cronenberg',
    planet = 'Planet'
} 