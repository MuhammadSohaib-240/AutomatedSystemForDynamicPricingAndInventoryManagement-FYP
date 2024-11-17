from fastapi import FastAPI
from app.hello.hello_routes import hello_router

app = FastAPI()

app.include_router(hello_router, prefix="/api")
