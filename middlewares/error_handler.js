
function logError(err) {
    console.error(err)
}

function logErrorMiddleware(err, req, res, next) {
    logError(err)
    next(err)
}

function returnError(err, req, res, next) {
    res.status(err.statusCode || 500).send(err.message)
}

function isOperationalError(error) {
    if (error instanceof BaseError) {
    return error.isOperational
    }
    return false
}

function errorHandler(err, req, res, next) {
    res.status(err.statusCode || 500).json(err.message)
    next(err)
}

module.exports = {
    logError,
    logErrorMiddleware,
    returnError,
    isOperationalError,
    errorHandler
}