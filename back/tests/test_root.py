from fastapi.testclient import TestClient

from server.app import app

import requests

client = TestClient(app)

def test_root():
    response = requests.get("http://0.0.0.0:8081/")

    assert response.status_code == 200
    assert response.json() == {"data":{"message":"ok"},"code":200,"message":"OK"}

