import os

from tools.headers import Headers

os.environ["private_key"] = "00000000000000000000000000000000"

#test for headers.py
def test_header():

    header = Headers()

    head = {
            "username": "Admin",
            "password": "root",
            "history": []
        }

    response = header.Check(head)

    assert response == True

    head_false = None

    response_false = header.Check(head_false)

    assert response_false == False