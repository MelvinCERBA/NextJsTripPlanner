import os
import random
import requests

os.environ["private_key"] = "00000000000000000000000000000000"

from fastapi.testclient import TestClient
from server.app import app

client = TestClient(app)

def test_user_register():
    response = requests.post("http://0.0.0.0:8081/user/register")

    assert response.status_code == 422
    assert response.json() == {
        'detail': [
            {
                'loc': [
                    'body'
                ],
                'msg': 'field required',
                'type': 'value_error.missing'
            }
        ]
    }

def test_user_registered():
    json_data = {}
    response = requests.post("http://0.0.0.0:8081/user/register",
        headers = {
            "Content-Type": "application/json",
        },
        json = {
            "username": "test_{}".format(
                random.randint(0, 10000)
            ),
            "password": "test"
        }
    )

    assert response.status_code == 200
    json_data = response.json()

    assert json_data["data"]["message"] == "ok"

def test_user_already_registered():
    json_data = {}
    response = requests.post("http://0.0.0.0:8081/user/register",
        headers = {
            "Content-Type": "application/json",
        },
        json = {
            "username": "neo",
            "password": "issou"
        }
    )

    assert response.status_code == 200
    json_data = response.json()

    assert json_data["data"]["message"] == "username already taken"
    assert json_data["code"] == 400
