from models import UserModel, RevokedTokenModel, CategoryModel, ItemModel
from flask_restful import Resource, reqparse
from flask_jwt_extended import (create_access_token,
                                create_refresh_token,
                                jwt_required,
                                jwt_refresh_token_required,
                                get_jwt_identity,
                                get_raw_jwt)
from google.oauth2 import id_token
from google.auth.transport import requests
from wtforms import StringField, Form
from wtforms.validators import DataRequired
from flask import request, jsonify

import datetime

GOOGLE_CLIENT_ID = '618789413227-rfh1jsedtnhs052ofiko10l639ak5h7v' \
                   '.apps' \
                   '.googleusercontent.com'

register_parser = reqparse.RequestParser()
register_parser.add_argument('username',
                             help='This field cannot be blank',
                             required=True)
register_parser.add_argument('password',
                             help='This field cannot be blank',
                             required=True)
register_parser.add_argument('name',
                             help='This field cannot be blank',
                             required=True)


class LoginForm(Form):
    username = StringField('username', validators=[DataRequired()])
    password = StringField('password', validators=[DataRequired()])


class LoginFormGoogle(Form):
    token = StringField('token', validators=[DataRequired()])


class UserRegistrationWithGoggle(Resource):
    def post(self):
        form = LoginFormGoogle(request.form)

        if form.validate():
            try:
                id_info = id_token.verify_oauth2_token(form.token.data,
                                                       requests.Request(),
                                                       GOOGLE_CLIENT_ID)

                if id_info['iss'] not in ['accounts.google.com',
                                          'https://accounts.google.com']:
                    raise ValueError('Wrong issuer.')

                user = UserModel(
                    username=id_info['email'],
                    password=UserModel.generate_hash(id_info['sub']),
                    name=id_info['name'],
                    googleid=id_info['sub']
                )
                try:
                    user.save_to_db()
                    a_token = create_access_token(identity=user.username)
                    r_token = create_refresh_token(identity=user.username)
                    return {
                        'access_token': a_token,
                        'refresh_token': r_token,
                        'name': user.name
                    }
                except:
                    raise

            except ValueError:
                return {'message': 'Invalid Google Account'}, 500
        else:
            return {'message': 'Error Register With Google'}, 500


class UserRegistration(Resource):
    def post(self):
        data = register_parser.parse_args()

        if UserModel.find_by_username(data['username']):
            return {'message': '{} exists'.format(data['username'])}

        new_user = UserModel(
            username=data['username'],
            password=UserModel.generate_hash(data['password']),
            name=data['name']
        )
        try:
            new_user.save_to_db()
            a_token = create_access_token(identity=data['username'])
            r_token = create_refresh_token(identity=data['username'])
            return {
                'access_token': a_token,
                'refresh_token': r_token,
                'name': new_user.name
            }
        except:
            return {'message': 'Register Error'}, 500


class UserLogin(Resource):
    def post(self):
        form = LoginForm(request.form)
        current_user = UserModel.find_by_username(form.username.data)
        if not current_user:
            return {'message': 'User doesn\'t exist'}

        if UserModel.verify_hash(form.password.data, current_user.password):
            a_token = create_access_token(identity=form.username.data)
            r_token = create_refresh_token(identity=form.username.data)
            return {
                'access_token': a_token,
                'refresh_token': r_token,
                'name': current_user.name
                }
        else:
            return {'message': 'Wrong credentials'}


class UserGoogleLogin(Resource):
    def post(self):
        form = LoginFormGoogle(request.form)

        if form.validate():
            try:
                id_info = id_token.verify_oauth2_token(form.token.data,
                                                       requests.Request(),
                                                       GOOGLE_CLIENT_ID)

                if id_info['iss'] not in ['accounts.google.com',
                                          'https://accounts.google.com']:
                    raise ValueError('Wrong issuer.')

                try:
                    user = UserModel.find_by_username(id_info['email'])

                    if not user:
                        return {'message': 'User doesn\'t exist'}

                    a_token = create_access_token(identity=user.username)
                    r_token = create_refresh_token(identity=user.username)
                    return {
                        'access_token': a_token,
                        'refresh_token': r_token,
                        'name': user.name
                    }
                except:
                    return {'message': 'Error Register With Google'}, 500

            except ValueError:
                return {'message': 'Invalid Google Account'}, 500

        else:
            return {'message': 'Wrong credentials'}


