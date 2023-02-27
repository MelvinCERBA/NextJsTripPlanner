from pymongo import MongoClient
import bcrypt

client = MongoClient("mongodb://mongodb:27017/")

db = client["EpicRoadTrip"]
collection = db["users"]

many_users = [
    {   
        "id" : "0000000000001",
        "username": "Jonathon",
        "email" : "jonathon@gmail.com",
        "password": bcrypt.hashpw("Jonathon".encode("utf-8"),bcrypt.gensalt()),
        "history": [],
        "save": []
    },
    {   
        "id" : "0000000000002",
        "username": "Paul",
        "email" : "paul@gmail.com",
        "password": bcrypt.hashpw("Paul".encode("utf-8"),bcrypt.gensalt()),
        "history": [],
        "save": []
    },
    {   
        "id" : "0000000000003",
        "username": "Melvin",
        "email" : "melvin@gmail.com",
        "password": bcrypt.hashpw("Melvin".encode("utf-8"),bcrypt.gensalt()),
        "history": [],
        "save": []
    },
    {   
        "id" : "0000000000004",
        "username": "Michael",
        "email" : "michael@gmail.com",
        "password": bcrypt.hashpw("Michael".encode("utf-8"),bcrypt.gensalt()),
        "history": [],
        "save": []
    }
]

collection.insert_many(many_users)
