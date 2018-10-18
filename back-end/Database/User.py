from sqlalchemy import *
from Database import Base


class User(Base):
    __tablename__ = "User"
    id = Column(Integer, primary_key=True)
    username = Column(Text)
    password = Column(Text)

