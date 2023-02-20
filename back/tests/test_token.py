from fastapi.testclient import TestClient

from server.app import app

client = TestClient(app)

def test_build_token():
    response = client.get("/token/build?user=00000000")
    assert response.status_code == 200
    data = response.json()

    assert data["code"] == 200
    assert data["data"]["token"] != None
    assert data["message"] == "OK"


def test_validate_no_header():
    response = client.get("/token/validate")

    assert response.status_code == 200
    data = response.json()

def test_validate_wrong_token():
    response = client.get("/token/validate")

    assert response.status_code == 200
    data = response.json()

