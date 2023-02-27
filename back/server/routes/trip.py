import os
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

Crud = Crud()
Authentification = Authentification()
Headers = Headers()
router = APIRouter()
Responder = Responder()

@router.get("/search")
async def get_search(x_token: Union[List[str], None] = Header(default=None), location: str = None):
    headers = x_token
    credentials = None
    
    if (Headers.Check(headers) == True):
        credentials = Authentification.decrypt(headers[0])
        print(credentials)
        Crud.add_history(headers[0], None)

        return (Responder.Send(
            data = { "message": "ok" },
            code = 200
        ))
    return (Responder.Send(
        data = { "message": "missing header" },
        code = 422
    ))
