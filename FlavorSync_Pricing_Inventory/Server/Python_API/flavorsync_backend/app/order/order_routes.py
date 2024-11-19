from fastapi import APIRouter

order_router = APIRouter(prefix="/orders")


@order_router.post("/import")
async def import_orders():
    return "Orders imported"
