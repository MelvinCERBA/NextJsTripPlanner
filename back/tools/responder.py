
class Responder:
    def __init__(self):
        self.codes = {
            200 : "OK",
            401 : "Unauthorized",
            422 : "Unprocessable Entity",
            500 : "Internal server error",
            400 : "Bad request"
        }

    def Builder(self, data, code, message):
        return ({
            "data": data,
            "code": code,
            "message": message
        })

    def Send(self, data: dict, code: int):
        return (self.Builder(data, code, self.codes[code]))