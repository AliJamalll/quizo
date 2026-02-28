class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
    /*
دي وظيفة built-in بتسجّل stack trace (تاريخ استدعاء الدوال لحد مكان وقوع الخطأ).
مفيدة جدًا في الديباجينج.
تاني باراميتر (this.constructor) بيضمن إن AppError نفسه ما يظهرش في الـ trace → يخليها أوضح.
    */
  }
}

module.exports = AppError;
