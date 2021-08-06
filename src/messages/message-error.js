messageError = (error) => {
    if (error instanceof ReferenceError) {
        message = {
            status: 404,
            name: error.name,
            message: 'Apenas números são suportados como parâmetro!'
        }
        return message
    } else {
        return null
    }
}

module.exports = messageError