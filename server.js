import express from "express"
import { Status } from "./ValueObjects/BaseReturn.js"
import CategoryRepository from "./Repository/Category.js"
import BookRepository from "./Repository/Book.js"

const app = express()
const port = 3000

app.use(express.json())

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

app.listen(port, () => console.log(`API listen on port ${port}`))
