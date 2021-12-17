import { ResponseModel } from './responseModel';
import { Product } from "./product";

export interface ProductResponseMode extends ResponseModel{
    data:Product[],

}
