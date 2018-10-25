import React, {Component} from 'react';
import {Dropdown, Grid, Header, Container, Button, Input} from 'semantic-ui-react'
import connect from "react-redux/es/connect/connect";
import {handleChangeItemDetail, handleDeleteItem, handleGetItemDetailById} from "../Actions/shareActions";
import {Redirect} from 'react-router-dom';

class ItemPage extends Component {

    state = {
        isChangeDetail: false,
        changeName: '',
        changCategoryType: 0,
        changeDetail: '',
        errorName: false,
        isDelete:false
    };

    componentDidMount() {
        this.props.dispatch(handleGetItemDetailById(this.props.match.params.id,this.props.User.access_token))
    }

    handleValueChange = (e, {name, value}) => this.setState({[name]: value});

    handleDropDownValueChange = (e, {name, value}) => {
        this.setState({changCategoryType: value});
    };

    getCategoryNameById = (id) => {
        const category = this.props.Categories.find(category => category.id === id);
        if (category !== undefined) {
            return category.name
        } else {
            return 'none'
        }

    };

    onClickModify = () => {
        if (this.state.isChangeDetail) {
            if (this.checkValidation()) {
                this.props.dispatch(handleChangeItemDetail(this.props.match.params.id, this.state.changeName, this.state.changCategoryType, this.state.changeDetail,this.props.User.access_token));
                this.setState({isChangeDetail: !this.state.isChangeDetail})
            }
        } else {
            this.setState({
                changeName: this.props.BrowseItem.name,
                changCategoryType: this.props.BrowseItem.categoryId,
                changeDetail: this.props.BrowseItem.description
            })
            this.setState({isChangeDetail: !this.state.isChangeDetail})
        }
    };

    onDeleteItem = () => {
        this.props.dispatch(handleDeleteItem(this.props.BrowseItem.categoryId,this.props.User.access_token)).then(() => this.setState({isDelete:true}))
    };

    checkValidation = () => {
        let isValidate = true;

        if (this.state.changeName.trim() === '') {
            isValidate = false;
            this.setState({errorName: true});
        }

        return isValidate
    };

    render() {
        const {Loading, Categories, BrowseItem} = this.props;
        const {isChangeDetail, changeName, changCategoryType, changeDetail, errorName,isDelete} = this.state;
        let options = [{key: 1, text: 'none', value: 1}];
        if (!Loading) {
            options = Categories.map((category) => {
                return {key: category.id, text: category.name, value: category.id}
            })
        }
        if(isDelete)
        {
            return <Redirect to={`/`}/>
        }

        return (
            <div>
                {
                    Loading ? null :
                        <Container>
                            <Header style={{paddingTop: 20}} as='h3'>Name</Header>
                            {
                                isChangeDetail ?
                                    <Input fluid name={'changeName'} error={errorName} value={changeName}
                                           onChange={this.handleValueChange}/>
                                    :
                                    BrowseItem.name
                            }
                            <Header style={{paddingTop: 20}} as='h3'>Category</Header>
                            {
                                isChangeDetail ?
                                    <Dropdown label={'CategoryType'} name={'changCategoryType'}
                                              value={changCategoryType}
                                              selection options={options} placeholder={'CategoryType'}
                                              onChange={this.handleDropDownValueChange}/>
                                    :
                                    this.getCategoryNameById(BrowseItem.categoryId)
                            }
                            <Header style={{paddingTop: 20}} as='h3'>Description </Header>
                            {
                                isChangeDetail ?
                                    <Input fluid name={'changeDetail'} value={changeDetail}
                                           onChange={this.handleValueChange}/>
                                    :
                                    BrowseItem.description
                            }
                            <br/>
                            <br/>
                            <br/>
                            <Grid columns={2}>
                                <Grid.Column>
                                    <Button fluid onClick={this.onClickModify}>
                                        {
                                            isChangeDetail ? 'Save' : 'Modify'
                                        }
                                    </Button>
                                </Grid.Column>
                                <Grid.Column>
                                    {
                                        isChangeDetail ? null :
                                            <Button negative fluid onClick={this.onDeleteItem}>
                                                Delete
                                            </Button>
                                    }
                                </Grid.Column>
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
        Loading: categoryData.categories === undefined || itemData.browseItem === undefined,
        Categories: categoryData.categories,
        BrowseItem: itemData.browseItem
    }
}

export default connect(mapStateToProps)(ItemPage);