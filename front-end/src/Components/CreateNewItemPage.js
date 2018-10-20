import React, {Component} from 'react';
import { Grid, Header, Container, Button, Input} from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";
import { Link ,Redirect} from 'react-router-dom';
import {handleCreateItem} from "../Actions/shareActions";

class CreateCategoryPage extends Component {

    state = {
        itemName: '',
        itemDescription: '',
        errorName: false,
        isFinish:false
    };

    componentDidMount() {
    }

    handleValueChange = (e, {name, value}) => this.setState({[name]: value});

    checkValidation = () => {
        let isValidate = true;

        if (this.state.itemName.trim() === '') {
            isValidate = false;
            this.setState({errorName: true});
        }

        return isValidate
    };

    onCreateItem = () =>
    {
        if(this.checkValidation())
        {
            this.props.dispatch(handleCreateItem(this.state.itemName,this.state.itemDescription,this.props.match.params.id)).then(() => this.setState({isFinish:true}))
        }
    };

    render() {
        const {itemName,itemDescription, isFinish, errorName} = this.state;
        if(isFinish)
        {
            return <Redirect to={'/'}/>
        }

        return (
            <div>
                <Container>
                    <Header style={{paddingTop: 20}} as='h3'>Item Name</Header>
                    <Input fluid name={'itemName'} error={errorName} value={itemName}
                           onChange={this.handleValueChange}/>
                    <Header style={{paddingTop: 20}} as='h3'>Item Description</Header>
                    <Input fluid name={'itemDescription'} value={itemDescription}
                           onChange={this.handleValueChange}/>
                    <Grid columns={2} style={{marginTop:20}}>
                        <Grid.Column>
                            <Button fluid negative as={Link} to={`/categories/${this.props.match.params.id}`}>Back</Button>
                        </Grid.Column>
                        <Grid.Column>
                            <Button fluid positive onClick={this.onCreateItem}>Create</Button>
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