class UserLogoutAccess(Resource):
    @jwt_required
    def post(self):
        jti = get_raw_jwt()['jti']
        try:
            revoked_token = RevokedTokenModel(jti=jti)
            revoked_token.add()
            return {'message': 'Access token has been revoked'}
        except:
            return {'message': 'Something went wrong'}, 500


class UserLogoutRefresh(Resource):
    @jwt_refresh_token_required
    def post(self):
        jti = get_raw_jwt()['jti']
        try:
            revoked_token = RevokedTokenModel(jti=jti)
            revoked_token.add()
            return {'message': 'Refresh token has been revoked'}
        except:
            return {'message': 'Something went wrong'}, 500


class TokenRefresh(Resource):
    @jwt_refresh_token_required
    def post(self):
        current_user = get_jwt_identity()
        access_token = create_access_token(identity=current_user)
        return {'access_token': access_token}


class AllUsers(Resource):
    def get(self):
        return {'message': 'List of users'}

    def delete(self):
        return {'message': 'Delete all users'}


class SecretResource(Resource):
    @jwt_required
    def get(self):
        return {
            'answer': 42
        }


class GetCategories(Resource):
    @jwt_required
    def get(self):
        categories = CategoryModel.query.all()
        all_category = [
            {'id': category.id,
             'name': category.name,
             } for category in categories]

        items = ItemModel.query.order_by(ItemModel.id.desc()).limit(10).all()
        all_item = [
            {'id': item.id,
             'name': item.name,
             'description': item.description,
             'categoryId': item.categoryid,
             'createDate': item.createdate
             } for item in items]

        return {'categories': all_category, 'latestItems': all_item}


class CreateCategory(Resource):
    @jwt_required
    def post(self):
        new_category = CategoryModel(
            name=request.form['name'],
        )
        new_category.save_to_db()

        return {'status': 200}


class GetCategoryItems(Resource):
    @jwt_required
    def get(self):
        args = request.args
        items = ItemModel.query.filter_by(categoryid=args['categoryId'])
        all_item = [
            {'id': item.id,
             'name': item.name,
             'description': item.description,
             'categoryId': item.categoryid,
             'createDate': item.createdate
             } for item in items]

        response = jsonify(all_item)
        return response


class ModifyCategory(Resource):
    @jwt_required
    def put(self):
        category = CategoryModel.query.filter_by(id=request.form['id']).first()
        category.update_category(request.form['name'])
        response = jsonify({'success': 200})
        return response


class DeleteCategory(Resource):
    @jwt_required
    def delete(self):
        args = request.args
        items = ItemModel.query.filter_by(categoryid=args['id']).all()
        category = CategoryModel.query.filter_by(id=args['id']).first()
        for item in items:
            item.delete_item()
        category.delete_category()
        response = jsonify({'success': 200})
        return response


class GetItem(Resource):
    @jwt_required
    def get(self):
        args = request.args
        return_item = ItemModel.query.filter_by(id=args['id']).first()
        return_categories = CategoryModel.query.all()
        return jsonify({
            'item':
            {
                'id': return_item.id,
                'name': return_item.name,
                'description': return_item.description,
                'categoryId': return_item.categoryid,
                'createDate': return_item.createdate
            },
            'categories': [
                {
                    'id': category.id,
                    'name': category.name,
                } for category in return_categories]
        })


class CreateItem(Resource):
    @jwt_required
    def post(self):
        new_item = ItemModel(
            name=request.form['name'],
            description=request.form['description'],
            categoryid=request.form['category_id'],
            createdate=datetime.datetime.now()
        )
        new_item.save_to_db()
        response = jsonify({'success': 200})
        return response


class ModifyItem(Resource):
    @jwt_required
    def put(self):
        item = ItemModel.query.filter_by(id=request.form['id']).first()
        item.update_item(request.form['name'],
                         request.form['description'],
                         request.form['categoryid'])
        response = jsonify({'success': 200})
        return response


class DeleteItem(Resource):
    @jwt_required
    def delete(self):
        args = request.args
        item = ItemModel.query.filter_by(id=args['id']).first()
        item.delete_item()
        response = jsonify({'success': 200})
        return response
