export interface Contact{
    id: string,
    name: string,
    lastname: string,
    address: string
    email: string,
    //image
    number: string,
    company: string,
    //isFavourite: boolean

}

export type NewContact = Omit<Contact,"id">;