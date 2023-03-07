import os
import requests

from fastapi.testclient import TestClient
from server.app import app

os.environ["private_key"] = "00000000000000000000000000000000"
client = TestClient(app)

#test for home.py
def test_home():
    response = requests.get("http://0.0.0.0:8081/")

    assert response.status_code == 200
    message = response.json()

    assert message["data"]["message"] == "ok" 