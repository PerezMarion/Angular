import { StateOrder } from '../enums/state-order';
import { OrderI } from '../interfaces/order-i';

export class Order implements OrderI {
  tjmHt = 1200;// number pas string
  nbJours = 1;
  tva = 20;
  state = StateOrder.OPTION // "OPTION";
  typePresta!: string;// ici typePresta n'est pas initialisé
  client!: string;
  comment!: string;
  id!: number;
  constructor(obj?: Partial<Order>){
    // vérifier la présence de obj
    if(obj){
      // Object.assign(objCible, objSource)
      Object.assign(this, obj)
    }
  }
}
