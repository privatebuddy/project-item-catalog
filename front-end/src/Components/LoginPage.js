import React, {Component} from 'react';
import {Button, Form, Grid, Header, Segment,Icon} from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";
import { Redirect} from 'react-router-dom';
import {handleCreateNewUser, handleLogin, handleLoginWithGoogle} from "../Actions/shareActions";
import GoogleLogin from 'react-google-login';
class LoginPage extends Component {

    state = {
        name:'',
        username:'',
        password:'',
        newUsername:'',
        newPassWord:'',
        newPassWordError:false,
        isSignUp:false
    };



    onLogin = () =>{
        this.props.dispatch(handleLogin(this.state.username,this.state.password))
    };

    onSignUp = () =>{
        this.props.dispatch(handleCreateNewUser(this.state.name,this.state.newUsername,this.state.newPassWord)).then(() => this.setState({isSignUp:!this.state.isSignUp,name:'',
            username:'',
            password:'',
            newUsername:'',
            newPassWord:'',}))
    };

    handleValueChange = (e, { name, value }) => this.setState({ [name]: value });

    onSignIn = (googleUser) =>
    {
        const profile = googleUser.getBasicProfile();
        const id_token = googleUser.getAuthResponse().id_token;

        this.props.dispatch(handleLoginWithGoogle(profile.getName(),profile.getEmail(),profile.getId(),id_token));
    };


    render() {
        const {User} = this.props;
        const {isSignUp} = this.state;

        if(User !== undefined)
        {
            if(this.props.location.state !== undefined)
            {
                return (<Redirect to={this.props.location.pathname} />);
            }else
            {
                return (<Redirect to={"/"} />);
            }
        }

        return (
            <div className='login-form'>
                <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 50%;
      }npm
    `}</style>
                <Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
                    <Grid.Column style={{maxWidth: 450}}>
                        <Header as='h2' color='teal' textAlign='center'>
                            {
                                isSignUp ?
                                    'Please fill in the detail'
                                    :
                                    'Project Item Category'
                            }
                        </Header>
                        {
                            isSignUp ?
                                <Form size='large'>
                                    <Segment stacked>
                                        <Form.Input placeholder={'Name'} name={'name'}  onChange={this.handleValueChange}/>
                                        <Form.Input placeholder={'User Name'} name={'newUsername'}  onChange={this.handleValueChange}/>
                                        <Form.Input
                                            fluid
                                            placeholder={'Password'}
                                            type='password'
                                            name={'newPassWord'}
                                            onChange={this.handleValueChange}
                                        />
                                        <Button color='teal' fluid size='large' onClick={this.onSignUp}>
                                            Sign up
                                        </Button>
                                    </Segment>
                                </Form>
                                :
                                <Form size='large'>
                                    <Segment stacked>
                                        <Form.Input fluid icon='user' iconPosition='left' placeholder={'User Name'} name={'username'}  onChange={this.handleValueChange}/>
                                        <Form.Input
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder={'Password'}
                                            type='password'
                                            name={'password'}
                                            onChange={this.handleValueChange}
                                        />
                                        <Button color='teal' fluid size='large' onClick={this.onLogin}>
                                            Login
                                        </Button>
                                    </Segment>
                                </Form>
                        }
                        <br/>
                        <Button fluid color='google plus' as={GoogleLogin} clientId="618789413227-rfh1jsedtnhs052ofiko10l639ak5h7v.apps.googleusercontent.com"
                                buttonText="Login"
                                onSuccess={this.onSignIn}
                                onFailure={this.onSignIn}>
                            <Icon name='google' /> Login With Google
                        </Button>
                        <br/>
                        <Button onClick={() => this.setState({isSignUp:!isSignUp})} fluid>Sign up</Button>
                    </Grid.Column>
                </Grid>
            </div>
        );
    }
}

function mapStateToProps({userData}) {
    return {
        User : userData.user,
    }
}

export default connect(mapStateToProps)(LoginPage);