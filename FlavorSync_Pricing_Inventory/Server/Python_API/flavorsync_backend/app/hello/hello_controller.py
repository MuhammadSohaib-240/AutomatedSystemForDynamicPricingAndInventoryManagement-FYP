from .hello_service import get_hello_message


def hello_response():
    return {"message": get_hello_message()}
