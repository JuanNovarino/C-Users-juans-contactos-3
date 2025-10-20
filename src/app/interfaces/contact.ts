export interface Contact{
    id: string, //number ? 
    name: string  | null,
    lastname: string  | null,
    address: string  | null,
    email: string  | null,
    imageurl: string  | null,
    number: string  | null ,
    company: string | null,
    isFavourite: boolean,

}

export type NewContact = Omit<Contact,"id">;