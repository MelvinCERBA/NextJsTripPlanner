class Headers:
    def __init__(self):
        pass

    def Check(self, data, head):
        for i in head:
            if (i not in data):
                return (False)
        return (True)
