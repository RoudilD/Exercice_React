import { useState } from 'react'
import '../styles/Footer.css'

function Footer() {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        setInputValue(e.target.value)
    }

    function handleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide!")
        }
    }

    return (
        <footer className='lva-footer'>
            <div className='lva-footer-elem'>
                Pour les passionnés d'automobile! 🏎️💨🚗
            </div>
            <div className='lva-footer-elem'>Laissez-nous votre mail :</div>
            <input
                placeholder='Entrez votre mail'
                onChange={handleInput}
                value={inputValue}
                onBlur={handleBlur}
            />
        </footer>
    )
}

export default Footer