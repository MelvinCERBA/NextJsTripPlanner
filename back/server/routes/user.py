import os
import json

from urllib.parse import urlencode

from fastapi import FastAPI, Request, Depends, Response, APIRouter, Header
from typing import List, Union

from fastapi.responses import RedirectResponse
from tools.responder import Responder
from tools.security import Authentification
from tools.validator import Validator
from tools.formatter import Formatter
from tools.headers import Headers
from server.models.location import Location
from server.models.user import User

from server.database.db_crud import Crud

router = APIRouter()
Responder = Responder()
Authentification = Authentification()
Crud = Crud()
User = User()
Headers = Headers()
Validator = Validator()
Formatter = Formatter(Authentification)

@router.post("/register")
async def post_regiser(credentials: dict, response: Response = None):
    user = None
    responder = None

    if (Validator.validate(["username", "password"], credentials) == True):
        if (Crud.get_user(credentials["username"]) == None):
            user = Crud.insert_one_user(Formatter.user(User.build(credentials)))
            found = Crud.find_user_by_id(user.inserted_id)
            token = Authentification.generate({
                "username": found["username"],
                "password": found["password"]
            })
            responder = Responder.Send(
                data = {
                    "message": "ok",
                    "token": token
                },
                code = 200
            )
            response.status_code = responder["code"]
            return (responder)
        responder = Responder.Send(
            data = { "message": "username already taken" },
            code = 400
        )
        response.status_code = responder["code"]
        return (responder)
    responder = Responder.Send(
        data = { "message": "invalid credentials format" },
        code = 422
    )
    response.status_code = responder["code"]
    return (responder)

@router.get("/profile")
async def get_profile(x_token: Union[List[str], None] = Header(default=None), response: Response = None):
    decrypted = None

    if (Headers.Check(x_token) == True):
        if (len(x_token) > 0):
            if (x_token[0] != None):
                decrypted = Authentification.decrypt(x_token[0])
                if (decrypted != None):
                    responder = Responder.Send(
                        data = { "message": json.loads(decrypted) },
                        code = 200
                    )
                    response.status_code = responder["code"]
                    return (responder)

                responder = Responder.Send(
                    data = { "message": "invalid token header" },
                    code = 422
                )
                response.status_code = responder["code"]
                return (responder)
        responder = Responder.Send(
            data = { "message": "invalid token header" },
            code = 422
        )
        response.status_code = responder["code"]
        return (responder)
    responder = Responder.Send(
        data = { "message": "missing token header" },
        code = 400
    )
    response.status_code = responder["code"]
    return (responder)

@router.post("/login")
async def post_login(credentials: dict, response: Response = None):
    user = None
    responder = None

    if (Validator.validate(["username", "password"], credentials) == True):
        user = Crud.get_user(credentials["username"])
        if (user != None):
            if (Authentification.compare(credentials["password"], user["password"]) == True):
                token = Authentification.generate({
                    "username": credentials["username"],
                    "password": credentials["password"]
                })
                responder = Responder.Send(
                    data = {
                        "message": "ok",
                        "token": token
                    },
                    code = 200
                )
                response.status_code = responder["code"]
                return (responder)
            responder = Responder.Send(
                data = { "message": "password not matching" },
                code = 400
            )
            response.status_code = responder["code"]
            return (responder)
        responder = Responder.Send(
            data = { "message": "user not found" },
            code = 400
        )
        response.status_code = responder["code"]
        return (responder)
    responder = Responder.Send(
        data = { "message": "invalid credentials format" },
        code = 422
    )
    response.status_code = responder["code"]
    return (responder)