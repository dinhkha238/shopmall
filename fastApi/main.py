from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI,HTTPException,Depends
from pydantic import BaseModel
import jwt
from datetime import datetime, timedelta
from typing import Union, Any
from security import reusable_oauth2
from security import validate_token
from fastapi.security import OAuth2PasswordBearer

SECURITY_ALGORITHM = 'HS256'
SECRET_KEY = '123456'
app = FastAPI()
class Data(BaseModel):
    name: str
    password: str    
# CORS
origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Token =''
def verify_password(username, password):
    if username == 'a' and password == 'a':
        return True
    return False
def generate_token(username: Union[str, Any]) -> str:
    expire = datetime.utcnow() + timedelta(
        seconds=60 * 60 * 24 * 3  # Expired after 3 days
    )
    to_encode = {
        "exp": expire, "username": username
    }
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=SECURITY_ALGORITHM)
    return encoded_jwt

@app.post("/login")
def push_user(data: Data):
    print(f'[x] data: {data.__dict__}')
    if verify_password(username=data.name, password=data.password):
        token = generate_token(data.name)
        return {
            'token':token
        }
    else:
        raise HTTPException(status_code=404, detail="User not found")

@app.get('/books',dependencies=[Depends(validate_token)])
def list_books():
    return {'data': ['Sherlock Homes', 'Harry Potter', 'Rich Dad Poor Dad']}







oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


@app.get("/items/")
async def read_items(token: str = Depends(oauth2_scheme)):
    return {"token": token}