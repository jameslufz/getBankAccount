const   express =   require("express")
const   app     =   express()

const   port    =   process.env.PORT || 3000

const   getBank =   require("./routers/getBank")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/getBank",getBank)

app.listen(port,() => console.log(`Listening at ${port}`))