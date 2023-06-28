import express, { json, Request, Response } from "express"
import router from "./routes/person.routes"

const app = express()
app.use(json())
app.use(router)

app.get("/health", (req: Request, res: Response ) => {
  res.status(201).send("Ok!")
})


const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))



