export type Register = {
    id: number;
    name: string;
    password: string;
    is_guest: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export type Login = {
    name: string;
    password: string;
}