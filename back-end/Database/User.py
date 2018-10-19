from sqlalchemy import *
from Database import Base
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(UserMixin, Base):
    __tablename__ = "User"
    id = Column(Integer, primary_key=True)
    username = Column(Text)
    password = Column(Text)

    def set_password(self, password):
        self.password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

