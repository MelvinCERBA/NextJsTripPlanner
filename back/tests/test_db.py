import unittest

from server.database.db_crud import Crud

db_crud = Crud()

class insertion_test(IsolatedAsyncioTestCase):
    #tests insert
    async def setUp(self):
        self.user = {
            "id": "00000000000",
            "username": "michael",
            "email": "michael@gmail.com",
            "password": "michael",
            "role": 1
        }
        self.inser = await db_crud.insert_one_user(self.user)
        self.delet = await db_crud.delete_user(self.user)

    async def test_one(self):

        self.assertEqual(db_crud.count_user_collection(), 1)
        self.assertEqual(db_crud.count_user_collection(), 0)

    # def test_many(self):
    #     db_crud.insert_many_user([{
    #         "id": "00000000001",
    #         "username": "jonathon",
    #         "email": "jonathon@gmail.com",
    #         "password": "jonathon",
    #         "role": 1
    #     },
    #     {
    #         "id": "00000000002",
    #         "username": "paul",
    #         "email": "paul@gmail.com",
    #         "password": "paul",
    #         "role": 0
    #     }])

    #     self.assertEqual(db_crud.count_user_collection(), 3)

    #tests update & replace users

    #tests delete users

    #tests find users

    #tests count users

    #tests add crypto for user

    #tests delete crypto for user



if __name__ == '__main__':
    unittest.main()