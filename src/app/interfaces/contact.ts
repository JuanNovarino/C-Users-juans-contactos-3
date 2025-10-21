export interface Contact{
    id: string, //number ? 
    firstName: string,
    lastName: string,
    address: string,
    email: string,
    image: string,
    number: string,
    company: string,
    isFavourite: boolean,

}

export type NewContact = Omit<Contact,"id">;