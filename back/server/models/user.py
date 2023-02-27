class User:
    def __init__(self):
        self.data = {
            "username": None,
            "password": None,
            "history": [],
            "save": []
        }

    def build(self, credentials):
        content = self.data

        for key in credentials.keys():
            content[key] = credentials[key]
        return (content)

    def format(self):
        return (self.data)

    def validate(self, user):
        user_data = self.format()

        for key in user_data.keys():
            if (key not in user.keys()):
                return (False)
        return (True)