(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{316:function(e,t,a){"use strict";t.__esModule=!0;var n=a(1),r=u(n),s=u(a(82)),i=a(20),o=u(a(901)),l=u(a(900)),p=u(a(364)),c=u(a(899));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){return r.default.createElement("p",{className:"col-xs-12 ad-initial-share"},"You do not have any team members yet.")},f=function(e){return r.default.createElement("p",{className:"share-owner"},"This app has been shared by ",e.owner,".")},h=function(e){function t(a,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));return r.state={info:null,newShareExpand:!1},r.getInfo=r.getInfo.bind(r),r.newShare=r.newShare.bind(r),r.newShareInit=r.newShareInit.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillMount=function(){this.stopUpdate=!1,this.initialize(this.props)},t.prototype.componentWillUnmount=function(){this.stopUpdate=!0},t.prototype.componentWillReceiveProps=function(e){e.params.appId!=this.appName&&this.initialize(e)},t.prototype.initialize=function(e){this.appName=e.params.appId,this.appId=i.appbaseService.userInfo.body.apps[this.appName],this.getInfo()},t.prototype.getInfo=function(){var e=this;this.info={},i.appbaseService.getShare(this.appId).then(function(t){e.info.share=t,e.stopUpdate||e.setState({info:e.info})}),i.appbaseService.getAppInfo(this.appId).then(function(t){e.info.appInfo=t.body,e.stopUpdate||e.setState({info:e.info})})},t.prototype.newShareInit=function(){this.setState({newShareExpand:!0})},t.prototype.newShare=function(e){var t=this;i.appbaseService.newShare(this.appId,e).then(function(e){t.getInfo()})},t.prototype.renderElement=function(e){var t=this,a=null;switch(e){case"share":this.state.info&&this.state.info.share&&(a=this.state.info.share.body.length?this.state.info.share.body.map(function(e,a){return r.default.createElement(o.default,{appId:t.appId,key:a,shareInfo:e,getInfo:t.getInfo})}):r.default.createElement(d,{info:this.state.info,newShareInit:this.newShareInit}))}return a},t.prototype.render=function(){(0,s.default)({"col-sm-4 col-md-6 col-lg-6":this.state.info&&this.state.info.appInfo&&this.state.info.appInfo.owner===i.appbaseService.userInfo.body.email});return r.default.createElement(p.default,{pageInfo:{currentView:"team",appName:this.appName,appId:this.appId}},r.default.createElement("div",{className:"ad-detail-page row",id:"team-page"},r.default.createElement("main",{className:"ad-detail-page-body col-xs-12"},r.default.createElement("div",{className:"page-body col-xs-12"},this.state.info&&this.state.info.appInfo&&this.state.info.appInfo.owner===i.appbaseService.userInfo.body.email?r.default.createElement("section",{className:"ad-detail-page-body-card col-xs-12 p-0"},r.default.createElement("header",{className:"ad-detail-page-body-card-title with-border"},r.default.createElement("span",null,"Team Members"),r.default.createElement("span",{className:"pull-right"},r.default.createElement(c.default,{appId:this.appId,appName:this.appName}))),r.default.createElement("main",{className:"ad-detail-page-body-card-body col-xs-12 p-0"},this.renderElement("share")),r.default.createElement("div",{className:"add-team-member-card"},this.state.info&&this.state.info.appInfo&&this.state.info.appInfo.owner!==i.appbaseService.userInfo.body.email?r.default.createElement(f,{owner:this.state.info.appInfo.owner}):null,i.appbaseService.isMyApp(this.state.info)?r.default.createElement(l.default,{newShare:this.newShare,newShareExpand:this.state.newShareExpand}):null)):null))))},t}(n.Component);t.default=h},363:function(e,t,a){"use strict";t.__esModule=!0;var n=a(1),r=u(n),s=a(56),i=u(a(82)),o=u(a(128)),l=a(37),p=u(a(83)),c=a(20);function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));return n.config=p.default,n.contextPath=c.appbaseService.getContextPath(),n.state={activeApp:n.props.appName},n.stopUpdate=!1,n.links=[{label:"Dashboard",link:n.contextPath+"dashboard/",type:"internal",name:"dashboard",tooltip:"View app usage stats",img:r.default.createElement("img",{className:"img-responsive",alt:"dashboard",src:"../../../assets/images/"+n.config.name+"/sidebar/dashboard.svg"})},{label:"Browser",link:n.contextPath+"browser/",type:"internal",name:"browser",tooltip:"Create, view and manage app data",img:r.default.createElement("img",{className:"img-responsive",alt:"browser",src:"../../../assets/images/"+n.config.name+"/sidebar/browser.svg"})},{label:"Mappings",link:n.contextPath+"mappings/",type:"internal",name:"gem",tooltip:"View app mappings",img:r.default.createElement("img",{className:"img-responsive mappings",alt:"mapping",src:"../../../assets/images/"+n.config.name+"/sidebar/mapping.svg"})},{label:"Builder",link:n.contextPath+"builder/",type:"internal",name:"mirage",tooltip:"Create and save queries with a GUI",img:r.default.createElement("img",{className:"img-responsive",alt:"builder",src:"../../../assets/images/"+n.config.name+"/sidebar/builder.svg"})},{label:"Credentials",link:n.contextPath+"credentials/",type:"internal",name:"credentials",tooltip:"View and manage API access credentials",img:r.default.createElement("img",{className:"img-responsive",alt:"credentials",src:"../../../assets/images/"+n.config.name+"/sidebar/credentials.svg"})},{label:"Team",link:n.contextPath+"team/",type:"internal",name:"team",tooltip:"Manage who can access your app data",img:r.default.createElement("img",{className:"img-responsive",alt:"team",src:"../../../assets/images/"+n.config.name+"/sidebar/team.svg"})}],n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.changeView=function(e){this.props.changeView(e)},t.prototype.componentWillMount=function(){var e=this;this.listenEvent=l.eventEmitter.addListener("activeApp",function(t){e.stopUpdate||e.setState(t)})},t.prototype.componentDidMount=function(){var e=this,t=function(){$(".ad-detail").css({"min-height":$(e.sidebarRef).height()+30})};setTimeout(t.bind(this),1e3),$(window).resize(t.bind(this))},t.prototype.componentWillUnmount=function(){this.stopUpdate=!0,this.listenEvent&&this.listenEvent.remove(),$(window).unbind("resize")},t.prototype.renderElement=function(e){var t=this,a=null;switch(e){case"links":a=this.links.filter(function(e){return t.config.appDashboard.indexOf(e.name)>-1}).map(function(e,a){var n=(0,i.default)({active:t.props.currentView===e.name}),l=r.default.createElement("div",{className:"img-container"},e.img),p=r.default.createElement(s.Link,{className:n,to:e.link+t.state.activeApp},l,r.default.createElement("span",{className:"ad-detail-sidebar-item-label"},e.label));return r.default.createElement(o.default,{overlay:r.default.createElement("div",null,e.tooltip),mouseLeaveDelay:0,key:e.name+"-"+(a+1)},r.default.createElement("li",{className:"ad-detail-sidebar-item",key:e.name+"-item-"+(a+1)},p))})}return a},t.prototype.render=function(){var e=this;return r.default.createElement("aside",{className:"ad-detail-sidebar"},r.default.createElement("ul",{className:"ad-detail-sidebar-container",ref:function(t){e.sidebarRef=t}},this.renderElement("links")))},t}(n.Component);t.default=d},364:function(e,t,a){"use strict";t.__esModule=!0;var n=p(a(0)),r=a(1),s=p(r),i=p(a(363)),o=p(a(83)),l=a(20);function p(e){return e&&e.__esModule?e:{default:e}}var c=function(){return s.default.createElement("div",{className:"page404"},s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col s12"},s.default.createElement("i",{className:"fa fa-exclamation-triangle"}),"  Seems like this app view doesn","'","t exist or you don","'","t have access to it.")),s.default.createElement("div",{className:"row"},s.default.createElement("div",{className:"col s12"},"Go to"," ",s.default.createElement("a",{href:"/apps"},"/apps",s.default.createElement("i",{className:"fa fa-cursor"})))))},u=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));return n.state={showChild:!1},n.selectedApp=n.props.pageInfo.appName,n.config=o.default,n.getAllApps(),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(){this.props.pageInfo.appName!==this.selectedApp&&(this.selectedApp=this.props.pageInfo.appName,this.getAllApps())},t.prototype.isAllowed=function(){this.config.appDashboard.indexOf(this.props.pageInfo.currentView)<0&&l.appbaseService.pushUrl("./apps")},t.prototype.getAllApps=function(){var e=this;l.appbaseService.allApps(!0).then(function(t){var a=t.body.filter(function(t){return e.props.pageInfo.appName===t.appname});e.setState({showChild:!(!a||!a.length)||null})})},t.prototype.render=function(){this.isAllowed();var e=s.default.Children.map(this.props.children,function(e){return s.default.cloneElement(e,{})});return s.default.createElement("div",{className:"ad-detail row"},s.default.createElement(i.default,{currentView:this.props.pageInfo.currentView,appName:this.props.pageInfo.appName,appId:this.props.pageInfo.appId}),s.default.createElement("main",{className:"ad-detail-view-container"},s.default.createElement("div",{className:"ad-detail-view"},this.state.showChild?e:null,null===this.state.showChild?s.default.createElement(c,null):null)))},t}(r.Component);t.default=u,u.propTypes={pageInfo:n.default.shape({currentView:n.default.string.isRequired,appName:n.default.string.isRequired,appId:n.default.oneOfType([n.default.number.isRequired,n.default.string.isRequired])})},u.defaultProps={}},899:function(e,t,a){"use strict";t.__esModule=!0;var n=a(1),r=l(n),s=(a(370),l(a(353))),i=a(20),o=a(84);function l(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,a));return n.state={allowInput:!1,ownershipEmail:"",error:null,confirmChange:!1,loading:!1},n.confirmOwnership=n.confirmOwnership.bind(n),n.toggleOwnership=n.toggleOwnership.bind(n),n.ownershipUpdate=n.ownershipUpdate.bind(n),n.handleSubmit=n.handleSubmit.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.confirmOwnership=function(){var e=this;this.loading(!0),i.appbaseService.transferOwnership(this.props.appId,{owner:this.state.ownershipEmail}).then(function(t){e.loading(!1),i.appbaseService.pushUrl("/app")})},t.prototype.loading=function(e){this.setState({loading:e})},t.prototype.toggleOwnership=function(){this.setState({allowInput:!this.state.allowInput})},t.prototype.ownershipUpdate=function(e){this.setState({ownershipEmail:e.target.value})},t.prototype.validateEmail=function(){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.ownershipEmail)},t.prototype.handleSubmit=function(e){e.preventDefault(),this.validateEmail()?this.setState({confirmChange:!0,error:!1}):this.setState({error:"This e-mail does not seem correct."})},t.prototype.confirmBoxInfo=function(){return{title:r.default.createElement("span",null,"Transfer ownership"),description:r.default.createElement("p",null,"Type the app name ",r.default.createElement("strong",null,this.props.appName)," below to transfer its ownership to ",r.default.createElement("i",null,this.state.ownershipEmail),". This action is final and cannot be undone."),validate:{value:this.props.appName,placeholder:"Type appname..."},buttons:{cancel:"Go back",confirm:"Confirm"}}},t.prototype.render=function(){var e=r.default.createElement(s.default,{info:this.confirmBoxInfo(),onConfirm:this.confirmOwnership,type:"danger",showModal:!0}),t=r.default.createElement("button",{className:"ad-theme-btn danger-inverse warning",onClick:this.toggleOwnership},"Transfer App Ownership"),a=r.default.createElement("form",{onSubmit:this.handleSubmit,className:"form-inline",noValidate:!0},this.state.loading&&r.default.createElement(o.Loading,null),r.default.createElement("div",{className:"form-group pull-left"},r.default.createElement("input",{type:"email",value:this.state.ownershipEmail,onChange:this.ownershipUpdate,className:"form-control",id:"ownershipEmail",placeholder:"Type valid email"})),r.default.createElement("span",{className:" pull-left"},r.default.createElement("button",{type:"submit",className:"ad-theme-btn danger-inverse warning"},"Transfer"),r.default.createElement("button",{className:"ad-theme-btn",onClick:this.toggleOwnership},"Go back")));return r.default.createElement("div",{className:"ad-change-ownership col-xs-12"},this.state.allowInput?a:t,this.state.error&&r.default.createElement("div",{className:"text-danger"},this.state.error),this.state.confirmChange&&e)},t}(n.Component);t.default=p},900:function(e,t,a){"use strict";t.__esModule=!0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=a(1),s=l(r),i=l(a(82)),o=a(37);function l(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var d=function(e){function t(a){p(this,t);var n=c(this,e.call(this,a));return n.state={show:!1,userEmail:null,selectedType:"read",clearInput:!1},n.types={read:{description:"Read Access",read:!0,write:!1},admin:{description:"Read-Write Access",read:!0,write:!0}},n.newShare=n.newShare.bind(n),n.expand=n.expand.bind(n),n.updateUserEmail=n.updateUserEmail.bind(n),n.onSelect=n.onSelect.bind(n),n}return u(t,e),t.prototype.componentWillReceiveProps=function(e){e.description&&this.setState({description:this.props.description}),e.newShareExpand!==this.newShareExpand&&(this.newShareExpand=e.newShareExpand,this.newShareExpand&&this.expand())},t.prototype.newShare=function(){var e=JSON.parse(JSON.stringify(this.types[this.state.selectedType]));e.email=this.state.userEmail,e.user=this.state.userEmail,e.description+="(shared with "+this.state.userEmail+")",this.props.newShare(e),this.expand()},t.prototype.expand=function(){this.setState({show:!this.state.show,clearInput:!0})},t.prototype.updateUserEmail=function(e){e!==this.state.userEmail&&this.setState({userEmail:e,clearInput:!1})},t.prototype.onSelect=function(e){this.setState({selectedType:e})},t.prototype.renderElement=function(e){var t=this,a=null;switch(e){case"email":a=s.default.createElement("div",{className:"col-xs-12 ad-create-email"},s.default.createElement(f,{updateUserEmail:this.updateUserEmail,clearInput:this.state.clearInput}));break;case"buttonGroup":a=s.default.createElement("span",{className:"ad-create-button-group without-margin col-xs-9"},Object.keys(this.types).map(function(e,a){return s.default.createElement(h,{key:a,type:e,selectedType:t.state.selectedType,description:t.types[e].description,onSelect:t.onSelect,userEmail:t.state.userEmail})}))}return a},t.prototype.render=function(){var e=(0,i.default)({active:this.state.show});return s.default.createElement("div",{className:"ad-create col-xs-12 "+e},s.default.createElement("div",{className:"ad-create-collapse"},s.default.createElement("a",{className:"ad-theme-btn primary",onClick:this.expand},"Add Team Member")),s.default.createElement("div",{className:"ad-create-expand row"},s.default.createElement("div",{className:"flex flex-column"},this.renderElement("email"),s.default.createElement("div",{className:"ad-create-button-group-container"},this.renderElement("buttonGroup"))),s.default.createElement("div",{className:"col-xs-8 col-sm-3"},s.default.createElement("button",n({},o.common.isDisabled(!this.state.userEmail),{className:"ad-theme-btn primary ad-create-submit",onClick:this.newShare}),"Share"))))},t}(r.Component);t.default=d;var f=function(e){function t(a){p(this,t);var n=c(this,e.call(this,a));return n.state={userEmail:""},n.handleInput=n.handleInput.bind(n),n}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;e.clearInput&&this.setState({userEmail:""},function(){$(t.emailRef).trigger("focus")})},t.prototype.handleInput=function(e){this.setState({userEmail:e.target.value},this.validateEmail)},t.prototype.validateEmail=function(){this.isValidEmail(this.state.userEmail)?this.props.updateUserEmail(this.state.userEmail):this.props.updateUserEmail(null)},t.prototype.isValidEmail=function(e){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)},t.prototype.render=function(){var e=this;return s.default.createElement("input",{ref:function(t){return e.emailRef=t},type:"text",placeholder:"Type email..",className:"form-control",value:this.state.userEmail,onChange:this.handleInput})},t}(r.Component),h=function(e){return s.default.createElement("label",{className:"radio-inline"},s.default.createElement("input",{type:"radio",name:e.type,checked:e.selectedType===e.type,onChange:e.onSelect&&function(){return e.onSelect(e.type)}})," ",e.description,s.default.createElement("span",{className:"checkmark"}))}},901:function(t,a,n){"use strict";a.__esModule=!0;var r=n(1),s=c(r),i=c(n(82)),o=n(20),l=c(n(353)),p=n(37);c(n(477));function c(e){return e&&e.__esModule?e:{default:e}}var u=function(t){function a(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,t.call(this,e));return n.state={read:n.props.shareInfo.read,write:n.props.shareInfo.write,credentials:n.props.shareInfo.username+":"+n.props.shareInfo.password,showKey:!1},n.confirmBoxInfo={title:s.default.createElement("span",null,"Remove user access"),description:s.default.createElement("p",null,"This will remove all app access from the user with e-mail"," ",s.default.createElement("strong",null,n.props.shareInfo.email),". They will no longer be able to use their shared credentials."),buttons:{cancel:"Go back",confirm:"Confirm"}},n.keySummary=p.common.keySummary(),n.deleteShare=n.deleteShare.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(a,t),a.prototype.componentDidMount=function(){this.setKeyType()},a.prototype.componentWillReceiveProps=function(e){e.shareInfo&&this.setState({read:e.shareInfo.read,write:e.shareInfo.write,credentials:e.shareInfo.username+":"+e.shareInfo.password},this.setKeyType)},a.prototype.setKeyType=function(){this.setState({keyType:this.detectKey()})},a.prototype.ccSuccess=function(){toastr.success(this.props.shareInfo.email+" Credentials has been copied successully!"),"admin"===this.state.keyType&&toastr.warning('The copied credentials can modify data in your app, do not use them in code that runs in the web browser. Instead, generate <a href="guide-link">read-only credentials</a>.')},a.prototype.ccError=function(){toastr.error("Error",e)},a.prototype.changePermission=function(e){var t;this.setState(((t={})[e]=!this.state[e],t),this.applyChange)},a.prototype.applyChange=function(){var e=this;o.appbaseService.updateShare(this.props.appId,this.props.shareInfo,this.state).then(function(t){e.props.getInfo()}).catch(function(e){console.log(e)})},a.prototype.deleteShare=function(){var e=this,t={email:this.props.shareInfo.email};o.appbaseService.deleteShare(this.props.appId,this.props.shareInfo.username,t).then(function(t){e.props.getInfo()}).catch(function(e){console.log(e)})},a.prototype.toggleKey=function(){this.setState({showKey:!this.state.showKey})},a.prototype.detectKey=function(){var e=null;return this.state.read&&this.state.write?e="admin":this.state.read?e="read":this.state.write&&(e="write"),e},a.prototype.render=function(){(0,i.default)({active:this.state.showKey}),(0,i.default)({lock:!this.state.showKey,"unlock-alt":this.state.showKey});return s.default.createElement("div",{className:"permission-card col-xs-12"},s.default.createElement("header",{className:"permission-card-header col-xs-10 col-sm-12"},s.default.createElement("summary",{className:"col-xs-8 col-sm-10"},s.default.createElement("span",{className:"permission-card-title"},this.props.shareInfo.email),s.default.createElement("span",{className:"permission-card-header-description"},"(",this.keySummary[this.state.keyType],")")),s.default.createElement("aside",{className:"permission-key-delete col-xs-2 pull-right text-right"},s.default.createElement(l.default,{info:this.confirmBoxInfo,onConfirm:this.deleteShare,type:"danger"},s.default.createElement("a",{className:"ad-theme-btn danger-reverse permission-delete animation"},s.default.createElement("i",{className:"fa fa-trash"}))))))},a}(r.Component);a.default=u}}]);