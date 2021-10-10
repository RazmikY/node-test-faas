const express = require('express');
const routes = require('./src/routes/index');

const app = express();
app.use(express.json()); //Used to parse JSON bodies
app.use(express.urlencoded());

// routes 
app.use(routes)

async function start() {
    try {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()