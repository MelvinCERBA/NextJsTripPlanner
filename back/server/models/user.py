
class User:
    def __init__(self):
        pass

    def format(self):
        return ({
            "username": None,
            "password": None
        })

    def validate(self, user):
        user_data = self.format()

        for key in user_data.keys():
            if (key not in user_data):
                return (False)
        return (True)