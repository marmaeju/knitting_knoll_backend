const express = require('express')
const cors = require('cors')
const CastRouter = require('./routes/CastRouter')
const StitchRouter = require('./routes/StitchRouter')
const MaterialRouter = require('./routes/MaterialRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/casts', CastRouter)
app.use('/stitches', StitchRouter)
app.use('/materials', MaterialRouter)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
