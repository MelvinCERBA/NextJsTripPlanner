import os

from server.models.user import User

os.environ["private_key"] = "00000000000000000000000000000000"

#test for user.py
def test_user():

    user = User()

    credentials = {
        "username": "Jona",
        "password": "Jona",
        "history": [],
        "save": []
    }

    none_credentials = {
        "username": None,
        "password": None,
        "history": [],
        "save": []
    }

    response_validate_true = user.validate(credentials)

    assert response_validate_true == True

    response_none = user.format()

    assert response_none.keys() == none_credentials.keys()
    assert response_none == none_credentials
    assert "poi" not in response_none.keys()
    assert response_none["username"] == none_credentials["username"]
    assert response_none["password"] == none_credentials["password"]
    assert response_none["history"] == []
    assert response_none["save"] == []

    response = user.build(credentials)

    assert response.keys() == credentials.keys()
    assert "poi" not in response.keys()
    assert response["username"] == credentials["username"]
    assert response["password"] == credentials["password"]
    assert response["history"] == []
    assert response["save"] == []


