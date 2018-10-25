import React, {Component} from 'react';
import {Menu,Button} from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";
import { Link } from 'react-router-dom';
import {handleLogout} from "../../Actions/shareActions";
class NavigationMenu extends Component {

    onLogout = () =>
    {
        this.props.dispatch(handleLogout(this.props.User.username,this.props.User.access_token));
    };

    render() {
        const {User} = this.props;
        return (
            <Menu attached={'top'}>
                <Menu.Item as={Link} to='/' >
                    Main Page
                </Menu.Item>
                <Menu.Item as={Link} to='/createcategory' >
                    Add New Category
                </Menu.Item>
                {
                    User === undefined ?
                        <Menu.Item position='right' as={Link} to='/login'>
                            <Button>Log-out</Button>
                        </Menu.Item>
                        :
                        <Menu.Item position='right' onClick={this.onLogout}>
                            <Button>Log-out</Button>
                        </Menu.Item>
                }
            </Menu>
        );
    }
}

function mapStateToProps({userData}) {
    return {
        User: userData.user,
    }
}

export default connect(mapStateToProps)(NavigationMenu);