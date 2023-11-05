import CategoryRepository from "../Repository/Category.js"
import { Status } from "../ValueObjects/BaseReturn.js"

export default {
  RegisterCategoryEndpoints (app) {
    app.post('/category', async (req, res) => {
      const response = await CategoryRepository.Create(req.body)
      if (response.status === Status.Success)
        res.sendStatus(201);
      else if (response.status === Status.Bussiness)
        res.status(400).send(response)
      else
        res.status(500).send(response)
    })
    
    app.patch('/category/:id', async (req, res) => {
      const form = {
        id: req.params.id,
        name: req.body.name
      }
      const response = await CategoryRepository.Update(form)
      if (response.status === Status.Success)
        res.sendStatus(201);
      else if (response.status === Status.Bussiness)
        res.status(400).send(response)
      else
        res.status(500).send(response)
    })
    
    app.get('/category', async (req, res) => {
      const response = await CategoryRepository.GetAll()
      if (response.status === Status.Success)
        res.send(response);
      else if (response.status === Status.Bussiness)
        res.status(400).send(response)
      else
        res.status(500).send(response)
    })
    
    app.get('/category/:id', async (req, res) => {
      const response = await CategoryRepository.Get(req.params.id)
      if (response.status === Status.Success)
        res.send(response);
      else if (response.status === Status.Bussiness)
        res.status(400).send(response)
      else
        res.status(500).send(response)
    })
    
  }
}