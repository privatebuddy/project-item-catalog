from flask import Flask, jsonify, request
from Database import session,User,Item
from sqlalchemy import desc
import datetime

app = Flask(__name__)


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


@app.route('/')
def welcome_page():
    return "Welcome To Project Category"


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


@app.route('/item/<int:item_id>', methods=['GET'])
def get_item_by_id(item_id):
    return_item = session.query(Item).filter_by(id=item_id).one()
    session.commit()
    return jsonify(
        {
            'id': return_item.id,
            'name': return_item.name,
            'description': return_item.description,
            'categoryId': return_item.categoryid,
            'createDate': return_item.createdate
        }
    )


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
         }for item in items]

    return jsonify(all_item)


if __name__ == '__main__':
    app.run()
