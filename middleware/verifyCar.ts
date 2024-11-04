
import {Request, Response, NextFunction} from 'express'


const verifyCar = (req : Request, res : Response, next : NextFunction) : any => {
    console.log(`Verify car`)
    const {brand, year, model} = req.body


    if (typeof brand !== 'string') {
        res.status(500).json({message : `Internal server error 🔴`})
    }

    else if (typeof year !== 'number' || !Number.isInteger(year)) {
        res.status(500).json({message : `Internal server error 🔴`})
    }

    else if (typeof model !== 'string') {
        res.status(500).json({message : `Internal server error 🔴`})
    }
    else {
        next()
    }

}

export default verifyCar