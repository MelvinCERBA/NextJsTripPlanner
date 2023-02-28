import os

os.environ["private_key"] = "00000000000000000000000000000000"

from tools.validator import Validator

#test for validator.py
def test_validator():

    validator = Validator()

    contents = ["data", "code", "message"]
    data = {
        "data": "The data",
        "code": 400,
        "message": "The message"
    }

    response = validator.validate(contents, data)

    assert response == True

    bad_contents = ["data", "poi", "message"]

    response = validator.validate(bad_contents, data)

    assert response == False