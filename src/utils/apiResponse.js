class ApiResponse {
    constructor(statusCode, data, message="success"){
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 // ye server ke status code hote h ye dara online padhna hai
    }
}