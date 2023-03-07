import os
import requests

from fastapi.testclient import TestClient
from server.app import app

os.environ["private_key"] = "00000000000000000000000000000000"
client = TestClient(app)

#test location route in trip.py
def test_trip_location():
    
    bad_response = requests.get("http://0.0.0.0:8081/trip/location?location=Paris", 
        headers = { "X-Token": "Bonjour" }
    )   

    assert bad_response.status_code != 404

    response = requests.get("http://0.0.0.0:8081/trip/location?location=Paris", 
        headers = { "X-Token": "gAAAAABkBwPpGQ7HGxP0I2c2lSeoxu3oH7U6ME4bwXxxfyAWL2kYWi6NwkhkjkVOOKFoS57DNMbqNI4KbfRLECmHmy3iMb7TQ2FzK0xxCDGJGyOht0H91ZinBr_f1AW_6tdAzoCgTxqqzYKIulhSm_CWXRk9MFVoDW6MmZ8UNfnvXIvUdvz8dqdST-gR1Mo-K4vxyJTOk1MG" }
    )

    assert response.status_code == 200

#test event route in trip.py
def test_trip_event():

    response = requests.get("http://0.0.0.0:8081/trip/envent?longitude=0.0&latitude=0.0", 
        headers = { "X-Token": "gAAAAABkBwPpGQ7HGxP0I2c2lSeoxu3oH7U6ME4bwXxxfyAWL2kYWi6NwkhkjkVOOKFoS57DNMbqNI4KbfRLECmHmy3iMb7TQ2FzK0xxCDGJGyOht0H91ZinBr_f1AW_6tdAzoCgTxqqzYKIulhSm_CWXRk9MFVoDW6MmZ8UNfnvXIvUdvz8dqdST-gR1Mo-K4vxyJTOk1MG"}
    )

    assert response.status_code == 404


#test roadtrips route in trip.py
def test_trip_raodtrips():

    no_tocken_response = requests.get("http://0.0.0.0:8081/trip/roadtrips?city=Paris", 
        headers = {}
    )

    json_data_no_tocken = no_tocken_response.json()
    assert json_data_no_tocken["data"]["message"] == "missing token header"
    assert json_data_no_tocken["code"] == 400

    bad_response = requests.get("http://0.0.0.0:8081/trip/roadtrips?city=Paris", 
        headers = { "X-Token": "Bonjour" }
    )

    json_data_bad_tocken = bad_response.json()
    assert json_data_bad_tocken["data"]["message"] == "invalid token"
    assert json_data_bad_tocken["code"] == 400
    
    response = requests.get("http://0.0.0.0:8081/trip/roadtrips?city=Paris", 
        headers = { "X-Token": "gAAAAABkBwPpGQ7HGxP0I2c2lSeoxu3oH7U6ME4bwXxxfyAWL2kYWi6NwkhkjkVOOKFoS57DNMbqNI4KbfRLECmHmy3iMb7TQ2FzK0xxCDGJGyOht0H91ZinBr_f1AW_6tdAzoCgTxqqzYKIulhSm_CWXRk9MFVoDW6MmZ8UNfnvXIvUdvz8dqdST-gR1Mo-K4vxyJTOk1MG"}
    )

    json_data = response.json()
    assert json_data["data"]["message"] == "ok"
    assert json_data["data"]["result"] == [] #because no roadtrip to Paris
    assert json_data["code"] == 200

