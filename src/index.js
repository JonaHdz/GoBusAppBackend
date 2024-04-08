const express = require('express');
const v1LoginRouter = require("./v1/routes/loginRoutes");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/api/v1/login', v1LoginRouter);

app.listen(port, () => {
    console.log("Servidor iniciado");
})