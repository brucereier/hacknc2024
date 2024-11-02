from sqlmodel import SQLModel, Field, Relationship
from typing import List, Optional
from datetime import datetime

class Like(SQLModel, table=True):
    user_id: int = Field(default=None, foreign_key="user.id", primary_key=True)
    post_id: int = Field(default=None, foreign_key="post.id", primary_key=True)

class User(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(..., max_length=50)
    password: str = Field(..., max_length=128)
    avatar_url: str = Field(..., max_length=255)
    likes: List["Post"] = Relationship(back_populates="liked_by", link_model=Like)

class Post(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    event_id: Optional[int] = Field(default=None, foreign_key="event.id")
    photo_url: str = Field(..., max_length=255) 
    text: str = Field(..., max_length=500)
    event: Optional["Event"] = Relationship(back_populates="posts")
    liked_by: List["User"] = Relationship(back_populates="likes", link_model=Like)
    comments: List["Comment"] = Relationship(back_populates="post")


class Comment(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: Optional[int] = Field(default=None, foreign_key="user.id")
    post_id: Optional[int] = Field(default=None, foreign_key="post.id")
    text: str = Field(..., max_length=500)
    post: Post = Relationship(back_populates="comments")

class Event(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    image_url: str = Field(..., max_length=255)
    title: str = Field(..., max_length=255)
    description: Optional[str] = Field(default=None)
    is_global: bool
    date: datetime = Field(..., sa_column_kwargs={"index": True})
    latitude: Optional[float] = Field(default=None)
    longitude: Optional[float] = Field(default=None)
    country: Optional[str] = Field(default=None, max_length=100)
    posts: List["Post"] = Relationship(back_populates="event")

class Chat(SQLModel, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: Optional[int] = Field(default=None, foreign_key="user.id")
    event_id: Optional[int] = Field(default=None, foreign_key="event.id")
    text: str = Field(..., max_length=500)
    timestamp: datetime = Field(default_factory=datetime.utcnow)
