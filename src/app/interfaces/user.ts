export interface User{
    id: number,
    /**id del usuario */
    firstName : string,
    lastName : string,
    email: string,
    password: string,
}

export type NewUser = Omit<User,"id">;