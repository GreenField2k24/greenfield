const express = require('express')
const db = require("./models")
const app = express()
const port = 5000

const cors = require("cors")
const userRouter = require("./router/user.router")
const productRouter = require("./router/product.router")
const orderRouter = require("./router/order.router")
const categoryRouter = require("./router/category.router")
const orderItemRouter = require("./router/orderItem.router")



app.use(cors())
app.use(express.json())


app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
// app.use('/api/category',categoryRouter)
app.use('/api/order',orderRouter)
app.use('/api/orderItem',orderItemRouter)





app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})

