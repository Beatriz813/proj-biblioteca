import express from "express"
import { CategoryEndpoint, BookEndpoint  } from "./Endpoints/Index.js"
import cors from 'cors'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

CategoryEndpoint.RegisterCategoryEndpoints(app)
BookEndpoint.RegisterBookEndpoint(app)

app.listen(port, () => console.log(`API listen on port ${port}`))
