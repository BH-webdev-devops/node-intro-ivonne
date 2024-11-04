import cars from '../data/carData'
import { Request, Response } from 'express'

export const carController = {

    getCars: (req: Request, res: Response): any => {
        try {
            return res.json(cars)
        }
        catch(err){
            res.json(err)
            res.status(500).json({message : `Internal server error 🔴`})
        }
    },

    getCarById: (req: Request, res: Response): any => {
        try {
            const carID = parseInt(req.params.carID)
            const carByID = cars.find(car => car.id == carID)
            if (!carByID) {
                res.json({ message: `No car found` })
            }
            res.json(carByID)
        }
        catch (err) {
            res.json(err)
            res.status(500).json({message : `Internal server error 🔴`})
        }
    },

    createNewCar : (req : Request, res : Response)  : any => {
        try {
            const {brand, year, modele} = req.body
            if(!brand || !year || !modele){
                return res.json({message : `Please provide informations about the car`})
            }
            else {
                const newCar = {
                    id : cars.length + 1,
                    brand,
                    year,
                    modele
                }
                cars.push(newCar)
                res.json(cars)
            }
        }
        catch(err){
            res.json(err)
            res.status(500).json({message : `Internal server error 🔴`})
        }
    },

    updateCar : (req : Request, res : Response) : any => {
        const {brand, year, modele} = req.body
   
        try{
            const carID  = parseInt(req.params.carID)
            const carByID = cars.find(car => {
                if (car.id === carID) {
                    car.brand = brand;
                    car.year = year;
                    car.modele = modele;
                    return true
                }
                return false
            })
            res.json(cars)
        }
        catch(err){
            res.status(500).json({message : `Internal server error 🔴`})
        }
    },

    deleteCar : (req : Request, res : Response) => {
        const {brand, year, modele} = req.body
       
        try{
            const carID  = parseInt(req.params.carID)
            const index = cars.findIndex(car => car.id === carID);
    
            if (index !== -1) {
              cars.splice(index, 1);
              res.json({ message: 'Car deleted successfully', cars });
            } else {
              res.json({message: 'Car not found'})
            }
        }
        catch(err){
            res.json(err)
            res.status(500).json({message : `Internal server error 🔴`})
        }
    }
}


