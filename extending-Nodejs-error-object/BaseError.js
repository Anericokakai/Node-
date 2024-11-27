class BaseError extends Error {
  constructor(name, httpCode, description, isOperational) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;
    Error.captureStackTrace(this);
  }
}


// Practice about the error 
class TestError extends Error{
    constructor (description){
        super(description)
        Object.setPrototypeOf(this,new.target.prototype)
    }
}

const error=new TestError("An Error Occurred")
console.log(error instanceof TestError)
console.log(error instanceof Error)

export {
    BaseError
}