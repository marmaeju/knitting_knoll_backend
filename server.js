const express = require('express')
const cors = require('cors')
const CastRouter = require('./routes/CastRouter')
const StitchRouter = require('./routes/StitchRouter')
const TutorialRouter = require('./routes/TutorialRouter')

const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/cast', CastRouter)
app.use('/stitch', StitchRouter)
app.use('/tutorial', TutorialRouter)

app.get('/', (req, res) => res.json({ message: 'Server Works' }))
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
