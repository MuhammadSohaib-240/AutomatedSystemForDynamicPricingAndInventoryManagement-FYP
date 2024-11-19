from pydantic import BaseModel, Field
from typing import List, Optional
from datetime import datetime


class OrderItemModel(BaseModel):
    menu_id: int = Field(..., description="Unique identifier for the menu item")
    quantity: int = Field(..., gt=0, description="Quantity of the item ordered")


class OrderModel(BaseModel):
    order_type: str = Field(..., description="Type of order: 'Pickup' or 'Dine-in'")
    order_items: List[OrderItemModel] = Field(..., description="List of items in the order")
    total_price: float = Field(..., ge=0, description="Total price of the order")
    order_status: str = Field(..., description="Status of the order, e.g., 'Pending', 'In Preparation', etc.")
    special_requests: Optional[str] = Field(None, description="Special instructions for the order")
    order_time: datetime = Field(..., description="Date and time when the order was placed")
    payment_status: str = Field(..., description="Payment status: 'Completed' or 'Pending'")

    class Config:
        schema_extra = {
            "example": {
                "order_type": "Dine-in",
                "order_items": [
                    {"menu_id": 101, "quantity": 2},
                    {"menu_id": 102, "quantity": 1}
                ],
                "total_price": 29.99,
                "order_status": "Pending",
                "special_requests": "Extra spicy",
                "order_time": "2024-11-19T13:45:00",
                "payment_status": "Pending"
            }
        }
