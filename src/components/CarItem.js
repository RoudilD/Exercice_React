import CareScale from "./CareScale"
import '../styles/CarItem.css'

function CarItem({ cover, name, confort, speed, price }) {
    return (
        <li className='lva-car-item'>
            <span className='lva-car-item-price'>{price}€</span>
            <img className='lva-car-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='speed' scaleValue={speed} />
                <CareScale careType='confort' scaleValue={confort} />
            </div>
        </li>
    )
}

export default CarItem