from tools.security import Authentification

class Formatter:
    def __init__(self, authentification):
        self.Authentification = authentification

    def user(self, credentials: dict):
        encoded = {}

        for element in credentials.keys():
            if (element == "password"):
                encoded[element] = self.Authentification.hash(credentials[element])
            else:
                encoded[element] = credentials[element]
        return (encoded)
