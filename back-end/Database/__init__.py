from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import scoped_session

_DB_URI = 'sqlite:///item_catalog_db'
engine = create_engine(_DB_URI)

Base = declarative_base()
Base.metadata.create_all(engine)
DBSession = sessionmaker(bind=engine)
session = DBSession()
session = scoped_session(sessionmaker(bind=engine))

from .User import User
from .Category import Category
from .Item import Item

