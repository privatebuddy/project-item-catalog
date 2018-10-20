import React, {Component} from 'react';
import {Card, Grid, Header, Container,Button,Input,Icon} from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";
import {handleChangeCategoryName, handleDeleteCategory, handleGetItemsInCategory} from "../Actions/shareActions";
import {Link,Redirect} from 'react-router-dom';

class CategoryPage extends Component {

    state={
        isChangeCategoryName:false,
        changeName:'',
        isCategoryDelete:false,
    };

    componentDidMount() {
        this.props.dispatch(handleGetItemsInCategory(this.props.match.params.id))
    }

    handleValueChange = (e, {name, value}) => this.setState({[name]: value});

    getCategoryNameById = (id) =>
    {
        const category = this.props.Categories.find(category => category.id === id);
        if(category !== undefined)
        {
            return category.name
        }else
        {
            return 'none'
        }

    };

    onClickChangeCategory = () =>
    {
        if(this.state.isChangeCategoryName)
        {
            this.props.dispatch(handleChangeCategoryName(this.props.match.params.id,this.state.changeName));
        }else
        {
            const category = this.props.Categories.find(category => category.id.toString() === this.props.match.params.id.toString());
            this.setState({changeName:category.name})
        }

        this.setState({isChangeCategoryName:!this.state.isChangeCategoryName})
    };

    onDeleteCategory = () =>
    {
        this.props.dispatch(handleDeleteCategory(this.props.match.params.id)).then(this.setState({isCategoryDelete:true}))
    };

    render() {
        const {Loading, Categories, Items} = this.props;
        const {isChangeCategoryName,changeName,isCategoryDelete} = this.state;
        const category = Categories.find(category => category.id.toString() === this.props.match.params.id.toString());
        if(isCategoryDelete)
        {
            return <Redirect to={'/'}/>
        }
        return (
            <div>
                {
                    Loading ? null :
                        <Container>
                            <Grid>
                                <Grid.Row columns={2}>
                                    <Grid.Column>
                                        {
                                            isChangeCategoryName ?
                                                <Input style={{paddingTop: 20}} name={'changeName'} value={changeName} onChange={this.handleValueChange}/>
                                                :
                                                <Header style={{paddingTop: 20}} as='h3'>Categories: {category.name}</Header>
                                        }
                                    </Grid.Column>
                                    <Grid.Column style={{marginTop:20}}>
                                        <Button negative floated={'right'} onClick={this.onDeleteCategory}>Delete This Category</Button>
                                        <Button floated={'right'} positive={isChangeCategoryName} onClick={this.onClickChangeCategory}>{isChangeCategoryName ? 'Save':'Change Category Name'}</Button>
                                        <Button icon labelPosition='left' as={Link} to={`/createitem/${category.id}`}>
                                            <Icon name='plus' />
                                            Add New Item
                                        </Button>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row>
                                    <Grid.Column>
                                        <Card.Group>
                                            {
                                                Items.map((item) =>
                                                    <Card key={item.id} fluid as={Link} to={`/items/${item.id}`}>
                                                        <Card.Content>
                                                            <Card.Header content={item.name}/>
                                                            <Card.Meta>Category: {this.getCategoryNameById(item.categoryId)}</Card.Meta>
                                                            <Card.Meta>Create Date:{item.createDate}</Card.Meta>
                                                            <Card.Description
                                                                content={item.description}/>
                                                        </Card.Content>
                                                    </Card>)
                                            }
                                        </Card.Group>
                                    </Grid.Column>
                                </Grid.Row>

                            </Grid>
                        </Container>
                }

            </div>
        );
    }
}

function mapStateToProps({userData, categoryData, itemData}) {
    return {
        User: userData.user,
        Loading: categoryData.categories === undefined || itemData.items === undefined,
        Categories: categoryData.categories,
        Items: itemData.items
    }
}

export default connect(mapStateToProps)(CategoryPage);