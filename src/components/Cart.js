import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart }) {
    const [isOpen, setIsOpen] = useState(true)
    const item = Object.keys(cart)
    const total = item.reduce(
        (acc, item) => acc + cart[item].amount * cart[item].price,
        0
    )
    useEffect(() => {
        document.title = `LVA: ${total}€ d'achats`
    }, [total])

    return isOpen ? (
        <div className='lva-cart'>
            <button
                className='lva-cart-toggle-button'
                onClick={() => setIsOpen(false)}
            >
                Fermer
            </button>
            {cart.length > 0 ? (
                <div>
                    <h2>Panier</h2>
                    <ul>
                        {cart.map(({ name, price, amount }, index) => (
                            <div key={`${name}-${index}`}>
                                {name} {price}€ x {amount}
                            </div>
                        ))}
                    </ul>
                    <h3>Total : {total}€</h3>
                    <button onClick={() => updateCart([])}>Vider le panier</button>
                </div>
            ) : (
                <div>Votre panier est vide</div>
            )}
        </div>
    ) : (
        <div className='lva-cart-closed'>
            <button
                className='lva-cart-toggle-button'
                onClick={() => setIsOpen(true)}
            >
                Ouvrir le Panier
            </button>
        </div>
    )
}

export default Cart