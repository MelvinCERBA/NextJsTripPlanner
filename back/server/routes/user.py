import os
from urllib.parse import urlencode

from fastapi import FastAPI, Request, Depends, Response, APIRouter
from fastapi.responses import RedirectResponse
from tools.responder import Responder
from tools.security import Authentification
from tools.validator import Validator
from tools.formatter import Formatter
from server.models.location import Location
from server.models.user import User

from server.database.db_crud import Crud

router = APIRouter()
Responder = Responder()
Authentification = Authentification()
Crud = Crud()
User = User()
Validator = Validator()
Formatter = Formatter(Authentification)

@router.post("/register")
async def post_regiser(credentials: dict):
    user = None

    if (Validator.validate(["username", "password"], credentials) == True):
        if (Crud.get_user(credentials["username"]) == None):
            user = Crud.insert_one_user(Formatter.user(User.build(credentials)))
            found = Crud.find_user_by_id(user.inserted_id)
            token = Authentification.generate({
                "username": found["username"],
                "password": found["password"]
            })
            return (Responder.Send(
                data = {
                    "message": "ok",
                    "token": token
                },
                code = 200
            ))
        return (Responder.Send(
            data = { "message": "username already taken" },
            code = 400
        ))
    return (Responder.Send(
        data = { "message": "invalid credentials format" },
        code = 422
    ))

@router.get("/decode")
async def get_decode(token: str):
    return (Authentification.decrypt(token))

@router.post("/login")
async def post_login(credentials: dict):
    user = None

    if (Validator.validate(["username", "password"], credentials) == True):
        user = Crud.get_user(credentials["username"])
        if (user != None):
            if (Authentification.compare(credentials["password"], user["password"]) == True):
                token = Authentification.generate({
                    "username": credentials["username"],
                    "password": credentials["password"]
                })
                return (Responder.Send(
                    data = {
                        "message": "ok",
                        "token": token
                    },
                    code = 200
                ))
            return (Responder.Send(
                data = { "message": "password not matching" },
                code = 400
            ))
        return (Responder.Send(
            data = { "message": "user not found" },
            code = 400
        ))
    return (Responder.Send(
        data = { "message": "invalid credentials format" },
        code = 422
    ))