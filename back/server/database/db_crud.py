import json

from tools.connect_db import Database

class Crud:
    def __init__(self):
        self.db = Database()
        self.connect_db = self.db.Connect()
        self.user_collection = self.connect_db["users"]

    def insert_one_user(self, user):
        return self.user_collection.insert_one(user)

    def insert_many_user(self, array_user):
        return self.user_collection.insert_many(array_user)

    def update_user(self, user):
        return self.user_collection.update_one({"_id": user["id"]}, { "$set": { "user": user}})

    def replace_user(self, user):
        return self.user_collection.replace_one({"_id": user["id"]}, user)

    def delete_user(self, id):
        return self.user_collection.delete_one({"_id": id})

    def find_user(self, user):
        return self.user_collection.find_one({"_id": user["id"]})
    
    def find_user_by_id(self, id):
        return self.user_collection.find_one({"_id": id})

    def find_admin(self):
        return self.user_collection.find_one({"role": "admin"})
    
    def get_user(self, username: str):
        return self.user_collection.find_one({"username": username})

    def get_roadtrips(self, username: str):
        user = self.get_user(username)
        return (user["save"])

    def count_user_collection(self):
        return self.user_collection.count_documents({})

    def add_history(self, user, location):
        user_replace = self.get_user(user)
        copy = self.get_user(user)
        user_replace["history"].append(location)
        
        return self.user_collection.replace_one(copy, user_replace)

    def delete_history(self, user, location):
        user_replace = self.get_user(user)
        copy = self.get_user(user)
        user_replace["history"].remove(location)

        return self.user_collection.replace_one(copy, user_replace)

    def add_save(self, user, trip):
        user_replace = self.get_user(user)
        copy = self.get_user(user)
        user_replace["save"].append(trip)
        
        return self.user_collection.replace_one(copy, user_replace)

    def delete_save(self, user, trip):
        user_replace = self.get_user(user)
        copy = self.get_user(user)
        user_replace["save"].remove(trip)

        return self.user_collection.replace_one(copy, user_replace)
