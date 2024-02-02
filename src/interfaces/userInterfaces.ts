import { Document } from "mongoose";


// Interface for saving user on db
export interface IUserData extends Document {
    firstName: string;
    lastName: string;
    dni: number;
    phone: number;
    email: string;
    password: string;
    position: string;
    active: boolean;
    role: string;
}

// Interface user from db
export interface IUserDataFromDB {
    _id: string,
    firstName: string;
    lastName: string;
    dni: number;
    phone: number;
    email: string;
    password: string;
    position: string;
    active: boolean;
    role: string;
}

// Interface for register user
export interface IRegisterData {
    firstName: string;
    lastName: string;
    dni: number;
    phone: number;
    email: string;
    password: string;
}

// LOGIN
export interface ILoginData {
    dni: number;
    password: string;
  }

// ApiResponse
export interface ApiResponse {
    user: IUserData;
    message: string;
}

// tokenInterface 'user'
export interface ITokenUserData {
    id: string;
    firstName: string;
    lastName: string;
    dni: number;
    phone: number;
    email: string;
    position: string;
    active: boolean;
    role: string;
}
  