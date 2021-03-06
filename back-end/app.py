from flask import Flask
from flask_restful import Api
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from flask_cors import CORS

errors = {
    'ExpiredSignatureError': {
        'message': "Token Expired",
        'status': 500,
        'Error Type': 1
    },
    'InvalidSignatureError': {
        'message': "Invalid Token",
        'status': 500,
        'Error Type': 2
    },
    'RevokedTokenError': {
        'message': "Token Has Been Revoke",
        'status': 500,
        'Error Type': 3
    }
}

app = Flask(__name__)
CORS(app)
api = Api(app, errors=errors)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///item_catalog.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'project-item-catalog-secret-zzz'
app.config['JWT_SECRET_KEY'] = 'jwt-secret-string'
app.config['JWT_BLACKLIST_ENABLED'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']

db = SQLAlchemy(app)


@app.before_first_request
def create_tables():
    db.create_all()


app.config['JWT_SECRET_KEY'] = 'project-item-catalog-jwt-zzz'
jwt = JWTManager(app)

app.config['JWT_BLACKLIST_ENABLED'] = True
app.config['JWT_BLACKLIST_TOKEN_CHECKS'] = ['access', 'refresh']


@jwt.token_in_blacklist_loader
def check_if_token_in_blacklist(decrypted_token):
    jti = decrypted_token['jti']
    return models.RevokedTokenModel.is_jti_blacklisted(jti)


import models
import endpoints

api.add_resource(endpoints.UserRegistrationWithGoggle, '/creategoogleuser')
api.add_resource(endpoints.UserRegistration, '/createuser')
api.add_resource(endpoints.UserLogin, '/login')
api.add_resource(endpoints.UserGoogleLogin, '/logingoogle')
api.add_resource(endpoints.UserLogoutAccess, '/logout/access')
api.add_resource(endpoints.UserLogoutRefresh, '/logout/refresh')
api.add_resource(endpoints.TokenRefresh, '/token/refresh')
api.add_resource(endpoints.AllUsers, '/users')
api.add_resource(endpoints.SecretResource, '/secret')
api.add_resource(endpoints.GetCategories, '/category')
api.add_resource(endpoints.CreateCategory, '/createcategory')
api.add_resource(endpoints.GetCategoryItems,
                 '/getcategory',
                 endpoint='categories')
api.add_resource(endpoints.ModifyCategory, '/updatecategory')
api.add_resource(endpoints.DeleteCategory,
                 '/deletecategory',
                 endpoint='deletecategory')
api.add_resource(endpoints.GetItem, '/getitem', endpoint='getitem')
api.add_resource(endpoints.CreateItem, '/createitem')
api.add_resource(endpoints.ModifyItem, '/updateitem')
api.add_resource(endpoints.DeleteItem, '/deleteitem', endpoint='deleteitem')






