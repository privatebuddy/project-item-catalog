(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){e.exports=a(367)},205:function(e,t,a){},207:function(e,t,a){},367:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(59),i=a.n(o),c=(a(205),a(189)),l=a(17),s=a(18),u=a(31),m=a(19),d=a(32),h=(a(207),a(386)),g=a(387),p=a(383),f=a(27),v=a.n(f),E=a(58),C=a(34),y=a(384),b=a(385),j=a(378),O=a(388),w=a(382),D=a(166),k=a(16),I=a(170),S="http://54.255.147.12/";function L(){return T("category","GET",null,"application/json",arguments.length>0&&void 0!==arguments[0]?arguments[0]:"")}function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return T("getitem?id=".concat(e),"GET",null,"application/json",t)}function T(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"";return I({url:S+e,method:t,headers:{"Content-Type":n,Authorization:"Bearer ".concat(r)},data:a}).catch(function(e){e.response?console.log(e.response):e.request?console.log(e.request):console.log("Error",e.message)})}var U="RECEIVE_ITEMS",V="RECEIVE_CATEGORIES",_="RECEIVE_USER",P="RECEIVE_LATEST_ITEMS",A="RECEIVE_ITEM_DETAIL";function B(e){return{type:_,user:e}}function F(e){return{type:P,items:e}}function M(e){return{type:A,item:e}}function x(e){return{type:V,categories:e}}function R(e,t,a){return function(n){return n(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=new FormData;return n.append("name",e),n.append("username",t),n.append("password",a),n.append("type","1"),T("createuser","POST",n,"application/json")}(e,t,a).then(function(e){n(Object(f.hideLoading)())})}}function W(e,t){return function(a){return a(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=new FormData;return a.append("username",e),a.append("password",t),T("login","POST",a,"application/json")}(e,t).then(function(e){a(B(e.data)),a(Object(f.hideLoading)())})}}function G(e,t){return function(a){return a(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=new FormData;return a.append("username",e),T("logout/access","POST",a,"application/json",t)}(e,t).then(function(e){a(B(void 0)),a(Object(f.hideLoading)())})}}function z(e,t){return function(a){return a(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return T("getcategory?categoryId=".concat(e),"GET",null,"application/json",t)}(e,t).then(function(e){var t;a((t=e.data,{type:U,items:t})),a(Object(f.hideLoading)())})}}function q(e,t,a){return function(n){return n(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",n=new FormData;return n.append("id",e),n.append("name",t),T("updatecategory","PUT",n,"application/json",a)}(e,t,a).then(function(e){return L(a).then(function(e){n(x(e.data.categories)),n(F(e.data.latestItems)),n(Object(f.hideLoading)())})})}}function H(e,t,a,n,r){return function(o){return o(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",o=new FormData;return o.append("id",e),o.append("name",t),o.append("categoryid",a.toString()),o.append("description",n),T("updateitem","PUT",o,"application/json",r)}(e,t,a,n,r).then(function(t){return N(e,r).then(function(e){o(M(e.data.item)),o(x(e.data.categories)),o(Object(f.hideLoading)())})})}}function J(e,t){return function(a){return a(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;return T("deletecategory?id=".concat(e),"DELETE",null,"application/json",t)}(e,t).then(function(e){return L(t).then(function(e){a(x(e.data.categories)),a(F(e.data.latestItems)),a(Object(f.hideLoading)())})})}}function $(e,t){return function(a){return a(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=new FormData;return a.append("name",e),T("createcategory","POST",a,"application/json",t)}(e,t).then(function(e){return a(Object(f.hideLoading)())})}}function K(e,t,a,n){return function(r){return r(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=new FormData;return r.append("name",e),r.append("description",t),r.append("category_id",a),T("createitem","POST",r,"application/json",n)}(e,t,a,n).then(function(e){return r(Object(f.hideLoading)())})}}function Q(e){return function(t){return t(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new FormData;return t.append("token",e),T("logingoogle","POST",t,"application/json")}(e).then(function(e){t(B(e.data)),t(Object(f.hideLoading)())})}}function X(e){return function(t){return t(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=new FormData;return t.append("token",e),T("creategoogleuser","POST",t,"application/json")}(e).then(function(e){t(B(e.data)),t(Object(f.hideLoading)())})}}function Y(e,t){return function(a){return a(Object(f.showLoading)()),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return T("deleteitem?id=".concat(e),"DELETE",null,"application/json",t)}(e,t).then(function(e){return a(Object(f.hideLoading)())})}}var Z=a(110),ee=a.n(Z),te=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",username:"",password:"",newUsername:"",newPassWord:"",newPassWordError:!1,isSignUp:!1},a.onLogin=function(){a.props.dispatch(W(a.state.username,a.state.password))},a.onSignUp=function(){a.props.dispatch(R(a.state.name,a.state.newUsername,a.state.newPassWord)).then(function(){return a.setState({isSignUp:!a.state.isSignUp,name:"",username:"",password:"",newUsername:"",newPassWord:""})})},a.handleValueChange=function(e,t){var n=t.name,r=t.value;return a.setState(Object(C.a)({},n,r))},a.onSignIn=function(e){var t=e.getAuthResponse().id_token;a.props.dispatch(Q(t))},a.onSignInError=function(){},a.onSignUpWithGoogle=function(e){var t=e.getAuthResponse().id_token;a.props.dispatch(X(t))},a.onSignUpError=function(){},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.User,a=this.state.isSignUp;return void 0!==t?void 0!==this.props.location.state?r.a.createElement(p.a,{to:this.props.location.pathname}):r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"login-form"},r.a.createElement("style",null,"\n      body > div,\n      body > div > div,\n      body > div > div > div.login-form {\n        height: 50%;\n      }npm\n    "),r.a.createElement(y.a,{textAlign:"center",style:{height:"100%"},verticalAlign:"middle"},r.a.createElement(y.a.Column,{style:{maxWidth:450}},r.a.createElement(b.a,{as:"h2",color:"teal",textAlign:"center"},a?"Please fill in the detail":"Project Item Category"),a?r.a.createElement(j.a,{size:"large"},r.a.createElement(O.a,{stacked:!0},r.a.createElement(j.a.Input,{placeholder:"Name",name:"name",onChange:this.handleValueChange}),r.a.createElement(j.a.Input,{placeholder:"User Name",name:"newUsername",onChange:this.handleValueChange}),r.a.createElement(j.a.Input,{fluid:!0,placeholder:"Password",type:"password",name:"newPassWord",onChange:this.handleValueChange}),r.a.createElement(w.a,{color:"teal",fluid:!0,size:"large",onClick:this.onSignUp},"Sign up"))):r.a.createElement(j.a,{size:"large"},r.a.createElement(O.a,{stacked:!0},r.a.createElement(j.a.Input,{fluid:!0,icon:"user",iconPosition:"left",placeholder:"User Name",name:"username",onChange:this.handleValueChange}),r.a.createElement(j.a.Input,{fluid:!0,icon:"lock",iconPosition:"left",placeholder:"Password",type:"password",name:"password",onChange:this.handleValueChange}),r.a.createElement(w.a,{color:"teal",fluid:!0,size:"large",onClick:this.onLogin},"Login"),r.a.createElement("br",null),r.a.createElement(w.a,{fluid:!0,color:"google plus",as:ee.a,clientId:"618789413227-rfh1jsedtnhs052ofiko10l639ak5h7v.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.onSignIn,onFailure:this.onSignInError},r.a.createElement(D.a,{name:"google"})," Login With Google"))),r.a.createElement("br",null),r.a.createElement(y.a,{columns:2},r.a.createElement(y.a.Column,null,r.a.createElement(w.a,{onClick:function(){return e.setState({isSignUp:!a})},fluid:!0},"Sign up")),r.a.createElement(y.a.Column,null,r.a.createElement(w.a,{fluid:!0,color:"google plus",as:ee.a,clientId:"618789413227-rfh1jsedtnhs052ofiko10l639ak5h7v.apps.googleusercontent.com",buttonText:"Login",onSuccess:this.onSignUpWithGoogle,onFailure:this.onSignUpError},r.a.createElement(D.a,{name:"google"})," Sign-up with Google"))))))}}]),t}(n.Component);var ae=Object(k.a)(function(e){return{User:e.userData.user}})(te),ne=a(376),re=a(381),oe=a(380),ie=a(377),ce=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).getCategoryNameById=function(e){var t=a.props.Categories.find(function(t){return t.id===e});return void 0!==t?t.name:"none"},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return function(t){return t(Object(f.showLoading)()),L(e).then(function(e){t(x(e.data.categories)),t(F(e.data.latestItems)),t(Object(f.hideLoading)())})}}(this.props.User.access_token))}},{key:"render",value:function(){var e=this,t=this.props,a=t.Loading,n=t.Categories,o=t.LatestItem;return r.a.createElement("div",null,a?null:r.a.createElement(ne.a,null,r.a.createElement(y.a,{columns:3},r.a.createElement(y.a.Column,null,r.a.createElement(re.a,{text:!0,vertical:!0,size:"huge"},r.a.createElement(re.a.Item,{header:!0},"Categories"),n.length>0?n.map(function(e){return r.a.createElement(re.a.Item,{key:e.id,name:e.name,as:ie.a,to:"/categories/".concat(e.id)})}):"No Category Add")),r.a.createElement(y.a.Column,null,r.a.createElement(b.a,{style:{paddingTop:20},as:"h3"},"Latest Items"),r.a.createElement(oe.a.Group,null,o.length>0?o.map(function(t){return r.a.createElement(oe.a,{key:t.id,fluid:!0,as:ie.a,to:"/items/".concat(t.id)},r.a.createElement(oe.a.Content,null,r.a.createElement(oe.a.Header,{content:t.name}),r.a.createElement(oe.a.Meta,null,"Category: ",e.getCategoryNameById(t.categoryId)),r.a.createElement(oe.a.Meta,null,"Create Date:",t.createDate),r.a.createElement(oe.a.Description,{content:t.description})))}):null)),r.a.createElement(y.a.Column,null))))}}]),t}(n.Component);var le=Object(k.a)(function(e){var t=e.userData,a=e.categoryData,n=e.itemData;return{User:t.user,Loading:void 0===a.categories||void 0===n.newItems,Categories:a.categories,LatestItem:n.newItems}})(ce),se=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).onLogout=function(){a.props.dispatch(G(a.props.User.username,a.props.User.access_token))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.User;return r.a.createElement(re.a,{attached:"top"},r.a.createElement(re.a.Item,{as:ie.a,to:"/"},"Main Page"),r.a.createElement(re.a.Item,{as:ie.a,to:"/createcategory"},"Add New Category"),void 0===e?r.a.createElement(re.a.Item,{position:"right",as:ie.a,to:"/login"},r.a.createElement(w.a,null,"Log-out")):r.a.createElement(re.a.Item,{position:"right",onClick:this.onLogout},r.a.createElement(w.a,null,"Log-out")))}}]),t}(n.Component);var ue=Object(k.a)(function(e){return{User:e.userData.user}})(se),me=a(375),de=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isChangeCategoryName:!1,changeName:"",isCategoryDelete:!1},a.handleValueChange=function(e,t){var n=t.name,r=t.value;return a.setState(Object(C.a)({},n,r))},a.getCategoryNameById=function(e){var t=a.props.Categories.find(function(t){return t.id===e});return void 0!==t?t.name:"none"},a.onClickChangeCategory=function(){if(a.state.isChangeCategoryName)a.props.dispatch(q(a.props.match.params.id,a.state.changeName,a.props.User.access_token));else{var e=a.props.Categories.find(function(e){return e.id.toString()===a.props.match.params.id.toString()});a.setState({changeName:e.name})}a.setState({isChangeCategoryName:!a.state.isChangeCategoryName})},a.onDeleteCategory=function(){a.props.dispatch(J(a.props.match.params.id,a.props.User.access_token)).then(a.setState({isCategoryDelete:!0}))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.dispatch(z(this.props.match.params.id,this.props.User.access_token))}},{key:"render",value:function(){var e=this,t=this.props,a=t.Loading,n=t.Categories,o=t.Items,i=this.state,c=i.isChangeCategoryName,l=i.changeName,s=i.isCategoryDelete,u=n.find(function(t){return t.id.toString()===e.props.match.params.id.toString()});return s?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",null,a?null:r.a.createElement(ne.a,null,r.a.createElement(y.a,null,r.a.createElement(y.a.Row,{columns:2},r.a.createElement(y.a.Column,null,c?r.a.createElement(me.a,{style:{paddingTop:20},name:"changeName",value:l,onChange:this.handleValueChange}):r.a.createElement(b.a,{style:{paddingTop:20},as:"h3"},"Categories: ",u.name)),r.a.createElement(y.a.Column,{style:{marginTop:20}},r.a.createElement(w.a,{negative:!0,floated:"right",onClick:this.onDeleteCategory},"Delete This Category"),r.a.createElement(w.a,{floated:"right",positive:c,onClick:this.onClickChangeCategory},c?"Save":"Change Category Name"),r.a.createElement(w.a,{icon:!0,labelPosition:"left",as:ie.a,to:"/createitem/".concat(u.id)},r.a.createElement(D.a,{name:"plus"}),"Add New Item"))),r.a.createElement(y.a.Row,null,r.a.createElement(y.a.Column,null,r.a.createElement(oe.a.Group,null,o.map(function(t){return r.a.createElement(oe.a,{key:t.id,fluid:!0,as:ie.a,to:"/items/".concat(t.id)},r.a.createElement(oe.a.Content,null,r.a.createElement(oe.a.Header,{content:t.name}),r.a.createElement(oe.a.Meta,null,"Category: ",e.getCategoryNameById(t.categoryId)),r.a.createElement(oe.a.Meta,null,"Create Date:",t.createDate),r.a.createElement(oe.a.Description,{content:t.description})))})))))))}}]),t}(n.Component);var he=Object(k.a)(function(e){var t=e.userData,a=e.categoryData,n=e.itemData;return{User:t.user,Loading:void 0===a.categories||void 0===n.items,Categories:a.categories,Items:n.items}})(de),ge=a(379),pe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isChangeDetail:!1,changeName:"",changCategoryType:0,changeDetail:"",errorName:!1,isDelete:!1},a.handleValueChange=function(e,t){var n=t.name,r=t.value;return a.setState(Object(C.a)({},n,r))},a.handleDropDownValueChange=function(e,t){t.name;var n=t.value;a.setState({changCategoryType:n})},a.getCategoryNameById=function(e){var t=a.props.Categories.find(function(t){return t.id===e});return void 0!==t?t.name:"none"},a.onClickModify=function(){a.state.isChangeDetail?a.checkValidation()&&(a.props.dispatch(H(a.props.match.params.id,a.state.changeName,a.state.changCategoryType,a.state.changeDetail,a.props.User.access_token)),a.setState({isChangeDetail:!a.state.isChangeDetail})):(a.setState({changeName:a.props.BrowseItem.name,changCategoryType:a.props.BrowseItem.categoryId,changeDetail:a.props.BrowseItem.description}),a.setState({isChangeDetail:!a.state.isChangeDetail}))},a.onDeleteItem=function(){a.props.dispatch(Y(a.props.BrowseItem.categoryId,a.props.User.access_token)).then(function(){return a.setState({isDelete:!0})})},a.checkValidation=function(){var e=!0;return""===a.state.changeName.trim()&&(e=!1,a.setState({errorName:!0})),e},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t;this.props.dispatch((e=this.props.match.params.id,t=this.props.User.access_token,function(a){return a(Object(f.showLoading)()),N(e,t).then(function(e){a(M(e.data.item)),a(x(e.data.categories)),a(Object(f.hideLoading)())})}))}},{key:"render",value:function(){var e=this.props,t=e.Loading,a=e.Categories,n=e.BrowseItem,o=this.state,i=o.isChangeDetail,c=o.changeName,l=o.changCategoryType,s=o.changeDetail,u=o.errorName,m=o.isDelete,d=[{key:1,text:"none",value:1}];return t||(d=a.map(function(e){return{key:e.id,text:e.name,value:e.id}})),m?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",null,t?null:r.a.createElement(ne.a,null,r.a.createElement(b.a,{style:{paddingTop:20},as:"h3"},"Name"),i?r.a.createElement(me.a,{fluid:!0,name:"changeName",error:u,value:c,onChange:this.handleValueChange}):n.name,r.a.createElement(b.a,{style:{paddingTop:20},as:"h3"},"Category"),i?r.a.createElement(ge.a,{label:"CategoryType",name:"changCategoryType",value:l,selection:!0,options:d,placeholder:"CategoryType",onChange:this.handleDropDownValueChange}):this.getCategoryNameById(n.categoryId),r.a.createElement(b.a,{style:{paddingTop:20},as:"h3"},"Description "),i?r.a.createElement(me.a,{fluid:!0,name:"changeDetail",value:s,onChange:this.handleValueChange}):n.description,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(y.a,{columns:2},r.a.createElement(y.a.Column,null,r.a.createElement(w.a,{fluid:!0,onClick:this.onClickModify},i?"Save":"Modify")),r.a.createElement(y.a.Column,null,i?null:r.a.createElement(w.a,{negative:!0,fluid:!0,onClick:this.onDeleteItem},"Delete")))))}}]),t}(n.Component);var fe=Object(k.a)(function(e){var t=e.userData,a=e.categoryData,n=e.itemData;return{User:t.user,Loading:void 0===a.categories||void 0===n.browseItem,Categories:a.categories,BrowseItem:n.browseItem}})(pe),ve=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={categoryName:"",errorName:!1,isFinish:!1},a.handleValueChange=function(e,t){var n=t.name,r=t.value;return a.setState(Object(C.a)({},n,r))},a.checkValidation=function(){var e=!0;return""===a.state.categoryName.trim()&&(e=!1,a.setState({errorName:!0})),e},a.onCreateCategory=function(){a.checkValidation()&&a.props.dispatch($(a.state.categoryName,a.props.User.access_token)).then(function(){return a.setState({isFinish:!0})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.categoryName,a=e.isFinish,n=e.errorName;return a?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(ne.a,null,r.a.createElement(b.a,{style:{paddingTop:20},as:"h3"},"Category Name"),r.a.createElement(me.a,{fluid:!0,name:"categoryName",error:n,value:t,onChange:this.handleValueChange}),r.a.createElement(y.a,{columns:2,style:{marginTop:20}},r.a.createElement(y.a.Column,null,r.a.createElement(w.a,{fluid:!0,negative:!0,as:ie.a,to:"/"},"Back")),r.a.createElement(y.a.Column,null,r.a.createElement(w.a,{fluid:!0,positive:!0,onClick:this.onCreateCategory},"Create")))))}}]),t}(n.Component);var Ee=Object(k.a)(function(e){return{User:e.userData.user}})(ve),Ce=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={itemName:"",itemDescription:"",errorName:!1,isFinish:!1},a.handleValueChange=function(e,t){var n=t.name,r=t.value;return a.setState(Object(C.a)({},n,r))},a.checkValidation=function(){var e=!0;return""===a.state.itemName.trim()&&(e=!1,a.setState({errorName:!0})),e},a.onCreateItem=function(){a.checkValidation()&&a.props.dispatch(K(a.state.itemName,a.state.itemDescription,a.props.match.params.id,a.props.User.access_token)).then(function(){return a.setState({isFinish:!0})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.state,t=e.itemName,a=e.itemDescription,n=e.isFinish,o=e.errorName;return n?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",null,r.a.createElement(ne.a,null,r.a.createElement(b.a,{style:{paddingTop:20},as:"h3"},"Item Name"),r.a.createElement(me.a,{fluid:!0,name:"itemName",error:o,value:t,onChange:this.handleValueChange}),r.a.createElement(b.a,{style:{paddingTop:20},as:"h3"},"Item Description"),r.a.createElement(me.a,{fluid:!0,name:"itemDescription",value:a,onChange:this.handleValueChange}),r.a.createElement(y.a,{columns:2,style:{marginTop:20}},r.a.createElement(y.a.Column,null,r.a.createElement(w.a,{fluid:!0,negative:!0,as:ie.a,to:"/categories/".concat(this.props.match.params.id)},"Back")),r.a.createElement(y.a.Column,null,r.a.createElement(w.a,{fluid:!0,positive:!0,onClick:this.onCreateItem},"Create")))))}}]),t}(n.Component);var ye=Object(k.a)(function(e){return{User:e.userData.user}})(Ce),be=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.loading,a=e.isLogin;return r.a.createElement(h.a,null,r.a.createElement(n.Fragment,null,a?r.a.createElement(ue,null):null,r.a.createElement(v.a,null),!0===t?null:r.a.createElement("div",null,r.a.createElement(g.a,{path:"/login",component:ae}),r.a.createElement(Oe,{path:"/",exact:!0,component:le}),r.a.createElement(Oe,{path:"/categories/:id",exact:!0,component:he}),r.a.createElement(Oe,{path:"/createcategory",exact:!0,component:Ee}),r.a.createElement(Oe,{path:"/items/:id",exact:!0,component:fe}),r.a.createElement(Oe,{path:"/createitem/:id",exact:!0,component:ye}))))}}]),t}(n.Component),je={isAuthenticated:!1,authenticate:function(e){this.isAuthenticated=e,setTimeout(e,100)}},Oe=function(e){var t=e.component,a=Object(c.a)(e,["component"]);return r.a.createElement(g.a,Object.assign({},a,{render:function(e){return!0===je.isAuthenticated?r.a.createElement(t,e):r.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))};var we=Object(E.connect)(function(e){var t=e.userData;return je.authenticate(void 0!==t.user),{isLogin:void 0!==t.user,loading:!1}})(be);a(364),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var De=a(40),ke=a(188),Ie=function(e){return function(t){return function(a){console.group(a.type),console.log("The action : ",a);var n=t(a);return console.log("The new state: ",e.getState()),console.groupEnd(),n}}},Se=Object(De.a)(ke.a,Ie),Le=a(39);var Ne=Object(De.c)({itemData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(Le.a)({},e,{items:t.items});case P:return Object(Le.a)({},e,{newItems:t.items});case A:return Object(Le.a)({},e,{browseItem:t.item});default:return e}},userData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return void 0!==t.user?Object(Le.a)({},e,{user:{name:t.user.name,access_token:t.user.access_token,refresher_token:t.user.refresh_token}}):Object(Le.a)({},e,{user:void 0});default:return e}},categoryData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(Le.a)({},e,{categories:t.categories});default:return e}},loadingBar:f.loadingBarReducer}),Te=Object(De.d)(Ne,Se);i.a.render(r.a.createElement(E.Provider,{store:Te},r.a.createElement(we,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[200,2,1]]]);
//# sourceMappingURL=main.8fa554a8.chunk.js.map