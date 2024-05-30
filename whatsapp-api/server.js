const app = require('./src/app')
const { baseWebhookURL } = require('./src/config')
require('dotenv').config()

// Start the server
const port = process.env.PORT || 7070

// Check if BASE_WEBHOOK_URL environment variable is available
if (!baseWebhookURL) {
  console.error('BASE_WEBHOOK_URL environment variable is not available. Exiting...')
  process.exit(1) // Terminate the application with an error code
}

// app.listen(port, () => {
//   console.log(`API Whatsapp rodando na porta ${port}`)
// })

function startWhatsappApi () {
  app.listen(port, () => {
    console.log(`API Whatsapp rodando na porta ${port}`)
  })
}

startWhatsappApi()

module.exports = startWhatsappApi
