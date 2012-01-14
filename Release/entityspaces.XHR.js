window.es={};es.exportSymbol=function(a,c){for(var b=a.split("."),d=window,e=0;e<b.length-1;e++)d=d[b[e]];d[b[b.length-1]]=c};var config=window.esConfig||{},extend=function(a,c){var b;if(a&&c){for(b in c)a[b]=c[b];return a}},config=extend(config,{namespace:"es.objects"});(function(){for(var a=config.namespace.split("."),c=window,b=0;b<a.length;b++)void 0===c[a[b]]&&(c[a[b]]={}),c=c[a[b]];es.generatedNamespace=c})();es.getGeneratedNamespaceObj=function(){return es.generatedNamespace};
es.exportSymbol("es",es);es.RowState={INVALID:0,UNCHANGED:2,ADDED:4,DELETED:8,MODIFIED:16};es.exportSymbol("es.RowState",es.RowState);es.DateParser=function(){this.deserialize=function(a){"string"===typeof a&&0===a.indexOf("/Date(")&&(a=new Date(parseInt(a.substr(6))));return a};this.serialize=function(a){return"/Date("+Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),0)+")/"}};es.getType=function(a){return es.getGeneratedNamespaceObj()[a]};
es.clearTypes=function(){es.generatedNamespace={}};es.onError=ko.observable({});es.onError.subscribe(function(a){throw JSON.stringify(a);});es.isArray=function(a){return!a?!1:a.isArray||"[object Array]"===Object.prototype.toString.call(a)};es.objectKeys=Object.keys||function(a){var c=[],b;for(b in a)c.push(b);return c};es.isEsCollection=function(a){var c=!1;es.isArray(a)&&0<a.length&&a[0].hasOwnProperty("RowState")&&(c=!0);return c};es.exportSymbol("es.isEsCollection",es.isEsCollection);
var utils={dateParser:new es.DateParser,copyDataIntoEntity:function(a,c){var b,d;if(a&&c){for(b in a)if(c.hasOwnProperty(b))if(d=c[b],"string"===typeof d&&(d=utils.dateParser.deserialize(d)),ko.isObservable(a[b]))a[b](d);else a[b]=d;return a}},extend:function(a,c){var b;if(a&&c){for(b in c)a[b]=c[b];return a}},addPropertyChangedHandlers:function(a,c){var b=a[c];ko.isObservable(b)&&!(b instanceof Array)&&b.__ko_proto__!==ko.dependentObservable&&b.subscribe(function(b){!1===a.es.ignorePropertyChanged&&
-1===ko.utils.arrayIndexOf(a.ModifiedColumns(),c)&&(a.es.originalValues[c]||(a.es.originalValues[c]=b),"RowState"!==c&&(a.ModifiedColumns.push(c),a.RowState()!==es.RowState.MODIFIED&&a.RowState()!==es.RowState.ADDED&&a.RowState(es.RowState.MODIFIED)))},a,"beforeChange")},startTracking:function(a){var c;if(a.hasOwnProperty("RowState")){if(!ko.isObservable(a.RowState))a.RowState=ko.observable(a.RowState)}else a.RowState=ko.observable(es.RowState.ADDED);a.hasOwnProperty("ModifiedColumns")?a.ModifiedColumns([]):
a.ModifiedColumns=ko.observableArray();for(c in a)if("ModifiedColumns"!==c&&"__type"!==c&&"esExtendedData"!==c&&"es"!==c){var b=a[c];b instanceof Array||a.hasOwnProperty(c)&&ko.isObservable(b)&&utils.addPropertyChangedHandlers(a,c)}return a},expandExtraColumns:function(a,c){var b,d,e=c||!1;if(a.esExtendedData&&es.isArray(a.esExtendedData)){b=ko.isObservable(a.esExtendedData)?a.esExtendedData():a.esExtendedData;for(d=0;d<b.length;d++)if(ko.isObservable(a[b[d].Key]))a[b[d].Key](b[d].Value);else a[b[d].Key]=
e?ko.observable(b[d].Value):b[d].Value;delete a.esExtendedData}if(void 0!==b){a.esExtendedData=[];for(d=0;d<b.length;d++)a.esExtendedData.push(ko.isObservable(b[d].Key)?b[d].Key():b[d].Key)}return a},removeExtraColumns:function(a){var c,b;if(a.esExtendedData&&es.isArray(a.esExtendedData)){b=ko.isObservable(a.esExtendedData)?a.esExtendedData():a.esExtendedData;for(c=0;c<b.length;c++)delete a[b[c]];delete a.esExtendedData}return a},shallowCopy:function(a){if("object"===typeof a&&null!==a){var c;if(es.isArray(a))c=
[];else if(a instanceof Date)c=new Date(a);else if(a instanceof Boolean)c=new Boolean(a);else if(a instanceof Number)c=new Number(a);else if(a instanceof String)c=new String(a);else if(Object.create&&Object.getPrototypeOf)c=Object.create(Object.getPrototypeOf(a));else if(a.__proto__||a.constructor.prototype){var b=a.__proto__||a.constructor.prototype||{},d=function(){};d.prototype=b;c=new d;if(!c.__proto__)c.__proto__=b}ko.utils.arrayForEach(es.objectKeys(a),function(b){var d;if(!es.isEsCollection(a[b]))switch(b){case "es":case "routes":break;
default:d=a[b],c[b]=d instanceof Date?utils.dateParser.serialize(d):d}});return c}return a},getDirtyGraph:function(a){var c,b,d,e=[],f=null;es.Visit(a).forEach(function(a){if("esExtendedData"===this.key)this.block();else if(!1===this.isLeaf){if(a instanceof Array)return a;if(a.hasOwnProperty("RowState"))switch(a.RowState){case es.RowState.ADDED:case es.RowState.DELETED:case es.RowState.MODIFIED:e.push(this.path)}}return a});if(0<e.length){f=d=es.isArray(a)?[]:utils.shallowCopy(utils.removeExtraColumns(a));
for(c=0;c<e.length;c++){var h=e[c],j=a;d=f;for(b=0;b<h.length;b++)d.hasOwnProperty(h[b])?d=d[h[b]]:es.isArray(j[h[b]])&&(d[h[b]]=[],d=d[h[b]]),j=j[h[b]];j=utils.removeExtraColumns(j);es.isArray(d)?d.push(utils.shallowCopy(j)):d=utils.shallowCopy(j)}}return f}};utils.newId=function(){var a=(new Date).getTime();return function(){return++a}}();es.utils=utils;es.exportSymbol("es.extend",es.extend);es.exportSymbol("es.startTracking",es.startTracking);es.exportSymbol("es.getDirtyGraph",es.getDirtyGraph);
es.Visit=function(a){if(!(this instanceof es.Visit))return new es.Visit(a);this.value=a};es.Visit.prototype.forEach=function(a){return this.value=walk(this.value,a,!1)};
var walk=function(a,c,b){var d=[],e=[],f=!0,h=function(a,b){if(a.forEach)return a.forEach(b);for(var c=0;c<a.length;c++)b(a[c],c,a)};return function k(a){var i=b?copy(a):a,l,m,p,q,o=!0,g={node:i,node_:a,path:[].concat(d),parent:e[e.length-1],parents:e,key:d.slice(-1)[0],isRoot:0===d.length,level:d.length,circular:null,update:function(a,c){g.isRoot||(g.parent.node[g.key]=a);g.node=a;c&&(o=!1)},"delete":function(a){delete g.parent.node[g.key];a&&(o=!1)},remove:function(a){es.isArray(g.parent.node)?
g.parent.node.splice(g.key,1):delete g.parent.node[g.key];a&&(o=!1)},keys:null,before:function(a){l=a},after:function(a){m=a},pre:function(a){p=a},post:function(a){q=a},stop:function(){f=!1},block:function(){o=!1}};if(!f)return g;if("object"===typeof i&&null!==i){g.keys=es.objectKeys(i);g.isLeaf=0===g.keys.length;for(i=0;i<e.length;i++)if(e[i].node_===a){g.circular=e[i];break}}else g.isLeaf=!0;g.notLeaf=!g.isLeaf;g.notRoot=!g.isRoot;a=c.call(g,g.node);void 0!==a&&g.update&&g.update(a);l&&l.call(g,
g.node);if(!o)return g;"object"===typeof g.node&&null!==g.node&&!g.circular&&(e.push(g),h(g.keys,function(a,c){d.push(a);p&&p.call(g,g.node[a],a);var e=k(g.node[a]);if(b&&Object.hasOwnProperty.call(g.node,a))g.node[a]=e.node;e.isLast=c==g.keys.length-1;e.isFirst=0==c;q&&q.call(g,e);d.pop()}),e.pop());m&&m.call(g,g.node);return g}(a).node};
es.EsEntity=function(){var a=[];this.routes={};this.customize=function(c){a.push(c);return this};this.init=function(){var c=this;c.es.___esEntity___=es.utils.newId();c.es.ignorePropertyChanged=!1;c.es.originalValues={};es.utils.startTracking(c);ko.utils.arrayForEach(a,function(a){a&&a.call(c)});this.isDirty=function(){return c.RowState()!==es.RowState.UNCHANGED}};this.populateEntity=function(a){var b,d,e;this.es.ignorePropertyChanged=!0;try{for(b in this.hasOwnProperty("ModifiedColumns")?this.ModifiedColumns([]):
this.ModifiedColumns=ko.observableArray(),this.es.originalValues={},es.utils.copyDataIntoEntity(this,a),es.utils.expandExtraColumns(this,!0),a)a.hasOwnProperty(b)&&this.es.esTypeDefs&&this.es.esTypeDefs[b]&&((d=es.getType(this.es.esTypeDefs[b]))?(e=new d,e.es.hasOwnProperty("___esCollection___")?e.populateCollection(a[b]):e.populateEntity(a[b]),this[b]=e):es.isArray(a[b])?(this[b]=a[b],ko.utils.arrayForEach(this[b],function(){})):this[b]=a[b])}finally{this.es.ignorePropertyChanged=!1}};this.applyDefaults=
function(){};this.acceptChanges=function(){this.es.originalValues={};this.ModifiedColumns([]);this.es.ignorePropertyChanged=!0;this.RowState(es.RowState.UNCHANGED);this.es.ignorePropertyChanged=!1};this.rejectChanges=function(){var a;if(this.es.originalValues){this.es.ignorePropertyChanged=!0;for(a in this.es.originalValues)this[a](this.es.originalValues[a]);this.ModifiedColumns([]);this.es.originalValues={};this.es.ignorePropertyChanged=!1}};this.markAsDeleted=function(){this.hasOwnProperty("RowState")?
this.RowState()!==es.RowState.DELETED&&this.RowState(es.RowState.DELETED):this.RowState=ko.observable(es.RowState.DELETED);this.hasOwnProperty("ModifiedColumns")&&this.ModifiedColumns.removeAll()};this.load=function(a){var b=this;a.async=void 0!==a.success||void 0!==a.error?!0:!1;if(a.route)a.url=a.route.url||this.routes[a.route].url,a.type=a.route.method||this.routes[a.route].method;var d=a.success,e=a.error;a.success=function(a,c){b.populateEntity(a);d&&d.call(b,a,c.state)};a.error=function(a,c,
d){e&&e.call(b,a,c,d.state)};es.dataProvider.execute(a)};this.loadByPrimaryKey=function(a,b,d,e){var f={route:this.routes.loadByPrimaryKey};1===arguments.length&&arguments[0]&&"object"===typeof arguments[0]?es.utils.extend(f,arguments[0]):(f.data=a,f.success=b,f.error=d,f.state=e);this.load(f)};this.save=function(a,b,d){var e=this,f,h={success:a,error:b,state:d};1===arguments.length&&arguments[0]&&"object"===typeof arguments[0]&&es.utils.extend(h,arguments[0]);h.async=void 0!==h.success||void 0!==
h.error?!0:!1;f=e.routes.commit;switch(e.RowState()){case es.RowState.ADDED:f=e.routes.create||f;break;case es.RowState.MODIFIED:f=e.routes.update||f;break;case es.RowState.DELETED:f=e.routes["delete"]||f}h.route=f;h.data=es.utils.getDirtyGraph(ko.toJS(e));if(f)h.url=f.url,h.type=f.method;var j=h.success,k=h.error;h.success=function(a,b){e.populateEntity(a);j&&j.call(e,a,b.state)};h.error=function(a,b,c){k&&k.call(e,a,b,c.state)};es.dataProvider.execute(h)}};es.exportSymbol("es.EsEntity",es.EsEntity);
es.exportSymbol("es.EsEntity.populateEntity",es.EsEntity.populateEntity);es.exportSymbol("es.EsEntity.markAsDeleted",es.EsEntity.markAsDeleted);es.exportSymbol("es.EsEntity.load",es.EsEntity.load);es.exportSymbol("es.EsEntity.loadByPrimaryKey",es.EsEntity.loadByPrimaryKey);es.exportSymbol("es.EsEntity.save",es.EsEntity.save);
es.EsEntityCollection=function(){var a=ko.observableArray([]);a.es={};ko.utils.extend(a,es.EsEntityCollection.fn);a.es.___esCollection___=es.utils.newId();a.es.deletedEntities=[];return a};
es.EsEntityCollection.fn={filter:function(a){var c=this();return ko.utils.arrayFilter(c,a)},acceptChanges:function(){},rejectChanges:function(){},markAllAsDeleted:function(){var a,c,b=this(),d=b.length;for(a=0;a<d;a+=1)c=b[a],c.markAsDeleted();this.es.deletedEntities=this.splice(1,this().length)},populateCollection:function(a){var c=this.es.entityTypeName,b,d=[],e=this.createEntity,f;c&&(b=es.getType(c));a&&es.isArray(a)&&(ko.utils.arrayForEach(a,function(a){f=e(a,b);f.es.collection=this;void 0!==
f&&null!==f&&d.push(f)}),this(d))},createEntity:function(a,c){var b;b=c;if(!c)b=this.es.entityTypeName,b=es.getType(b);b?(b=new b,b.populateEntity(a)):b=a;return b},load:function(a){var c=this;a.async=void 0!==a.success||void 0!==a.error?!0:!1;if(a.route)a.url=a.route.url||this.routes[a.route].url,a.type=a.route.method||this.routes[a.route].method;var b=a.success,d=a.error;a.success=function(a,d){c.populateCollection(a);b&&b.call(c,a,d.state)};a.error=function(a,b,h){d&&d.call(c,a,b,h.state)};es.dataProvider.execute(a)},
loadAll:function(a,c,b){var d={route:this.routes.loadAll};1===arguments.length&&arguments[0]&&"object"===typeof arguments[0]?es.utils.extend(d,arguments[0]):(d.success=a,d.error=c,d.state=b);this.load(d)},save:function(a,c,b){var d=this,e={success:a,error:c,state:b};1===arguments.length&&arguments[0]&&"object"===typeof arguments[0]&&es.utils.extend(e,arguments[0]);e.async=void 0!==e.success||void 0!==e.error?!0:!1;e.route=d.routes.commit;e.data=es.utils.getDirtyGraph(ko.toJS(d));if(e.route)e.url=
e.route.url,e.type=e.route.method;var f=e.success,h=e.error;e.success=function(a,b){d.populateCollection(a);f&&f.call(d,a,b.state)};e.error=function(a,b,c){h&&h.call(d,a,b,c.state)};es.dataProvider.execute(e)}};es.exportSymbol("es.EsEntityCollection",es.EsEntityCollection);es.exportSymbol("es.EsEntityCollection.markAllAsDeleted",es.EsEntityCollection.markAllAsDeleted);es.exportSymbol("es.EsEntityCollection.loadAll",es.EsEntityCollection.loadAll);es.exportSymbol("es.EsEntityCollection.load",es.EsEntityCollection.load);
es.exportSymbol("es.EsEntityCollection.save",es.EsEntityCollection.save);es.defineEntity=function(a,c){var b="string"!==typeof a,d=b?a:c,e=function(){this.es={};d.call(this);this.applyDefaults();this.init()};e.prototype=new es.EsEntity;b||(es.generatedNamespace[a]=e);return e};es.exportSymbol("es.defineEntity",es.defineEntity);
es.defineCollection=function(a,c){var b="string"!==typeof a,d=b?a:c,e=function(){var a=new es.EsEntityCollection;a.es.entityTypeName=d;this.init.call(a);return a};e.prototype=new function(){var a=this,b=[];this.init=function(){var c=this;ko.utils.arrayForEach(b,function(a){a.call(c)});for(var d in a)a.hasOwnProperty(d)&&"init"!==d&&"customize"!==d&&(c[d]=a[d]);this.isDirty=function(){var a,b,d=c(),e=!1;for(a=0;a<d.length;a++)if(b=d[a],b.RowState()!==es.RowState.UNCHANGED){e=!0;break}return e}};this.customize=
function(a){b.push(a)}};b||(es.generatedNamespace[a]=e);return e};es.exportSymbol("es.defineCollection",es.defineCollection);
es.XMLHttpRequestProvider=function(){var a,c,b=function(){};this.baseURL="http://localhost";a=function(){var a;try{a=new XMLHttpRequest}catch(b){try{a=new ActiveXObject("Msxml2.XMLHTTP")}catch(c){try{a=new ActiveXObject("Microsoft.XMLHTTP")}catch(h){return alert("This sample only works in browsers with AJAX support"),!1}}}return a};c=function(a,b){var c=JSON.parse(a);if(void 0!==b.response)switch(b.response){case "entity":return c[b.response];case "collection":return c[b.response]}return c};this.execute=
function(d){var e=null,f,h,j;h=d.success||b;j=d.error||b;f=a();e=this.baseURL+d.url;f.open("POST",e,d.async||!1);f.setRequestHeader("Content-type","application/json; charset=utf-8");if(!0===d.async)f.onreadystatechange=function(){4===f.readyState&&(200===f.status?h(c(f.responseText,d.route),d):j(f.status,f.statusText,d))};f.send(ko.toJSON(d.data));!1===d.async&&(200===f.status?"{}"!==f.responseText&&""!==f.responseText&&h(c(f.responseText,d.route),d):j(f.status,f.responseText,d))};this.makeRequest=
function(c,e,f,h,j){var k=null,n=null,n=!1,i,l,m;if(void 0!==h||void 0!==j)n=!0,l=h||b,m=j||b;i=a();i.open("POST",c+e,n);i.setRequestHeader("Content-type","application/json; charset=utf-8");if(!0===n)i.onreadystatechange=function(){4===i.readyState&&(200===i.status?l(JSON.parse(i.responseText)):m(i.status,i.statusText))};i.send(f);if(!1===n)200===i.status?"{}"!==i.responseText&&""!==i.responseText&&(k=JSON.parse(i.responseText)):es.makeRequstError=i.statusText;return k}};es.dataProvider=new es.XMLHttpRequestProvider;
