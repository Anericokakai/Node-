import { BaseError } from "./BaseError.js"
import { HttpStatusCodes } from "./constants.js"

//  example of errors
const apples="hello"

if(apples==null){
    throw new BaseError("NOT FOUND",HttpStatusCodes.NOT_FOUND,"User Not Found",true,)
}