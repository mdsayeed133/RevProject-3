// ts interfaces

export interface UserDTO {
    email?: string,
    password?: string
}

export interface User{
    userId: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}