class Validator:
    def __init__(self):
        pass

    def validate(self, contents: list, data: dict):
        for content in contents:
            if (content not in data.keys()):
                return (False)
        return (True)
