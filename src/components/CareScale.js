import Speed from '../assets/speed.png'
import Confort from '../assets/confort.png'

const quantityLabel = {
    1: 'peu',
    2: 'moyennement',
    3: 'très'
}

function CareScale({ scaleValue, careType }) {
    const range = [1, 2, 3]
    const scaleType =
        careType === 'speed' ? (
            <img src={Speed} alt='speed-icon' />
        ) : (
            <img src={Confort} alt='confort-icon' />
        )

    return (
        <div
            onClick={() =>
                alert(
                    `Cette voiture est ${quantityLabel[scaleValue]} ${careType === 'speed' ? 'rapide' : "confortable"
                    }`
                )
            }
        >
            {range.map((rangeElem) =>
                scaleValue >= rangeElem ? (
                    <span key={rangeElem.toString()}>{scaleType}</span>
                ) : null
            )}
        </div>
    )
}

export default CareScale