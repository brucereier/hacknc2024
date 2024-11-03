from typing import Union, List

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager
from sqlmodel import Session, create_engine, SQLModel, select
from sqlalchemy.exc import SQLAlchemyError
from sqlalchemy.orm import joinedload, selectinload

from app.models.models import Event, Post, User, Chat

from dotenv import load_dotenv

import os

load_dotenv()

# Database configuration
DATABASE_URL = os.getenv("DATABASE_URL")


# Create the SQLAlchemy engine
engine = create_engine(DATABASE_URL)

@asynccontextmanager
async def lifespan(app: FastAPI):
    # SQLModel.metadata.drop_all(engine)
    SQLModel.metadata.create_all(engine)
    yield

app = FastAPI(lifespan=lifespan)

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "*"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Create an EventData entry
@app.post("/events/", response_model=Event)
def create_event(event: Event):
    with Session(engine) as session:
        session.add(event)
        session.commit()
        session.refresh(event)
        return event
    
@app.get("/events/", response_model=List[Event])
def get_events():
    with Session(engine) as session:
        statement = select(Event)
        events = session.exec(statement).all()
        
        if events is None:
            raise HTTPException(status_code=404, detail="Post not found")
        
        return events
    
@app.get("/events/{event_id}", response_model=Event)
def get_event_by_id(event_id: int):
    with Session(engine) as session:
        statement = select(Event).where(Event.id == event_id)
        event = session.exec(statement).first()
        
        if event is None:
            raise HTTPException(status_code=404, detail="Post not found")
        
        return event
    
@app.post("/posts/", response_model=Post)
def create_post(post: Post):
    with Session(engine) as session:
        session.add(post)
        session.commit()
        session.refresh(post)
        return post
    
@app.get("/posts/{post_id}", response_model=Post)
def get_post(post_id: int):
    with Session(engine) as session:
        statement = select(Post).where(Post.id == post_id).options(selectinload(Post.event))
        post = session.exec(statement).first()
        
        if post is None:
            raise HTTPException(status_code=404, detail="Post not found")
        
        return post

@app.get("/events/{event_id}/posts/", response_model=list[Post])
def get_posts_by_event(event_id: int):
    with Session(engine) as session:
        statement = select(Post).where(Post.event_id == event_id)
        posts = session.exec(statement).all()
        
        if posts is None:
            raise HTTPException(status_code=404, detail="Post not found")
        
        return posts
    
@app.get("/users/{user_id}/posts/", response_model=list[Post])
def get_posts_by_event(user_id: int):
    with Session(engine) as session:
        statement = select(Post).where(Post.user_id == user_id)
        posts = session.exec(statement).all()
        
        if posts is None:
            raise HTTPException(status_code=404, detail="Post not found")
        
        return posts
    
@app.get("/users/", response_model=list[User])
def get_users():
    with Session(engine) as session:
        statement = select(User)
        users = session.exec(statement).all()
        
        if users is None:
            raise HTTPException(status_code=404, detail="Post not found")
        
        return users
    
@app.get("/users/{user_id}", response_model=User)
def get_users_by_id(user_id: int):
    with Session(engine) as session:
        statement = select(User).where(User.id == user_id)
        user = session.exec(statement).first()
        
        if user is None:
            raise HTTPException(status_code=404, detail="User not found")
        
        return user
    
@app.get("/chats/users/{user_id}", response_model=list[Chat])
def get_chats_by_user(user_id: int):
    with Session(engine) as session:
        statement = select(Chat).where(Chat.user_id == user_id)
        chats = session.exec(statement).all()
        
        if chats is None:
            raise HTTPException(status_code=404, detail="Chats not found")
        
        return chats
    
@app.get("/chats/events/{event_id}", response_model=list[Chat])
def get_chats_by_event(event_id: int):
    with Session(engine) as session:
        statement = select(Chat).where(Chat.event_id == event_id)
        chats = session.exec(statement).all()
        
        if chats is None:
            raise HTTPException(status_code=404, detail="Chats not found")
        
        return chats
    

@app.get("/chats/{chat_id}", response_model=Chat)
def get_chats_by_id(chat_id: int):
    with Session(engine) as session:
        statement = select(Chat).where(Chat.id == chat_id)
        chat = session.exec(statement).first()
        
        if chat is None:
            raise HTTPException(status_code=404, detail="Chat not found")
        
        return chat


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
