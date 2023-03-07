import os
import random
import requests

from fastapi.testclient import TestClient
from server.app import app

os.environ["private_key"] = "00000000000000000000000000000000"

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
    assert json_data["code"] == 200

def test_user_profil_bad_token():
    response_with_bad_token = requests.get("http://0.0.0.0:8081/user/profile",
        headers = { "X-Token": "Bonjour" }
    )

    assert response_with_bad_token.status_code == 500

def test_user_profil_no_token():
    json_response_no_token = {}
    response_with_no_token = requests.get("http://0.0.0.0:8081/user/profile")

    assert response_with_no_token.status_code == 200
    json_response_no_token = response_with_no_token.json()

    assert json_response_no_token["data"]["message"] == "missing token header"
    assert json_response_no_token["code"] == 400

def test_user_profil_good_token():
    json_response_no_token = {}
    response_with_no_token = requests.get("http://0.0.0.0:8081/user/profile",
        headers = { "X-Token": "gAAAAABj_f488WROHxmD8IQvda4aI6-CTHMzY1P1HdPq3leAK7AxT-pNkYAIX3Zj-pP1c_AjIYQBex2kTcTUi4jCN8580QsvUdQkBgz_LBZ_pu883CunUbkMQyi6BJCCZpusATvC0PRQHLj0pW3ga8vtL9ZrwbSVxGFlhqiRQy4akfDKuT4RTgoU7B9bx7IDIOjfPWOuoJOv" }
    )

    assert response_with_no_token.status_code == 200
    json_response_no_token = response_with_no_token.json()

    assert json_response_no_token["data"]["message"]["user"] == "test"
    assert json_response_no_token["code"] == 200