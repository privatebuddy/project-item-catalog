import React, {Component, Fragment} from 'react';
import './App.css';
import {BrowserRouter as Router, Redirect, Route} from 'react-router-dom';
import LoadingBar from 'react-redux-loading';
import {connect} from 'react-redux';
import LoginPage from "./Components/LoginPage";
import MainPage from "./Components/MainPage";
import NavigationMenu from "./Components/Objects/NavigationMenu";
import CategoryPage from "./Components/CategoryPage";
import ItemPage from "./Components/ItemPage";
import CreateCategoryPage from "./Components/CreateCategoryPage";
import CreateNewItemPage from "./Components/CreateNewItemPage";
import {receiveUser} from "./Actions/user";
import {handleLogin} from "./Actions/shareActions";

class App extends Component {
    componentDidMount() {
    }

    render() {
        const {loading,isLogin} = this.props;

        return (
            <Router>
                <Fragment>
                    {
                        isLogin ? <NavigationMenu/> : null
                    }
                    <LoadingBar/>
                    {
                        loading === true ? null :
                            <div>
                                <Route path="/login" component={LoginPage}/>
                                <PrivateRoute path='/' exact component={MainPage}/>
                                <PrivateRoute path='/categories/:id' exact component={CategoryPage}/>
                                <PrivateRoute path='/createcategory' exact component={CreateCategoryPage}/>
                                <PrivateRoute path='/items/:id' exact component={ItemPage}/>
                                <PrivateRoute path='/createitem/:id' exact component={CreateNewItemPage}/>
                            </div>
                    }
                </Fragment>
            </Router>
        );
    }
}

const authenticationCheck = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = cb;
        setTimeout(cb, 100)
    },
};

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={(props) => (
        authenticationCheck.isAuthenticated === true
            ? <Component {...props} />
            : <Redirect to={{
                pathname: '/login',
                state: {from: props.location}
            }}/>
    )}/>
);

function mapStateToProps({userData}) {
    console.log(userData.user)
    authenticationCheck.authenticate(userData.user !== undefined);
    return {
        isLogin: userData.user !== undefined,
        loading: false,
    }
}

export default connect(mapStateToProps)(App);