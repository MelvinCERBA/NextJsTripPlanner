import os

from server.models.user import User
from tools.security import Authentification

os.environ["private_key"] = "00000000000000000000000000000000"

#test for security.py
def test_security():

    authentification = Authentification()

    init_user = User()

    user_test = {
        "username": "Jona",
        "password": "Jona",
        "history": [],
        "save": []
    }

    response_validate_true = init_user.validate(user_test)

    assert response_validate_true == True

    user = init_user.build(user_test)

    authent_resp = authentification.generate(user)

    assert authent_resp != None
    
    decrypt_user = authentification.decrypt(authent_resp)

    assert decrypt_user != None

    data = "Bonjour"

    hash_user = authentification.hash(data)

    assert hash_user != None

    check = authentification.compare(data, hash_user)

    assert check == True

    