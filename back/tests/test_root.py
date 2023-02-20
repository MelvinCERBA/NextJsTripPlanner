from fastapi.testclient import TestClient

from server.app import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"data":{"message":"ok"},"code":200,"message":"OK"}

