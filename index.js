const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const webpush = require('web-push')

const app = express()

dotenv.config()

app.use(cors())
app.use(bodyParser.json())

webpush.setVapidDetails(process.env.WEB_PUSH_CONTACT, process.env.PUBLIC_VAPID_KEY, process.env.PRIVATE_VAPID_KEY)

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.post('/notifications/subscribe', (req, res) => {
  const subscription = req.body

  console.log(subscription)

  const payload = JSON.stringify({
    title: 'Hello!',
    body: 'It works.',
  })

  webpush.sendNotification(subscription, payload)
    .then(result => console.log(result))
    .catch(e => console.log(e.stack))

  res.status(200).json({'success': true})
});

app.listen(9000, () => console.log('The server has been started on the port 9000'))
