import os
from urllib.parse import urlencode

from fastapi import FastAPI, Request, Depends, Response, APIRouter, Response
from tools.responder import Responder

router = APIRouter()
Responder = Responder()

@router.get("/")
async def get_root(response: Response = None):
    responder = Responder.Send(
        data = { "message": "ok" },
        code = 200
    )
    response.status_code = responder["code"]

    return (responder)
