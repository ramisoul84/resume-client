export interface User {
    name?: string;
    email:string;
    password:string;
}

export  interface UserData{
    name: string;
    email:string;
    created_at:string;
    last_login:string;
}

export interface Data {
    total_users: number;  
    total_pages: number; 
    users: UserData[];
}