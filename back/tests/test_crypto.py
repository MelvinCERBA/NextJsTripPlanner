from fastapi.testclient import TestClient

from server.app import app

client = TestClient(app)

def test_historic():
    response = client.post("/crypto/historic", {"currencies": ["ETH-USD"]})
    assert response.status_code == 200
    data = response.json()


