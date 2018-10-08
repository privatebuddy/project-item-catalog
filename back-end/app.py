from flask import Flask
from DBClass import session,User

app = Flask(__name__)

@app.route('/')
def hello_world():
    items = session.query(User).all();
    return items[0].username


if __name__ == '__main__':
    app.run()