#test save route in trip.py
def test_trip_save():

    no_tocken_no_trips_response = requests.post("http://0.0.0.0:8081/trip/save", 
        headers = {},
        json = {}
    )

    json_data_no_tocken_no_trips = no_tocken_no_trips_response.json()
    assert json_data_no_tocken_no_trips["data"]["message"] == "missing token header"
    assert json_data_no_tocken_no_trips["code"] == 400

    no_tocken_with_trips_response = requests.post("http://0.0.0.0:8081/trip/save", 
        headers = {},
        json = {
            "trips": {
                "travel": [
                    {
                        "name": "Paris",
                        "start": "0000",
                        "end": "0000",
                        "events": [
                            {
                                "name": "visite de la tour eiffel"
                            },
                            {
                                "name": "visite de la tour eiffel"
                            }
                        ]
                    },
                    {
                        "name": "Marseille",
                        "start": "0000",
                        "end": "0000",
                        "events": [
                        ]
                    }
                ]
            }
        }
    )

    json_data_no_tocken_with_trips = no_tocken_with_trips_response.json()
    assert json_data_no_tocken_with_trips["data"]["message"] == "missing token header"
    assert json_data_no_tocken_with_trips["code"] == 400

    bad_tocken_no_trips_response = requests.post("http://0.0.0.0:8081/trip/save", 
        headers = { "X-Token": "Bonjour" },
        json = {}
    )

    json_data_bad_tocken = bad_tocken_no_trips_response.json()
    assert json_data_bad_tocken["data"]["message"] == "invalid token"
    assert json_data_bad_tocken["code"] == 400

    bad_tocken_with_trips_response = requests.post("http://0.0.0.0:8081/trip/save", 
        headers = { "X-Token": "Bonjour" },
        json = {
            "trips": {
                "travel": [
                    {
                        "name": "Paris",
                        "start": "0000",
                        "end": "0000",
                        "events": [
                            {
                                "name": "visite de la tour eiffel"
                            },
                            {
                                "name": "visite de la tour eiffel"
                            }
                        ]
                    },
                    {
                        "name": "Marseille",
                        "start": "0000",
                        "end": "0000",
                        "events": [
                        ]
                    }
                ]
            }
        }
    )

    json_data_bad_with_trips_tocken = bad_tocken_with_trips_response.json()
    assert json_data_bad_with_trips_tocken["data"]["message"] == "invalid token"
    assert json_data_bad_with_trips_tocken["code"] == 400

    tocken_with_bad_trips_response = requests.post("http://0.0.0.0:8081/trip/save", 
        headers = { "X-Token": "gAAAAABkBwPpGQ7HGxP0I2c2lSeoxu3oH7U6ME4bwXxxfyAWL2kYWi6NwkhkjkVOOKFoS57DNMbqNI4KbfRLECmHmy3iMb7TQ2FzK0xxCDGJGyOht0H91ZinBr_f1AW_6tdAzoCgTxqqzYKIulhSm_CWXRk9MFVoDW6MmZ8UNfnvXIvUdvz8dqdST-gR1Mo-K4vxyJTOk1MG" },
        json = {
            "trips": {
                "travel": [
                    {
                        "name": "Paris",
                        "start": "0000",
                        "end": "0000",
                        "events": [
                            {
                                "name": "visite de la tour eiffel"
                            },
                            {
                                "name": "visite de la tour eiffel"
                            }
                        ]
                    },
                    {
                        "name": "Marseille",
                        "start": "0000",
                        "end": "0000",
                        "events": [
                        ]
                    }
                ]
            }
        }
    )

    json_data_tocken_with_bad_trips = tocken_with_bad_trips_response.json()
    assert json_data_tocken_with_bad_trips["data"]["message"] == "ok"
    assert json_data_tocken_with_bad_trips["data"]["result"] == "roadtrip saved"
    assert json_data_tocken_with_bad_trips["code"] == 200

    tocken_with_trips_response = requests.post("http://0.0.0.0:8081/trip/save", 
        headers = { "X-Token": "gAAAAABkBwPpGQ7HGxP0I2c2lSeoxu3oH7U6ME4bwXxxfyAWL2kYWi6NwkhkjkVOOKFoS57DNMbqNI4KbfRLECmHmy3iMb7TQ2FzK0xxCDGJGyOht0H91ZinBr_f1AW_6tdAzoCgTxqqzYKIulhSm_CWXRk9MFVoDW6MmZ8UNfnvXIvUdvz8dqdST-gR1Mo-K4vxyJTOk1MG" },
        json = {
            "trips": {
                "travel": [
                    {
                        "name": "Paris",
                        "start": "0000",
                        "end": "0000",
                        "events": [
                            {
                                "name": "visite de la tour eiffel"
                            },
                            {
                                "name": "visite de la tour eiffel"
                            }
                        ]
                    },
                    {
                        "name": "Marseille",
                        "start": "0000",
                        "end": "0000",
                        "events": []
                    }
                ]
            }
        }
    )

    json_data_tocken_with_trips = tocken_with_trips_response.json()
    assert json_data_tocken_with_trips["data"]["message"] == "ok"
    assert json_data_tocken_with_trips["data"]["result"] == "roadtrip saved"
    assert json_data_tocken_with_trips["code"] == 200