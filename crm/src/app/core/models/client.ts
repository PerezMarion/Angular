import { StateClient } from "../enums/state-client";
import { ClientI } from "../interfaces/client-i";

export class Client implements ClientI{
    state = StateClient.ACTIVE;
    tva = 20;
    id!: number;
    name!: string;
    totalCaHt= 25000;
    comment!: string;

    constructor() {}
}