class ApiError extends Error {
    constructor(
        statusCode,
        message="something went wrong",
        errors =[],
        statck=""
    )
    {
        super(message)
        this.message=message
        this.statusCode=statusCode
        this.errors=errors
        this.success=false
        this.data=null

        if(statck)
        {
           this.statck=statck
        }
        else{
             Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}