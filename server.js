import express from "express"
import { CategoryEndpoint, BookEndpoint  } from "./Endpoints/Index.js"
const app = express()
var cors = require('cors')
const port = 3000

app.use(express.json())
app.use(cors())

CategoryEndpoint.RegisterCategoryEndpoints(app)
BookEndpoint.RegisterBookEndpoint(app)

app.listen(port, () => console.log(`API listen on port ${port}`))
