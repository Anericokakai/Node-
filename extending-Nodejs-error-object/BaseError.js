import { HttpStatusCodes } from "./constants.js";

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

//  You can extend the Base Error

class HTTP404Error extends BaseError{
    constructor(description="Not Found"){
        super("NOT FOUND",HttpStatusCodes.NOT_FOUND,"The Url does not exist",true)
    }
}


// Practice about the error  Object
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