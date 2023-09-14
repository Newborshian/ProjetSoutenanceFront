import { Client } from "./client.model";

export interface Conseiller{
    id: number;
    lastname: string;
    firstname: string;
    clientsList: Client[]
}
