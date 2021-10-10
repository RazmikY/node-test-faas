const { returnRandomData } = require('../helpers/index');

const getData = async (_, res) => {
    try {
        res.send('Hello from Node')
    } catch (error) {
        console.log(error);
    }
}

const modifyData = async ({ body }, res) => {
    try {
        let newBody = await body;
        const data = await returnRandomData();
        newBody = {
            ...newBody,
            data: {
                ...newBody.data,
                statusValue: data
            }
        }
        res.status(200).send(newBody)
    } catch (error) {
        console.log(error);
    }
}



module.exports = {
    getData,
    modifyData
}