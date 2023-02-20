from pymongo import MongoClient

class Database:
    def __init__(self):
        self.host = "mongodb://mongodb:27017"
        self.client = MongoClient(self.host)

    def Connect(self):
        return self.client["EpicRoadTrip"]