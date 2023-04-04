import os
import json
import requests
from urllib.parse import urlencode

from fastapi import FastAPI, Request, Depends, Response, APIRouter, Header
from typing import List, Union

from tools.responder import Responder
from tools.headers import Headers
from tools.security import Authentification
from tools.validator import Validator
from tools.formatter import Formatter
from server.models.location import Location
from server.models.user import User

from server.database.db_crud import Crud

from amadeus import Client, ResponseError

Amadeus = Client(
    client_id = str(os.getenv("amadeus_key")),
    client_secret = str(os.getenv("amadeus_secret"))
)
Crud = Crud()
Authentification = Authentification()
Headers = Headers()
router = APIRouter()
Responder = Responder()

@router.get("/location")
async def get_location(x_token: Union[List[str], None] = Header(default=None), location: str = None, response: Response = None):
    credentials = None
    responder = None
    decrypted = None
    map_result = requests.get("https://api.mapbox.com/geocoding/v5/mapbox.places/{}.json?country=fr&language=fr&access_token={}".format(
        location,
        os.getenv("access_token")
    ))

    if (Headers.Check(x_token) == True):
        decrypted = Authentification.decrypt(x_token[0])
        if (decrypted != None):
            credentials = json.loads(decrypted)
            result = Crud.add_history(credentials["user"], location)

    responder = Responder.Send(
        data = {
            "message": "ok",
            "result": map_result.json()
        },
        code = 200
    )
    response.status_code = responder["code"]

    return (responder)

@router.get("/event")
async def get_event(x_token: Union[List[str], None] = Header(default=None), longitude: float = 0.0, latitude: float = 0.0, radius: int = 50, hotels: bool = False, shopping: bool = False, airports: bool = False, response: Response = None):
    credentials = None
    result = {}
    selected = False
    command = None
    name = None
    filters = {
        "hotels": (hotels, Amadeus.reference_data.locations.hotels.by_geocode.get),
        "shopping": (shopping, Amadeus.shopping.activities.get),
        "airports": (airports, Amadeus.reference_data.locations.airports.get)
    }

    for fill in filters.keys():
        name = fill
        selected = filters[fill][0]
        command = filters[fill][1]
        if (selected == True):
            try:
                result[name] = command(latitude = latitude, longitude = longitude, radius = radius).result
            except ResponseError as ex:
                result[name] = []
                print(f"{name}: {ex}")

    responder = Responder.Send(
        data = {
            "message": "ok",
            "result": result
        },
        code = 200
    )
    response.status_code = responder["code"]

    return (responder)

@router.post("/save")
async def post_save(x_token: Union[List[str], None] = Header(default=None), roadtrip: dict = {}, response: Response = None):
    credentials = None
    result = {}
    decrypted = None
    responder = None

    if (Headers.Check(x_token) == True):
        decrypted = Authentification.decrypt(x_token[0])
        if (decrypted != None):
            credentials = json.loads(decrypted)
            result = Crud.add_save(credentials["user"], roadtrip)
            responder = Responder.Send(
                data = {
                    "message": "ok",
                    "result": "roadtrip saved"
                },
                code = 200
            )
        else:
            responder = Responder.Send(
                data = {
                    "message": "invalid token"
                },
                code = 400
            )
    else:
        responder = Responder.Send(
            data = {
                "message": "missing token header"
            },
            code = 400
        )
    response.status_code = responder["code"]

    return (responder)

@router.get("/roadtrips")
async def get_roadtrips(x_token: Union[List[str], None] = Header(default=None)):
    decrypted = None
    credentials = None
    responder = None
    result = []

    if (Headers.Check(x_token) == True):
        decrypted = Authentification.decrypt(x_token[0])
        if (decrypted != None):
            credentials = json.loads(decrypted)
            result = Crud.get_roadtrips(credentials["user"])
            return (Responder.Send(
                data = {
                    "message": "ok",
                    "result": result
                },
                code = 200
            )
        else:
            responder = Responder.Send(
                data = {
                    "message": "invalid token"
                },
                code = 400
            )
    else:
        responder = Responder.Send(
            data = {
                "message": "missing token header"
            },
            code = 400
        )

    response.status_code = responder["code"]

    return (responder)