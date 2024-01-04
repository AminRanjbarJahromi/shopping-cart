import { createContext, useState } from "react"

export const CartContext = createContext ({
    items:[],
    getProductQuantity:()=>{},
    addItemToCart:()=>{},
    removeItemFromCart:()=>{},
    deletFromCart:()=>{},
    getTotalPrice:()=>{},
})

export function CartProvider ({ children}) {
    const [cartProducts, setCartProducts] = useState ([])

    function getProductQuantity(id) {
        const quantity = cartProducts.find((item) => item.id === id)?.quantity

        if(quantity === undefined) {
            return 0
            {
                return quantity
    }

    

    const ContextValue = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deletFromCart,
        getTotalPrice,
    }

    return (
        <CartContext.Provider value ={ ContextValue}>{children}</CartContext.Provider>
    )
}
