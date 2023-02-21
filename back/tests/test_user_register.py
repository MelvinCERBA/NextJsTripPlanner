from fastapi.testclient import TestClient

from server.app import app

import random
import requests

client = TestClient(app)

def test_user_login():
    response = requests.post("http://0.0.0.0:8081/user/login")

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

def test_user_login_invalid():
    json_data = {}
    response = requests.post("http://0.0.0.0:8081/user/login",
        headers = {
            "Content-Type": "application/json",
        },
        json = {
            "username": "test_{}".format(
                random.randint(0, 10000)
            ),
            "password": "THIS IS A RANDOM PASSWORD"
        }
    )

    assert response.status_code == 200
    json_data = response.json()


    assert json_data["data"]["message"] == "user not found"
    assert json_data["code"] == 400

def test_user_logged_in():
    json_data = {}
    response = requests.post("http://0.0.0.0:8081/user/login",
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

    assert json_data["data"]["message"] == "ok"
