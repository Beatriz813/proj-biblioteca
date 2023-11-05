import { Success, SystemError } from '../ValueObjects/BaseReturn.js'
import sql from './BaseRepository.js'

export default {
  async Create(category) {
    try {
      await sql.query`INSERT INTO Category (NameCategory) VALUES (${category.name})`
      console.log(`Category ${category.name} inserted`)
      return Success(`Category ${category.name} inserted`)
    } catch (err) {
      console.log('Error when creating category.', err)
      return SystemError(`Error when creating category. ${err.message}`)
    }
  },
  async GetAll() {
    try {
      let result = await sql.query`SELECT * FROM Category`
      console.log(`All Categories consulted => `, result)
      return Success(result.recordset)
    } catch (err) {
      console.log('Error when consulting all categories.', err)
      return SystemError(`Error when consulting all categories. ${err.message}`)
    }
  },
  async Get(idCategory) {
    try {
      let result = await sql.query`SELECT * FROM Category WHERE Id = ${idCategory}`
      console.log('Categories consulted =>', result)
      return Success(result.recordset[0])
    } catch (err) {
      console.log('Error when consulting category.', err)
      return SystemError(`Error when consulting category. ${err.message}`)
    }
  },
  async Update(category) {
    try {
      await sql.query`UPDATE Category SET NameCategory = ${category.name} WHERE Id = ${category.id}`
      console.log(`Category ${category.id} updated to ${category.name}`)
      return Success(`Category ${category.id} updated to ${category.name}`)
    } catch (err) {
      console.log('Error when updating category.', err)
      return SystemError(`Error when updating category. ${err.message}`)
    }
  }
}