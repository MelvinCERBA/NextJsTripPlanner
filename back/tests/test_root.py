import os
import requests

from server.app import app
from fastapi.testclient import TestClient

os.environ["private_key"] = "00000000000000000000000000000000"

client = TestClient(app)

def test_root():
    response = requests.get("http://0.0.0.0:8081/")

    assert response.status_code == 200
    assert response.json() == {"data":{"message":"ok"},"code":200,"message":"OK"}

