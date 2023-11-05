import sql from 'mssql'

try {
  const config = {
    port: 1433,
    server: 'localhost',
    user: 'sa',
    password: 'adminWEB123#',
    database: 'Biblioteca',
    stream: false,
    options: {
      trustedConnection: true,
      encrypt: true,
      enableArithAbort: true,
      trustServerCertificate: true,
    },
  }
    await sql.connect(config)
    console.log('Connected with Database')
} catch (err) {
    console.log('Error when connecting database.', err)
}
export default sql