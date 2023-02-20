import os
from urllib.parse import urlencode

from fastapi import FastAPI, Request, Depends, Response, APIRouter
from fastapi.responses import RedirectResponse
from tools.responder import Responder
from tools.security import Authentification

router = APIRouter()
Responder = Responder()
Authentification = Authentification()

@router.post("/")
async def post_search(token: str):
    return (token)
    
