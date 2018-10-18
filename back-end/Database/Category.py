from sqlalchemy import *
from Database import Base


class Category(Base):
    __tablename__ = "Category"
    id = Column(Integer, primary_key=True)
    name = Column(Text)

