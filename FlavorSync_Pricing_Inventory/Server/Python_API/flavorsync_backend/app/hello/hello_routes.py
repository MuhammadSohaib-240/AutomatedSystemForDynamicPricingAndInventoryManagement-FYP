from fastapi import APIRouter
from .hello_controller import hello_response

hello_router = APIRouter(prefix="/hello")


@hello_router.get("/")
async def get_hello():
    return hello_response()
