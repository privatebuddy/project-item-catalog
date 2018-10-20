import React, {Component} from 'react';
import { Grid, Header, Container, Button, Input} from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";
import { Link ,Redirect} from 'react-router-dom';
import {handleCreateCategory} from "../Actions/shareActions";

class CreateCategoryPage extends Component {

    state = {
        categoryName: '',
        errorName: false,
        isFinish:false
    };

    componentDidMount() {
    }

    handleValueChange = (e, {name, value}) => this.setState({[name]: value});

    checkValidation = () => {
        let isValidate = true;

        if (this.state.categoryName.trim() === '') {
            isValidate = false;
            this.setState({errorName: true});
        }

        return isValidate
    };

    onCreateCategory = () =>
    {
        if(this.checkValidation())
        {
            this.props.dispatch(handleCreateCategory(this.state.categoryName)).then(() => this.setState({isFinish:true}))
        }
    };

    render() {
        const {categoryName, isFinish, errorName} = this.state;
        if(isFinish)
        {
            return <Redirect to={'/'}/>
        }

        return (
            <div>
                <Container>
                    <Header style={{paddingTop: 20}} as='h3'>Category Name</Header>
                    <Input fluid name={'categoryName'} error={errorName} value={categoryName}
                           onChange={this.handleValueChange}/>
                    <Grid columns={2} style={{marginTop:20}}>
                        <Grid.Column>
                            <Button fluid negative as={Link} to={'/'}>Back</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid positive onClick={this.onCreateCategory}>Create</Button>
                        </Grid.Column>
                    </Grid>
                </Container>
            </div>
        );
    }
}

function mapStateToProps({userData}) {
    return {
        User: userData.user,
    }
}

export default connect(mapStateToProps)(CreateCategoryPage);