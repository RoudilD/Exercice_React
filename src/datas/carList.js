import peugeot308 from '../assets/308.jpg'
import megane from '../assets/Megane.jpg'
import citroen from '../assets/Citroen.jpg'
import fiat500 from '../assets/Fiat500.jpg'
import yaris from '../assets/Yaris.jpg'
import mustang from '../assets/Mustang.jpg'
import charger from '../assets/Charger.jpg'
import nissan350 from '../assets/Nissan350z.jpg'
import brz from '../assets/brz.jpg'
import lambo from '../assets/Lambo.jpg'

export const carList = [
    {
        name: 'Peugeot 308',
        category: 'Citadine',
        id: '1ed',
        speed: 1,
        confort: 3,
        cover: peugeot308,
        price: 11000
    },
    {
        name: 'Renault Megane',
        category: 'Citadine',
        id: '2ab',
        speed: 1,
        confort: 3,
        cover: megane,
        price: 10000
    },
    {
        name: 'Citroën C3',
        category: 'Citadine',
        id: '3sd',
        isSpecialOffer: true,
        speed: 1,
        confort: 2,
        cover: citroen,
        price: 5000
    },
    {
        name: 'Fiat 500',
        category: 'Citadine',
        id: '4kk',
        speed: 1,
        confort: 2,
        cover: fiat500,
        price: 6000
    },
    {
        name: 'Toyota Yaris',
        category: 'Citadine',
        id: '5pl',
        speed: 1,
        confort: 2,
        cover: yaris,
        price: 9000
    },
    {
        name: 'Ford Mustang',
        category: 'Muscle Car',
        id: '6uo',
        speed: 3,
        confort: 2,
        cover: mustang,
        price: 70000
    },
    {
        name: 'Dodge Charger',
        category: 'Muscle Car',
        id: '7ie',
        isSpecialOffer: true,
        speed: 3,
        confort: 2,
        cover: charger,
        price: 50000
    },
    {
        name: 'Nissan 350Z',
        category: 'Sportive',
        id: '8fp',
        isSpecialOffer: true,
        speed: 2,
        confort: 1,
        cover: nissan350,
        price: 15000
    },
    {
        name: 'Subaru BRZ',
        category: 'Sportive',
        id: '9vn',
        speed: 2,
        confort: 1,
        cover: brz,
        price: 20000
    },
    {
        name: 'Lamborghini Aventador',
        category: 'Hypercar',
        id: '6yh',
        speed: 3,
        confort: 1,
        cover: lambo,
        price: 200000
    }
]
