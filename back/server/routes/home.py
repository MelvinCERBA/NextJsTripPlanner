import os
from urllib.parse import urlencode

from fastapi import FastAPI, Request, Depends, Response, APIRouter
from tools.responder import Responder

router = APIRouter()
Responder = Responder()

@router.get("/")
async def get_root():
    return (Responder.Send(
        data = { "message": "ok" },
        code = 200
    ))
