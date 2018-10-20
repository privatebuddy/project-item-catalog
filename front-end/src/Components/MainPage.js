import React, {Component} from 'react';
import {Menu, Card, Grid, Header, Container} from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";
import {handleGetMainPageData} from "../Actions/shareActions";
import {Link} from 'react-router-dom';

class MainPage extends Component {

    componentDidMount() {
        this.props.dispatch(handleGetMainPageData())
    }

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


    render() {
        const {Loading, Categories, LatestItem} = this.props;
        return (
            <div>
                {
                    Loading ? null :
                        <Container>
                            <Grid columns={3}>
                                <Grid.Column>
                                    <Menu text vertical size={'huge'}>
                                        <Menu.Item header>Categories</Menu.Item>
                                        {
                                            Categories.length > 0 ?
                                                Categories.map((category) => <Menu.Item
                                                    key={category.id}
                                                    name={category.name}
                                                    as={Link} to={`/categories/${category.id}`}
                                                />)
                                                :
                                                'No Category Add'
                                        }
                                    </Menu>
                                </Grid.Column>
                                <Grid.Column>
                                    <Header style={{paddingTop: 20}} as='h3'>Latest Items</Header>
                                    <Card.Group>
                                        {
                                            LatestItem.length > 0 ?
                                                LatestItem.map((item) =>
                                                    <Card key={item.id} fluid as={Link} to={`/items/${item.id}`}>
                                                        <Card.Content>
                                                            <Card.Header content={item.name}/>
                                                            <Card.Meta>Category: {this.getCategoryNameById(item.categoryId)}</Card.Meta>
                                                            <Card.Meta>Create Date:{item.createDate}</Card.Meta>
                                                            <Card.Description
                                                                content={item.description}/>
                                                        </Card.Content>
                                                    </Card>)
                                                :
                                                null
                                        }
                                    </Card.Group>
                                </Grid.Column>
                                <Grid.Column/>
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
        Loading: categoryData.categories === undefined || itemData.newItems === undefined,
        Categories: categoryData.categories,
        LatestItem: itemData.newItems
    }
}

export default connect(mapStateToProps)(MainPage);