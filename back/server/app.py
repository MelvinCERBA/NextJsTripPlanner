from fastapi import FastAPI, Request, Depends, Header

from server.routes.home import router as HomeRouter
from server.routes.user import router as UserRouter

from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:8080",
    "http://localhost:3000",
    "http://localhost:8081",
    "http://127.0.0.1:8080",
    "http://127.0.0.1:3000",
    "http://127.0.0.1:8081",
    "http://0.0.0.0:8080",
    "http://0.0.0.0:3000",
    "http://0.0.0.0:8081"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(
    HomeRouter,
    tags = ["Home"]
)

app.include_router(
    UserRouter,
    tags = ["user"],
    prefix = "/user"
)




