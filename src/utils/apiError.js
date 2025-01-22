 class ApiError extends Error{
    constructor(
        statusCode,
        message = "Somthing went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors
//Proper error gets hereeproduction me hatate h esko
        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.constructor)
        }
    }
 }

 export {ApiError}