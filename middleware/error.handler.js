function logError(err, req, res, next) {
  console.log('ERROR LOG');
  console.log(err);
  next(err);
}

function errorHandler(err, req, res, next) {
  console.log('Error handler ');
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
}

function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    // Si esta propiedad existe Dentro del Error (isBoom), es porque es un error
    const { output } = err;
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err); // Si no es un error de tipo Boom // Pase al siguiente middleware
  }
}

module.exports = {
  logError,
  errorHandler,
  boomErrorHandler,
};
