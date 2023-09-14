import { Client } from "./Client";

export interface Conseiller{
    id: number;
    lastname: string;
    firstname: string;
    clients: Client[]
}