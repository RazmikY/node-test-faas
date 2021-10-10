const getData = async (_, res) => {
    try {
        res.send('Hello from Node')
    } catch (error) {
        console.log(error);
    }
}

const modifyData = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getData,
    modifyData
}