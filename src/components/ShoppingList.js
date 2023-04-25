import { useState } from 'react'
import { carList } from '../datas/carList'
import CarItem from './CarItem'
import Categories from './Categories'
import '../styles/ShoppingList.css'

function ShoppingList({ cart, updateCart }) {
    const [activeCategory, setActiveCategory] = useState('')
    const categories = carList.reduce(
        (acc, car) =>
            acc.includes(car.category) ? acc : acc.concat(car.category),
        []
    )

    function addToCart(name, price) {
        const currentCarSaved = cart.find((car) => car.name === name)
        if (currentCarSaved) {
            const cartFilteredCurrentCar = cart.filter(
                (car) => car.name !== name
            )
            updateCart([
                ...cartFilteredCurrentCar,
                { name, price, amount: currentCarSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className='lva-shopping-list'>
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />

            <ul className='lva-car-list'>
                {carList.map(({ id, cover, name, confort, speed, price, category }) =>
                    !activeCategory || activeCategory === category ? (
                        <div key={id}>
                            <CarItem
                                cover={cover}
                                name={name}
                                confort={confort}
                                speed={speed}
                                price={price}
                            />
                            <button onClick={() => addToCart(name, price)}>Ajouter</button>
                        </div>
                    ) : null
                )}
            </ul>
        </div>
    )
}

export default ShoppingList