import { ProductType } from "./product"

export type Cart = {
    [key:string]: {
        item: ProductType,
        quantity: number
    }
}
