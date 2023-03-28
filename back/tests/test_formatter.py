import os

from tools.security import Authentification
from tools.formatter import Formatter

os.environ["private_key"] = "00000000000000000000000000000000"

#test for Formatter.py
def test_formater():

    authentification = Authentification()
    formater = Formatter(authentification)

    username = "Admin"
    password = "admin"

    response = formater.user({
            "username": "Admin",
            "password": password,
            "history": []
        })

    assert "username" in response.keys()
    assert "password" in response.keys()
    assert "history" in response.keys()
    assert "poi" not in response.keys()
    assert response["history"] == []
    assert response["username"] == username
    assert authentification.compare(password, response["password"]) == True
    assert password not in response