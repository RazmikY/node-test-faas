const returnRandomData = (delayInms = 1500) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            Math.random() * 100 > 50 ? res("Success") : rej("Failed")
        }, delayInms)
    })
}

module.exports = {
    returnRandomData
}