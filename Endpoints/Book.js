import BookRepository from "../Repository/Book.js"
import { Status } from "../ValueObjects/BaseReturn.js"

export default {
  RegisterBookEndpoint(app) {
    app.post('/book', async (req, res) => {
      const response = await BookRepository.Create(req.body)
      if (response.status === Status.Success)
        res.sendStatus(201);
      else if (response.status === Status.Bussiness)
        res.status(400).send(response)
      else
        res.status(500).send(response)
    })
    
    app.patch('/book/:id', async (req, res) => {
      const form = {
        id: req.params.id,
        ...req.body
      }
      const response = await BookRepository.Update(form)
      if (response.status === Status.Success)
        res.sendStatus(200);
      else if (response.status === Status.Bussiness)
        res.status(400).send(response)
      else
        res.status(500).send(response)
    })
    
    app.get('/book', async (req, res) => {
      const response = await BookRepository.GetAll()
      if (response.status === Status.Success)
        res.send(response);
      else if (response.status === Status.Bussiness)
        res.status(400).send(response)
      else
        res.status(500).send(response)
    })
    
    app.get('/book/:id', async (req, res) => {
      const response = await BookRepository.Get(req.params.id)
      if (response.status === Status.Success)
        res.send(response);
      else if (response.status === Status.Bussiness)
        res.status(400).send(response)
      else
        res.status(500).send(response)
    })
  }
}