import { Cart } from "@/types/cart"; 

export function cartItemCount (item: Cart | {}): number {
    
    const cartItems = Object.values(item);

    if (cartItems.length <= 0) return 0;

    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
}
