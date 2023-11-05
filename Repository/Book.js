import sql from './BaseRepository.js'
import { Success, SystemError } from '../ValueObjects/BaseReturn.js'

export default {
  async Create(book) {
    try {
      await sql.query`INSERT INTO Book (NameBook, Description, PageQuantity, Author, CategoryId ) VALUES (${book.name}, ${book.description}, ${book.pageQuantity}, ${book.author}, ${book.categoryId})`
      console.log(`Book ${book.name} inserted`)
      return Success(`book ${book.name} inserted`)
    } catch (err) {
      console.log('Error when creating book.', err)
      return SystemError(`Error when creating book. ${err.message}`)
    }
  },
  async GetAll() {
    try {
      let result = await sql.query`SELECT * FROM Book`
      console.log(`All Categories consulted => `, result)
      return Success(result.recordset)
    } catch (err) {
      console.log('Error when consulting all Books.', err)
      return SystemError(`Error when consulting all books. ${err.message}`)
    }
  },
  async Get(idBook) {
    try {
      let result = await sql.query`SELECT * FROM Book WHERE Id = ${idBook}`
      console.log('Books consulted =>', result)
      return Success(result.recordset[0])
    } catch (err) {
      console.log('Error when consulting Book.', err)
      return SystemError(`Error when consulting Book. ${err.message}`)
    }
  },
  async Update(book) {
    try {
      await sql.query`UPDATE Book SET NameBook = ${book.name}, Description = ${book.description}, PageQuantity = ${book.pageQuantity}, Author = ${book.author}, CategoryId = ${book.categoryId} WHERE Id = ${book.id}`
      console.log(`Book ${book.id} updated to ${book.name}`)
      return Success(`Book ${book.id} updated to ${book.name}`)
    } catch (err) {
      console.log('Error when updating Book.', err)
      return SystemError(`Error when updating Book. ${err.message}`)
    }
  }
}