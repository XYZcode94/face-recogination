export interface User {
    id: string;
    username: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Image {
    id: string;
    uploaderId: string;
    imagePath: string;
    metadata: {
        createdAt: Date;
        updatedAt: Date;
        [key: string]: any; // Additional metadata fields can be added here
    };
}