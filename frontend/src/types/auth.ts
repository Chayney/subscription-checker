export type RegisterRequest = {
    name: string;
    password: string;
    is_guest: boolean;
    createdAt: string;
    updatedAt: string;
}

export type RegisterResponse = {
    id: number;
    name: string;
    password: string;
    is_guest: boolean;
    createdAt: string;
    updatedAt: string;
}

export type Login = {
    name: string;
    password: string;
}