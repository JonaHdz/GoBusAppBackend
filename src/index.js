const express = require('express');
const v1LoginRouter = require("./v1/routes/loginRoutes");
const arduinoRouter = require("./v1/routes/arduinoRoutes");
const app = express();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use('/api/v1/login', v1LoginRouter);
app.use('/api/arduino',arduinoRouter);

app.listen(port, () => {
    console.log("Servidor iniciado ne puerto," + port);
})