export interface User {
    email: String,
    password: string,
    name: string
}
export interface Proffesor {
    email: String,
    password: string,
    name: string
}
export interface Course {
    name: String,
    points: number,
    description: string,
    proffesorId: string
}


export interface Student {
    email: String,
    password: string,
    name: string
}

export interface Credentials {
    userId: null | string,
    token: string,
    name: string,
    email: string
}
