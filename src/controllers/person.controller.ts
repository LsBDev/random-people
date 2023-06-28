import { Request, Response } from "express"
import { getPersonDB } from "../repositories/person.repositories"

export async function getPerson (req: Request, res: Response) {
    function comparador() { 
        return Math.random() - 0.5
    }
    try{
        const {rows} = await getPersonDB()
        rows.sort(comparador)
        res.send(rows[0])
    }
    catch(err){
        console.log("deu erro aqui")
    }
}
