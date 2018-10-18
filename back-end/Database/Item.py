from sqlalchemy import *
from Database import Base


class Item(Base):
    __tablename__ = "Item"
    id = Column(Integer, primary_key=True)
    name = Column(Text)
    description = Column(Text)
    categoryid = Column(ForeignKey('Category.id'))
    createdate = Column(Text)

