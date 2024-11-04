import {Router} from 'express'
import {carController} from '../controllers/carControllers'
const carRouter = Router()


carRouter.get(`/cars`,  carController.getCars)

carRouter.get(`/cars/:carID`, carController.getCarById)

carRouter.post(`/cars`, carController.createNewCar)

carRouter.put(`/cars/:carID`, carController.updateCar)

carRouter.delete(`/cars/:carID`, carController.deleteCar)

export default carRouter