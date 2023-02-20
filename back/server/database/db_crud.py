from tools.connect_db import Database

class Crud:
    def __init__(self):
        self.db = Database()
        self.connect_db = self.db.Connect() #connect to the DB
        self.user_collection = self.connect_db["users"] #create collection users

    def insert_one_user(self, user):
        return self.user_collection.insert_one(user)

    def insert_many_user(self, array_user):
        return self.user_collection.insert_many(array_user)

    def update_user(self, user):
        return self.user_collection.update_one({"_idid": user["id"]}, { "$set": { "user": user}})

    def replace_user(self, user):
        return self.user_collection.replace_one({"_idid": user["id"]}, user)

    def delete_user(self, id):
        return self.user_collection.delete_one({"_id": id})

    def find_user(self, user):
        return self.user_collection.find_one({"_id": user["id"]})
    
    def find_user_by_id(self, id):
        return self.user_collection.find_one({"_id": id})

    def find_admin(self):
        return self.user_collection.find_one({"role": "admin"})
    
    def get_user(self, username):
        return self.user_collection.find_one({"username": username})

    def count_user_collection(self):
        return self.user_collection.count_documents({})

    def add_crypto(self, user, coins):
        user_replace = self.find_user(user)
        copy = self.find_user(user)
        user_replace["profile"]["currencies"].append(coins)
        return self.user_collection.replace_one(copy, user_replace)

    def delete_crypto(self, user, coins):
        user_replace = self.find_user(user)
        copy = self.find_user(user)
        user_replace["profile"]["currencies"].remove(coins)
        return self.user_collection.replace_one(copy, user_replace)

    def add_rss(self, user, rss):
        user_replace = self.find_user(user)
        copy = self.find_user(user)
        user_replace["profile"]["rss"].append(rss)
        return self.user_collection.replace_one(copy, user_replace)

    def delete_rss(self, user, rss):
        user_replace = self.find_user(user)
        copy = self.find_user(user)
        user_replace["profile"]["rss"].remove(rss)
        return self.user_collection.replace_one(copy, user_replace)

    def add_authorized_rss(self, rss):
        user_replace = self.find_admin()
        copy = self.find_admin()
        user_replace["authorized"]["rss"].append(rss)
    
        return self.user_collection.replace_one(copy, user_replace)

    def delete_authorized_rss(self, rss):
        user_replace = self.find_admin()
        copy = self.find_admin()
        user_coins_update["authorized"]["rss"].remove(rss)
    
        return self.user_collection.replace_one(copy, user_coins_update)

    def add_authorized_crypto(self, coin):
        user_replace = self.find_admin()
        copy = self.find_admin()
        user_replace["authorized"]["currencies"].append(coin)
    
        return self.user_collection.replace_one(copy, user_replace)

    def delete_authorized_crypto(self, coin):
        user_replace = self.find_admin()
        copy = self.find_admin()
        user_coins_update["authorized"]["currencies"].remove(coin)
    
        return self.user_collection.replace_one(copy, user_coins_update)
