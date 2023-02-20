import os
import time
import json
import bcrypt

from cryptography.fernet import Fernet

from server.models.user import User
from tools.responder import Responder

class Authentification:
    def __init__(self):
        self.User = User()
        self.now = time.time()
        self.expired = int(os.getenv("EXPIRE")) * 60 * 1000
        self.Responder = Responder()
        self.key = Fernet.generate_key()
        self.fernet = Fernet(self.key)

    def __validate_date__(self, start, end):
        return (self.now >= start and self.now <= end)

    def __validate_user__(self, user: dict):
        return (self.User.validate(user))

    def __encode__(self, data: str):
        return (self.fernet.encrypt(str.encode(data)))

    def __decode__(self, data: str):
        return (self.fernet.decrypt(data))

    def generate(self, user: dict):
        token = None

        if (self.__validate_user__(user) == True):
            token = {
                "user": user["username"],
                "time": {
                    "start": self.now,
                    "end": self.now + self.expired
                }
            }

            return (self.__encode__(json.dumps(token)))
        return (None)

    def decrypt(self, data: str):
        return (self.__decode__(data))

    def hash(self, data):
        return (bcrypt.hashpw(
            data.encode("utf-8"),
            bcrypt.gensalt()
        ))

    def compare(self, data, hashed):
        return (bcrypt.checkpw(data.encode("utf-8"), hashed))
