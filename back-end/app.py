from flask import Flask, jsonify, request
from Database import session, User, Item, Category
from sqlalchemy import desc
from flask_login import LoginManager, current_user, login_user, login_required, logout_user
from wtforms import StringField, Form
from wtforms.validators import DataRequired
from flask_cors import CORS

import datetime

app = Flask(__name__)
login = LoginManager(app)
app.config.update(dict(
    SECRET_KEY="hellowtfcsrfsk",
    WTF_CSRF_SECRET_KEY="hellowtfcsrf"
))
CORS(app)


class LoginForm(Form):
    username = StringField('username', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])


class InvalidUsage(Exception):
    status_code = 400

    def __init__(self, message, status_code=None, payload=None):
        Exception.__init__(self)
        self.message = message
        if status_code is not None:
            self.status_code = status_code
        self.payload = payload

    def to_dict(self):
        rv = dict(self.payload or ())
        rv['message'] = self.message
        return rv


@app.errorhandler(InvalidUsage)
def handle_invalid_usage(error):
    response = jsonify(error.to_dict())
    response.status_code = error.status_code
    return response


@app.errorhandler(404)
def page_not_found(e):
    return "Error 404 Not found"


@app.errorhandler(500)
def page_not_found(e):
    return "Error Internal 500"


@app.teardown_request
def remove_session(ex=None):
    session.remove()


@login.user_loader
def load_user(id):
    return session.query(User).get(int(id))


@app.route('/')
def welcome_page():
    return "Welcome To Project Category Please Login"


@app.route('/createnewuser', methods=['POST'])
def create_new_user():
    new_user = User(
        name=request.form['name'],
        username=request.form['username'],
    )
    new_user.set_password(request.form['password'])
    session.add(new_user)
    session.commit()

    return jsonify({'success': 200})


@app.route('/login', methods=['POST'])
def login():
    form = LoginForm(request.form)
    if current_user.is_authenticated:
        user = session.query(User).filter_by(username=form.username.data).first()
        return jsonify({'name': user.name, 'username': user.username})
    if form.validate():
        user = session.query(User).filter_by(username=form.username.data).first()
        if user is None or not user.check_password(form.password.data):
            return jsonify({'fail': 500})
        login_user(user)
        return jsonify({'name': user.name, 'username': user.username})
    return jsonify({'fail': 200})


@app.route("/logout")
@login_required
def logout():
    logout_user()
    return 'user logout'


@app.route('/createitem', methods=['POST'])
def create_new_item():
    new_item = Item(
        name=request.form['name'],
        description=request.form['description'],
        categoryid=request.form['category_id'],
        createdate=datetime.datetime.now()
    )
    session.add(new_item)
    session.commit()

    return jsonify({'success': 200})


@app.route('/modifyitem/<int:item_id>', methods=['PUT'])
def modify_item(item_id):
    session.query(Item).filter_by(id=item_id).update(
        {
            "name": request.form['name'],
            "description": request.form['description'],
            "categoryid": request.form['categoryid'],
            "createdate": datetime.datetime.now()
        })
    session.commit()
    return jsonify({'success': 200})


@app.route('/item/<int:item_id>', methods=['GET'])
def get_item_by_id(item_id):
    return_item = session.query(Item).filter_by(id=item_id).one()
    return_categories = session.query(Category).all()
    session.commit()
    return jsonify({
        'item':
        {
            'id': return_item.id,
            'name': return_item.name,
            'description': return_item.description,
            'categoryId': return_item.categoryid,
            'createDate': return_item.createdate
        },
        'categories':[
        {'id': category.id,
         'name': category.name,
         } for category in return_categories]
    })


@app.route('/createcategory', methods=['POST'])
def create_new_category():
    new_category = Category(
        name=request.form['name'],
    )
    session.add(new_category)
    session.commit()

    return jsonify({'success': 200})


@app.route('/modifycategory/<int:category_id>', methods=['PUT'])
def modify_category(category_id):
    session.query(Category).filter_by(id=category_id).update({"name": request.form['name']})
    session.commit()
    return jsonify({'success': 200})


@app.route('/category/<int:category_id>', methods=['GET'])
def get_all_item_in_category(category_id):
    items = session.query(Item).filter_by(categoryid=category_id)
    all_item = [
        {'id': item.id,
         'name': item.name,
         'description': item.description,
         'categoryId': item.categoryid,
         'createDate': item.createdate
         } for item in items]

    return jsonify(all_item)


@app.route('/category/latest', methods=['GET'])
def get_all_item_in_category_by_latest():
    items = session.query(Item).order_by(desc(Item.id)).limit(10).all()
    all_item = [
        {'id': item.id,
         'name': item.name,
         'description': item.description,
         'categoryId': item.categoryid,
         'createDate': item.createdate
         } for item in items]

    return jsonify(all_item)


@app.route('/category', methods=['GET'])
def get_all_category():
    categories = session.query(Category).all()
    all_category = [
        {'id': category.id,
         'name': category.name,
         } for category in categories]

    items = session.query(Item).order_by(desc(Item.id)).limit(10).all()
    all_item = [
        {'id': item.id,
         'name': item.name,
         'description': item.description,
         'categoryId': item.categoryid,
         'createDate': item.createdate
         } for item in items]

    return jsonify({'categories': all_category, 'latestItems': all_item})


if __name__ == '__main__':
    app.run()
