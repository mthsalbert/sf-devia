export default class ValidateRequest {
    static method(req, met){
        if (req.method.toUpperCase() !== met.toUpperCase()) {
            throw 'Método não permitido'
        }
        return ValidateRequest
    }
}