import os
import requests

from fastapi.testclient import TestClient
from server.app import app

os.environ["private_key"] = "00000000000000000000000000000000"
client = TestClient(app)

#test location route in trip.py
def test_trip_location():
    
    response = requests.get("http://0.0.0.0:8081/trip/location?location=Paris", headers = {
        "X-Token": "MA BITE EST DANS LA MOYENNE DE 2064 !!!"
    })

    assert response.status_code != 404

    response = requests.get("http://0.0.0.0:8081/trip/location?location=Paris", headers = {
        "X-Token": "gAAAAABj_f488WROHxmD8IQvda4aI6-CTHMzY1P1HdPq3leAK7AxT-pNkYAIX3Zj-pP1c_AjIYQBex2kTcTUi4jCN8580QsvUdQkBgz_LBZ_pu883CunUbkMQyi6BJCCZpusATvC0PRQHLj0pW3ga8vtL9ZrwbSVxGFlhqiRQy4akfDKuT4RTgoU7B9bx7IDIOjfPWOuoJOv"
    })

    assert response.status_code == 200

#test event route in trip.py
def test_trip_event():
    response = requests.get("http://0.0.0.0:8081/trip/envent?longitude=0.0&latitude=0.0", 
                            headers = { "X-Token": "MA BITE EST DANS LA MOYENNE DE 2064 !!!" }
    )

    assert response.status_code != 404