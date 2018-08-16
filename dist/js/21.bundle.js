(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1261:function(e,t,n){"use strict";t.__esModule=!0,t.SandboxContext=void 0;var a=v(n(522)),r=v(n(497)),o=v(n(401)),i=v(n(376)),s=v(n(356)),l=v(n(431)),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};n(508),n(396),n(427),n(382),n(416),n(599);var c=n(1),u=v(c),d=n(139),f=n(1262),m=n(510),h=n(1265),g=n(383),y=n(1266),b=v(y);function v(e){return e&&e.__esModule?e:{default:e}}function w(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}var _=(0,d.css)("padding:15px;"),E="SEARCH_SANDBOX_NEW_PROFILE_APPBASE",P="SEARCH_SANDBOX_SAVE_NEW_PROFILE_APPBASE",x=t.SandboxContext=u.default.createContext(),S=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));a.getLocalPref=function(){var e=localStorage.getItem(a.props.appName);e&&(e=JSON.parse(e)),a.pref=e},a.setLocalPref=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=JSON.stringify(e);localStorage.setItem(a.props.appName,t)},a.getActiveConfig=function(){return a.state.configs.find(function(e){return e.profile===a.state.profile})},a.setFilterCount=function(e){a.setState({filterCount:e})},a.savePreferences=function(){var e;a.pref=p({},a.pref,((e={})[a.state.profile]=a.state.componentProps,e)),a.props.isDashboard?(0,h.setPreferences)(a.props.appId,a.pref).catch(function(){return a.setLocalPref(a.pref)}):a.setLocalPref(a.pref)},a.deleteComponent=function(e){var t=a.state.componentProps,n=(t[e],w(t,[e]));a.setState({componentProps:n},a.savePreferences)},a.handleProfileChange=function(e){var t=e.key;if(t===E)a.setState({showNewProfileModal:!0,filterCount:0});else if(t===P)a.newComponentProps=a.pref[a.state.profile],a.setState({showNewProfileModal:!0,filterCount:Object.keys(a.newComponentProps).filter(function(e){return"search"!==e&&"result"!==e})});else{var n=a.pref[t]||{};a.setState({profile:t,componentProps:n,filterCount:Object.keys(n).filter(function(e){return"search"!==e&&"result"!==e})})}},a.handleComponentPropChange=function(e,t){t.onData;var n=w(t,["onData"]);a.setState(function(t){var a;return p({},t,{componentProps:p({},t.componentProps,(a={},a[e]=p({},t.componentProps[e],n),a))})},a.savePreferences)},a.handleSaveProfile=function(){var e=a.profileInput.current.input.value,t=a.newComponentProps||{};a.state.profileList.includes(e)?a.setState({profileModalError:"A search profile with the same name already exists"}):a.setState({profileList:[].concat(a.state.profileList,[e]),profile:e,componentProps:t,showNewProfileModal:!1,profileModalError:""}),a.newComponentProps=null},a.handleCancel=function(){a.newComponentProps=null,a.setState({showNewProfileModal:!1,profileModalError:""})},a.openSandbox=function(){var e={appId:a.props.appId||null,appName:a.props.appName||null,url:a.props.url,credentials:a.props.credentials||null,componentProps:a.state.componentProps,mappings:a.state.mappings},t=(0,b.default)(e),n=(0,y.getTemplateStyles)(),r=(0,f.getParameters)({files:{"index.js":{content:t},"package.json":{content:{dependencies:{react:"16.3.2","react-dom":"16.3.2",antd:"^3.6.6","@appbaseio/reactivesearch":"latest","react-expand-collapse":"latest"}}},"index.html":{content:'<div id="root"></div>'},"styles.css":{content:n}}});window.open("https://codesandbox.io/api/v1/sandboxes/define?parameters="+r,"_blank")};return a.profileInput=u.default.createRef(),a.state={profile:"default",profileList:["default"],configs:[],mappings:null,filterCount:0,componentProps:{},showNewProfileModal:!1,profileModalError:""},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;this.props.isDashboard?(0,h.getPreferences)(this.props.appId).then(function(t){e.pref=t||{};var n=Array.from(new Set([].concat(e.state.profileList,Object.keys(e.pref)))),a=e.pref[e.state.profile]||{};e.setState({componentProps:a,profileList:n,filterCount:Object.keys(a).filter(function(e){return"search"!==e&&"result"!==e})})}).catch(function(){return e.getLocalPref()}):this.getLocalPref(),(0,m.getMappings)(this.props.appName,this.props.credentials,this.props.url).then(function(t){e.setState({mappings:(0,m.getMappingsTree)(t)})})},t.prototype.render=function(){var e={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,height:300,fontSize:16,lineHeight:26};if(!this.state.mappings)return u.default.createElement("div",{style:e},"Loading...");if(!Object.keys(this.state.mappings).length)return u.default.createElement("div",{style:e},"No data found. Please insert data to use this feature");var t=u.default.createElement(l.default,{onClick:this.handleProfileChange,style:{maxHeight:300,overflowY:"scroll"}},this.state.profileList.map(function(e){return u.default.createElement(l.default.Item,{key:e},e)}),u.default.createElement(l.default.Divider,null),u.default.createElement(l.default.Item,{key:E},u.default.createElement(s.default,{type:"plus"}),"  Create a New Profile"),u.default.createElement(l.default.Item,{key:P},u.default.createElement(s.default,{type:"save"}),"  Save as New Profile")),n={appId:this.props.appId||null,appName:this.props.appName||null,url:this.props.url,credentials:this.props.credentials||null,profile:this.state.profile,config:this.getActiveConfig(),mappings:this.state.mappings,componentProps:this.state.componentProps,onPropChange:this.handleComponentPropChange,filterCount:this.state.filterCount,setFilterCount:this.setFilterCount,deleteComponent:this.deleteComponent};return u.default.createElement(x.Provider,{value:n},u.default.createElement("div",{className:_,key:this.state.profile},u.default.createElement("div",{style:{display:"flex",flexDirection:"row-reverse",padding:"10px 20px 0"}},this.props.isDashboard?u.default.createElement(o.default,{overlay:t,trigger:["click"]},u.default.createElement(i.default,{size:"large",style:{marginLeft:8}},"Search Profile - ",this.state.profile," ",u.default.createElement(s.default,{type:"down"}))):null,u.default.createElement(i.default,{onClick:this.openSandbox,size:"large",type:"primary"},"Open in Codesandbox")),u.default.Children.map(this.props.children,function(e){return u.default.createElement(x.Consumer,null,function(t){return u.default.cloneElement(e,p({},t))})})),u.default.createElement(a.default,{title:"Create a new Search Profile",visible:this.state.showNewProfileModal,onOk:this.handleSaveProfile,onCancel:this.handleCancel,destroyOnClose:!0},u.default.createElement("div",{style:{margin:"0 0 6px"},className:"ant-form-extra"},"Set search profile name"),u.default.createElement(r.default,{type:"text",ref:this.profileInput,placeholder:"Search Profile Name"}),this.state.profileModalError?u.default.createElement("p",{style:{color:"tomato"}},this.state.profileModalError):null))},t}(c.Component);t.default=S,S.defaultProps={isDashboard:!1,url:g.SCALR_API}},1265:function(e,t,n){"use strict";t.__esModule=!0,t.getPreferences=function(e){return new Promise(function(t,n){fetch(a.ACC_API+"/app/"+e+"/preferences",{method:"GET",credentials:"include"}).then(function(e){return e.json()}).then(function(e){return t(e.message)}).catch(function(e){console.error(e),n(e)})})},t.setPreferences=function(e,t){return new Promise(function(n,r){fetch(a.ACC_API+"/app/"+e+"/preferences",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(){return n()}).catch(function(e){console.error(e),r(e)})})};var a=n(383)},1266:function(e,t,n){"use strict";t.__esModule=!0,t.getTemplateStyles=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.default=function(e){return""+p+function(e){var t="",n="",l="",p={search:o.DataSearch,result:o.ReactiveList},c={search:"DataSearch",result:"ReactiveList"},u=e.componentProps.result||{};return u=a({size:5,pagination:!0},u,{react:{and:Object.keys(e.componentProps).filter(function(e){return"result"!==e})}}),Object.keys(e.componentProps).forEach(function(d){var f=p[d]||o.MultiList,m=c[d]||"MultiList",h={};"result"===d?h=u:"search"===d&&(h={fieldWeights:(0,s.generateFieldWeights)(e.componentProps.search.dataField,e.componentProps.search.fieldWeights,e.mappings)});var g=(0,i.default)(r.default.createElement(f,a({componentId:d},e.componentProps[d],h,{dataField:(0,s.generateDataField)(m,e.componentProps[d].dataField,e.mappings)})),{showFunctions:!0});g=g.split("\n").slice(1).join("\n\t\t\t\t\t"),"search"===d?n=n+"\n\t\t\t\t\t <DataSearch\n\t\t\t\t\t\tstyle={{ marginBottom: 20 }}\n\t\t\t\t\t"+g+"\n":"result"===d?l=l+"\n\t\t\t\t\t <ReactiveList\n\t\t\t\t\t \tstyle={{ marginTop: 20 }}\n\t\t\t\t\t\tonData={onData}\n\t\t\t\t\t"+g+"\n":t=t+"\n\t\t\t\t\t <MultiList\n\t\t\t\t\t\tstyle={{ marginBottom: 20 }}\n\t\t\t\t\t"+g+"\n"}),'\nconst App = () => (\n\t<ReactiveBase\n\t\tapp="'+e.appName+'"\n\t\tcredentials="'+e.credentials+'"\n\t\turl="'+e.url+'"\n\t>\n\t\t<Row gutter={16} style={{ padding: 20 }}>\n\t\t\t<Col span={12}>\n\t\t\t\t<Card>\n\t\t\t\t'+t+"\n\t\t\t\t</Card>\n\t\t\t</Col>\n\t\t\t<Col span={12}>\n\t\t\t\t"+n+"\n\n\t\t\t\t<SelectedFilters />\n\n\t\t\t\t"+l+"\n\t\t\t</Col>\n\t\t</Row>\n\t</ReactiveBase>\n);\n\nReactDOM.render(\n\t<App />,\n\tdocument.getElementById('root')\n);\n"}(e)};var r=l(n(1)),o=n(592),i=l(n(1267)),s=n(740);function l(e){return e&&e.__esModule?e:{default:e}}var p="\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport {\n\tReactiveBase,\n\tDataSearch,\n\tMultiList,\n\tSelectedFilters,\n\tReactiveList\n} from '@appbaseio/reactivesearch';\nimport {\n\tRow,\n\tCol,\n\tCard,\n\tSwitch,\n\tTree,\n\tPopover,\n} from 'antd';\nimport ExpandCollapse from 'react-expand-collapse';\n\nimport 'antd/dist/antd.css';\nimport './styles.css';\n\nconst { TreeNode } = Tree;\n\nfunction onData(res) {\n\treturn (\n\t\t<div className=\"list-item\" key={res._id}>\n\t\t\t<ExpandCollapse\n\t\t\t\tpreviewHeight=\"390px\"\n\t\t\t\texpandText=\"Show more\"\n\t\t\t>\n\t\t\t\t{\n\t\t\t\t\t<Tree showLine>\n\t\t\t\t\t\t{renderAsTree(res)}\n\t\t\t\t\t</Tree>\n\t\t\t\t}\n\t\t\t</ExpandCollapse>\n\t\t</div>\n\t);\n};\n\nconst renderAsTree = (res, key = '0') => {\n\tif (!res) return null;\n\tconst iterable = Array.isArray(res) ? res : Object.keys(res);\n\treturn iterable.map((item, index) => {\n\t\tconst type = typeof res[item];\n\t\tif (type === 'string' || type === 'number') {\n\t\t\treturn (\n\t\t\t\t<TreeNode\n\t\t\t\t\ttitle={\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<span>{item}:</span>&nbsp;\n\t\t\t\t\t\t\t<span dangerouslySetInnerHTML={{ __html: res[item] }} />\n\t\t\t\t\t\t</div>\n\t\t\t\t\t}\n\t\t\t\t\tkey={key + \"-\" + (index + 1)}\n\t\t\t\t/>\n\t\t\t);\n\t\t}\n\t\tconst hasObject = (res[item] === undefined && typeof item !== 'string');\n\t\tconst node = hasObject ? item : res[item];\n\t\treturn (\n\t\t\t<TreeNode\n\t\t\t\ttitle={typeof item !== 'string' ? 'Object' : '' + (node || Array.isArray(res) ? item : item + ': null')}\n\t\t\t\tkey={key + \"-\" + (index + 1)}\n\t\t\t>\n\t\t\t\t{renderAsTree(node, key + \"-\" + (index + 1))}\n\t\t\t</TreeNode>\n\t\t);\n\t});\n};\n";t.getTemplateStyles=function(){return"\n.list-item {\n\tpadding: 20px 0;\n\tfont-size: 16px;\n\tline-height: 30px;\n\tborder-bottom: 1px solid #eee;\n}\n\n.list-item mark {\n\tbackground-color: #f5ff00;\n}\n\n.list-item li {\n\tword-wrap: break-word;\n\twidth: 100%;\n\toverflow: hidden;\n}\n\n.list-item > div {\n\tmargin-bottom: 4px;\n}\n\n.list-item:last-child {\n\tborder: 0;\n}\n\n.react-expand-collapse__content {\n\tposition: relative;\n\toverflow: hidden;\n}\n\n.react-expand-collapse__body {\n\tdisplay: inline;\n}\n\n/* expand-collapse button */\n.react-expand-collapse__button {\n\tcolor: #22a7f0;\n\tposition: absolute;\n\tbottom: 0;\n\tright: 0;\n\tbackground-color: #fff;\n\tcursor: pointer;\n\t-webkit-tap-highlight-color: transparent;\n}\n\n.react-expand-collapse__button:before {\n\tcontent: '';\n\tposition: absolute;\n\ttop: 0;\n\tleft: -20px;\n\twidth: 20px;\n\theight: 100%;\n\tbackground: linear-gradient(to right, transparent 0, #fff 100%);\n}\n\n/* expanded state */\n.react-expand-collapse--expanded .react-expand-collapse__button {\n\tpadding-left: 5px;\n\tposition: relative;\n\tbottom: auto;\n\tright: auto;\n}\n\n.react-expand-collapse--expanded .react-expand-collapse__button:before {\n\tcontent: none;\n}\n"}},334:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1),r=p(a),o=p(n(385)),i=p(n(1261)),s=n(16),l=n(383);function p(e){return e&&e.__esModule?e:{default:e}}var c=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return a.initialize=function(e){a.appId=s.appbaseService.userInfo.body.apps[e],(0,l.getCredentials)(a.appId).then(function(t){var n=t.username,r=t.password;a.setState({credentials:n+":"+r,appName:e})}).catch(function(){})},a.state={credentials:null,appName:n.params.appId},a.appId=s.appbaseService.userInfo.body.apps[a.state.appName],a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentDidMount=function(){var e=this;(0,l.getCredentials)(this.appId).then(function(t){var n=t.username,a=t.password;e.setState({credentials:n+":"+a})}).catch(function(){})},t.prototype.componentWillReceiveProps=function(e){e.params.appId&&e.params.appId!==this.state.appName&&this.initialize(e.params.appId)},t.prototype.render=function(){return this.pageInfo={currentView:"search-sandbox",appName:this.state.appName,appId:this.appId},this.state.credentials?r.default.createElement(o.default,{pageInfo:this.pageInfo},r.default.createElement(i.default,{key:this.state.appName,appId:this.appId,appName:this.state.appName,credentials:this.state.credentials,isDashboard:!0},this.props.children)):r.default.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:20,height:300,fontSize:16,lineHeight:26}},"Loading...")},t}(a.Component);t.default=c},383:function(e,t,n){"use strict";t.__esModule=!0,t.getCredentials=function(e){return new Promise(function(t,n){fetch(a+"/app/"+e+"/permissions",{method:"GET",credentials:"include",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()}).then(function(e){var n=e.body.find(function(e){return e.read&&e.write&&e.referers.includes("*")&&e.include_fields.includes("*")});n||(n=e.body.find(function(e){return e.read&&e.write&&e.referers.includes("*")})),n||(n=e.body.find(function(e){return e.read&&e.write})),n||(n=e.body.find(function(e){return e.read})),t(n)}).catch(function(e){n(e)})})},t.checkUserStatus=function(){return new Promise(function(e,t){fetch(a+"/user",{method:"GET",credentials:"include",headers:{"content-type":"application/json"}}).then(function(e){return e.json()}).then(function(e){return e.body.c_id?e.body.c_id:(t(),null)}).then(o).then(function(e){return e.json()}).then(function(t){t.plan&&"free"!==t.plan||e({isPaidUser:!1,plan:"free"}),e({isPaidUser:!0,plan:t.plan})}).catch(function(){t()})})};var a=t.ACC_API="https://accapi.appbase.io",r=(t.SCALR_API="https://scalr.api.appbase.io",t.BILLING_API="https://transactions.appbase.io");function o(e){return fetch(r+"/api/me",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({c_id:e})})}},385:function(e,t,n){"use strict";t.__esModule=!0;var a=p(n(0)),r=n(1),o=p(r),i=p(n(386)),s=p(n(90)),l=n(16);function p(e){return e&&e.__esModule?e:{default:e}}var c=function(){return o.default.createElement("div",{className:"page404"},o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col s12"},o.default.createElement("i",{className:"fa fa-exclamation-triangle"}),"  Seems like this app view doesn","'","t exist or you don","'","t have access to it.")),o.default.createElement("div",{className:"row"},o.default.createElement("div",{className:"col s12"},"Go to"," ",o.default.createElement("a",{href:"/apps"},"/apps",o.default.createElement("i",{className:"fa fa-cursor"})))))},u=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return a.state={showChild:!1},a.selectedApp=a.props.pageInfo.appName,a.config=s.default,a.getAllApps(),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.componentWillReceiveProps=function(){this.props.pageInfo.appName!==this.selectedApp&&(this.selectedApp=this.props.pageInfo.appName,this.getAllApps())},t.prototype.isAllowed=function(){this.config.appDashboard.indexOf(this.props.pageInfo.currentView)<0&&l.appbaseService.pushUrl("./apps")},t.prototype.getAllApps=function(){var e=this;l.appbaseService.allApps(!0).then(function(t){var n=t.body.filter(function(t){return e.props.pageInfo.appName===t.appname});e.setState({showChild:!(!n||!n.length)||null})})},t.prototype.render=function(){this.isAllowed();var e=o.default.Children.map(this.props.children,function(e){return o.default.cloneElement(e,{})});return o.default.createElement("div",{className:"ad-detail row"},o.default.createElement(i.default,{currentView:this.props.pageInfo.currentView,appName:this.props.pageInfo.appName,appId:this.props.pageInfo.appId}),o.default.createElement("div",{className:"ad-detail-view-container"},o.default.createElement("div",{className:"ad-detail-view"},this.state.showChild?e:null,null===this.state.showChild?o.default.createElement(c,null):null)))},t}(r.Component);t.default=u,u.propTypes={pageInfo:a.default.shape({currentView:a.default.string.isRequired,appName:a.default.string.isRequired,appId:a.default.oneOfType([a.default.number.isRequired,a.default.string.isRequired])})},u.defaultProps={}},386:function(e,t,n){"use strict";t.__esModule=!0;var a=n(1),r=u(a),o=n(42),i=u(n(37)),s=u(n(141)),l=n(39),p=u(n(90)),c=n(16);function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){function t(n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.call(this,n));return a.config=p.default,a.contextPath=c.appbaseService.getContextPath(),a.state={activeApp:a.props.appName},a.stopUpdate=!1,a.links=[{label:"Dashboard",link:a.contextPath+"dashboard/",type:"internal",name:"dashboard",tooltip:"View app usage stats",img:r.default.createElement("img",{className:"img-responsive",alt:"dashboard",src:"../../../assets/images/"+a.config.name+"/sidebar/dashboard.svg"})},{label:"Mappings",link:a.contextPath+"mappings/",type:"internal",name:"mappings",tooltip:"View or update mappings",img:r.default.createElement("img",{className:"img-responsive",alt:"mappings",src:"../../../assets/images/"+a.config.name+"/sidebar/mapping.svg"})},{label:"Browser",link:a.contextPath+"browser/",type:"internal",name:"browser",tooltip:"Create, view and manage app data",img:r.default.createElement("img",{className:"img-responsive",alt:"browser",src:"../../../assets/images/"+a.config.name+"/sidebar/browser.svg"})},{label:"Search Sandbox",link:a.contextPath+"search-sandbox/",type:"internal",name:"search-sandbox",tooltip:"Update search preferences",img:r.default.createElement("img",{className:"img-responsive",alt:"search-sandbox",src:"../../../assets/images/"+a.config.name+"/sidebar/dashboard.svg"})},{label:"Analytics",link:a.contextPath+"analytics/",type:"internal",name:"analytics",tooltip:"View app analytics",img:r.default.createElement("img",{className:"img-responsive",alt:"analytics",src:"../../../assets/images/"+a.config.name+"/sidebar/dashboard.svg"})},{label:"Credentials",link:a.contextPath+"credentials/",type:"internal",name:"credentials",tooltip:"View and manage API access credentials",img:r.default.createElement("img",{className:"img-responsive",alt:"credentials",src:"../../../assets/images/"+a.config.name+"/sidebar/credentials.svg"})},{label:"Team",link:a.contextPath+"team/",type:"internal",name:"team",tooltip:"Manage who can access your app data",img:r.default.createElement("img",{className:"img-responsive",alt:"team",src:"../../../assets/images/"+a.config.name+"/sidebar/team.svg"})}],a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.changeView=function(e){this.props.changeView(e)},t.prototype.componentWillMount=function(){var e=this;this.listenEvent=l.eventEmitter.addListener("activeApp",function(t){e.stopUpdate||e.setState(t)})},t.prototype.componentDidMount=function(){var e=this,t=function(){$(".ad-detail").css({"min-height":$(e.sidebarRef).height()+30})};setTimeout(t.bind(this),1e3),$(window).resize(t.bind(this))},t.prototype.componentWillUnmount=function(){this.stopUpdate=!0,this.listenEvent&&this.listenEvent.remove(),$(window).unbind("resize")},t.prototype.renderElement=function(e){var t=this,n=null;switch(e){case"links":n=this.links.filter(function(e){return t.config.appDashboard.indexOf(e.name)>-1}).map(function(e,n){var a=(0,i.default)({active:t.props.currentView===e.name}),l=r.default.createElement("div",{className:"img-container"},e.img),p=r.default.createElement(o.Link,{className:a,to:e.link+t.state.activeApp},l,r.default.createElement("span",{className:"ad-detail-sidebar-item-label"},e.label));return r.default.createElement(s.default,{overlay:r.default.createElement("div",null,e.tooltip),mouseLeaveDelay:0,key:e.name+"-"+(n+1)},r.default.createElement("li",{className:"ad-detail-sidebar-item",key:e.name+"-item-"+(n+1)},p))})}return n},t.prototype.render=function(){var e=this;return r.default.createElement("aside",{className:"ad-detail-sidebar"},r.default.createElement("ul",{className:"ad-detail-sidebar-container",ref:function(t){e.sidebarRef=t}},this.renderElement("links")))},t}(a.Component);t.default=d},510:function(e,t,n){"use strict";t.__esModule=!0,t.REMOVED_KEYS=void 0;var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};t.getMappings=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:s.SCALR_API;return new Promise(function(a,o){fetch(n+"/"+e+"/_mapping",{method:"GET",credentials:"include",headers:r({},function(e){if(e)return{Authorization:"Basic "+btoa(e)};return{}}(t),{"Content-Type":"application/json"})}).then(function(e){return e.json()}).then(function(t){var n=Object.keys(t[e].mappings).filter(function(e){return!c.includes(e)}),o={};n.forEach(function(n){var a;o=r({},o,((a={})[n]=t[e].mappings[n],a))}),a(o)}).catch(function(e){o(e)})})},t.reIndex=function(e,t,n){var a={mappings:e,settings:i.default,exclude_fields:n,es_version:"5"};return new Promise(function(e,n){fetch(s.ACC_API+"/app/"+t+"/reindex",{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}).then(function(e){return e.json()}).then(function(t){t.error&&n(t.error),t.body&&t.body.response_info.failures.length&&n(t.body.response_info.failures),"App has been successfully reindexed."!==t.message&&n(t.message),e(t.body.response_info.took)}).catch(function(e){n(e)})})},t.hasAggs=u,t.transformToES5=function e(t){var n=r({},t);Object.keys(n).every(function(t){if(p.includes(t))return!1;if("string"===n[t].type){var i,s=!!n[t].fields,l=r({},n[t]);s&&(n[t].fields.search?l=o.default.search:u(n[t].field)&&(l=o.default.aggs)),n=r({},n,((i={})[t]=r({},l,{type:"text"}),i))}else if("object"===a(n[t])&&!Array.isArray(n[t])){var c;n=r({},n,((c={})[t]=r({},n[t],e(n[t])),c))}return!0});return n},t.updateMapping=function e(t,n,i,s){var l=r({},t);Object.keys(l).every(function(t){if(p.includes(t))return!1;if(t===n){var c,u={};s&&(u=o.default[s]),l=r({},l,((c={})[t]=r({},u,{type:i}),c))}else if("object"===a(l[t])&&!Array.isArray(l[t])){var d;l=r({},l,((d={})[t]=r({},l[t],e(l[t],n,i,s)),d))}return!0});return l},t.traverseMapping=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n={};return Object.keys(e).forEach(function(a){return function(e,a){n[a]=[],function e(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";r.properties&&Object.keys(r.properties).forEach(function(i){t||n[a].push(""+o+i);var s=r.properties[i];s&&s.properties?e(s,""+o+i+"."):t&&n[a].push(""+o+i)})}(e)}(e[a],a)}),n},t.getMappingsTree=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={};return Object.keys(e).forEach(function(n){e[n].properties&&(t=r({},t,function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a={};return Object.keys(t).forEach(function(o){if(t[o].properties)a=r({},a,e(t[o].properties,o));else{var i,s=t[o].fields;a=r({},a,((i={})[(n?n+".":"")+o]={type:t[o].type,fields:t[o].fields?Object.keys(t[o].fields):[],originalFields:s||{}},i))}}),a}(e[n].properties,null)))}),t};var o=l(n(511)),i=l(n(554)),s=n(383);function l(e){return e&&e.__esModule?e:{default:e}}var p=["meta"],c=t.REMOVED_KEYS=["~logs","~percolator",".logs",".percolator","_default_"];function u(e){if(!e)return!1;var t=!1;return Object.keys(e).forEach(function(n){("keyword"===e[n].type||"string"===e[n].type&&"not_analyzed"===e[n].index)&&(t=!0)}),t}},511:function(e,t,n){"use strict";t.__esModule=!0,t.default={aggs:{fields:{keyword:{type:"keyword"}},analyzer:"standard",search_analyzer:"standard"},search:{fields:{search:{type:"text",index:"analyzed",analyzer:"ngram_analyzer",search_analyzer:"simple"},autosuggest:{type:"text",index:"analyzed",analyzer:"autosuggest_analyzer",search_analyzer:"simple"}},analyzer:"standard",search_analyzer:"standard"},searchaggs:{fields:{keyword:{type:"keyword",index:"not_analyzed"},search:{type:"text",index:"analyzed",analyzer:"ngram_analyzer",search_analyzer:"simple"},autosuggest:{type:"text",index:"analyzed",analyzer:"autosuggest_analyzer",search_analyzer:"simple"}},analyzer:"standard",search_analyzer:"standard"},none:{}}},554:function(e,t,n){"use strict";t.__esModule=!0,t.default={analysis:{analyzer:{autosuggest_analyzer:{filter:["lowercase","asciifolding","autosuggest_filter"],tokenizer:"standard",type:"custom"},ngram_analyzer:{filter:["lowercase","asciifolding","ngram_filter"],tokenizer:"standard",type:"custom"}},filter:{autosuggest_filter:{max_gram:"20",min_gram:"1",token_chars:["letter","digit","punctuation","symbol"],type:"edge_ngram"},ngram_filter:{max_gram:"9",min_gram:"2",token_chars:["letter","digit","punctuation","symbol"],type:"ngram"}}}}},564:function(e,t,n){"use strict";t.__esModule=!0,t.default={dataField:{label:"Data Field",description:"Select the field you want to generate filter for",types:["keyword"],input:"dropdown",multiple:!1},title:{label:"Title",description:"",input:"string"},size:{label:"Size",description:"Total number of list items to fetch",input:"number",default:100},showSearch:{label:"Show search",description:"This will render the search component within MultiList",input:"bool",default:!0},showCount:{label:"Show Count",description:"This will show a count of the number of occurences besides each list item",input:"bool",default:!0}}},600:function(e,t,n){"use strict";t.__esModule=!0,t.default={dataField:{label:"Data Field",description:"Select the fields you want to perform search on",types:["text","keyword","string"],input:"dropdown",multiple:!0},autosuggest:{label:"Auto Suggest",description:"This will enable search component to fetch suggestions as you type",input:"bool",default:!0},title:{label:"Title",description:"",input:"string"},highlight:{label:"Highlight results",description:"This will enable search highlighting",input:"bool",default:!1},size:{label:"Size",description:"Total number of suggestions to fetch - if autosuggest is set to true",input:"number",default:10},fuzziness:{label:"Fuzziness",description:"",input:"number",default:0}}},601:function(e,t,n){"use strict";t.__esModule=!0,t.default={dataField:{label:"Sort Field",description:"Select the field you want to sort results by",types:["text","string","number","geo_point"],input:"dropdown",multiple:!1},size:{label:"Size",description:"Total number of results to fetch",input:"number",default:5},pagination:{label:"Show pagination",description:"This will render the pagination component with the results",input:"bool",default:!0}}},696:function(e,t){},697:function(e,t){},740:function(e,t,n){"use strict";t.__esModule=!0,t.generateFieldWeights=t.generateDataField=void 0;var a=i(n(600)),r=i(n(564)),o=i(n(601));function i(e){return e&&e.__esModule?e:{default:e}}var s={DataSearch:a.default,MultiList:r.default,ReactiveList:o.default},l=function(e,t,n){return[].concat(e[t].fields.filter(function(a){return n.includes(e[t].originalFields[a].type)}).map(function(e){return t+"."+e}))};t.generateDataField=function(e,t,n){var a=s[e].dataField,r=a.types;if(a.multiple){var o=[];return t.forEach(function(e){o=[e].concat(o,l(n,e,r))}),o}var i=l(n,t,r);return i?i[0]:null},t.generateFieldWeights=function(e,t,n){var a=[];return e.forEach(function(e,r){a=[].concat(a,[parseInt(t[r],10)],function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return[].concat(e[t].fields.map(function(e){var t=1;return"keyword"===e&&(t=n),parseInt(t,10)}))}(n,e,t[r]))}),a}}}]);