window.es={};"use-strict";es.exportSymbol=function(a,c){for(var b=a.split("."),d=window,e=0;e<b.length-1;e++)d=d[b[e]];d[b[b.length-1]]=c};var config=window.esConfig||{},extend=function(a,c){var b;if(a&&c){for(b in c)a[b]=c[b];return a}},config=extend(config,{namespace:"es.objects"});(function(){for(var a=config.namespace.split("."),c=window,b=0;b<a.length;b++)void 0===c[a[b]]&&(c[a[b]]={}),c=c[a[b]];es.generatedNamespace=c})();es.getGeneratedNamespaceObj=function(){return es.generatedNamespace};
es.exportSymbol("es",es);es.RowState={INVALID:0,UNCHANGED:2,ADDED:4,DELETED:8,MODIFIED:16};es.exportSymbol("es.RowState",es.RowState);es.DateParser=function(){this.deserialize=function(a){"string"===typeof a&&0===a.indexOf("/Date(")&&(a=new Date(parseInt(a.substr(6))));return a};this.serialize=function(a){return"/Date("+Date.UTC(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),0)+")/"}};es.getType=function(a){return es.getGeneratedNamespaceObj()[a]};
es.clearTypes=function(){es.generatedNamespace={}};es.onError=ko.observable({});es.onError.subscribe(function(a){throw JSON.stringify(a);});es.isArray=function(a){return!a?!1:a.isArray||"[object Array]"===Object.prototype.toString.call(a)};es.objectKeys=Object.keys||function(a){var c=[],b;for(b in a)c.push(b);return c};es.isEsCollection=function(a){var c=!1;void 0!==a&&void 0!==a.es&&void 0!==a.es.___esCollection___?c=!0:es.isArray(a)&&0<a.length&&a[0].hasOwnProperty("RowState")&&(c=!0);return c};
es.isEsEntity=function(a){var c=!1;void 0!==a&&void 0!==a.es&&void 0!==a.es.___esEntity___&&(c=!0);return c};es.exportSymbol("es.isEsCollection",es.isEsCollection);
var utils={dateParser:new es.DateParser,copyDataIntoEntity:function(a,c){var b,d;if(a&&c){for(b in a)if(c.hasOwnProperty(b))if(d=c[b],"string"===typeof d&&(d=utils.dateParser.deserialize(d)),ko.isObservable(a[b]))a[b](d);else a[b]=d;return a}},extend:function(a,c){var b;if(a&&c){for(b in c)a[b]=c[b];return a}},addPropertyChangedHandlers:function(a,c){var b=a[c];ko.isObservable(b)&&!(b instanceof Array)&&b.__ko_proto__!==ko.dependentObservable&&b.subscribe(function(b){var e;!1===a.es.ignorePropertyChanged&&
(e=a.esColumnMap[c],1===e&&(e=c),e=e||c,-1===ko.utils.arrayIndexOf(a.ModifiedColumns(),e)&&(a.es.originalValues[c]||(a.es.originalValues[c]=b),"RowState"!==c&&(a.ModifiedColumns.push(e),a.RowState()!==es.RowState.MODIFIED&&a.RowState()!==es.RowState.ADDED&&a.RowState(es.RowState.MODIFIED))))},a,"beforeChange")},startTracking:function(a){var c;a.hasOwnProperty("RowState")?ko.isObservable(a.RowState)||(a.RowState=ko.observable(a.RowState)):a.RowState=ko.observable(es.RowState.ADDED);a.hasOwnProperty("ModifiedColumns")?
a.ModifiedColumns([]):a.ModifiedColumns=ko.observableArray();for(c in a)if("ModifiedColumns"!==c&&"__type"!==c&&"esExtendedData"!==c&&"es"!==c){var b=a[c];b instanceof Array||a.hasOwnProperty(c)&&ko.isObservable(b)&&utils.addPropertyChangedHandlers(a,c)}return a},expandExtraColumns:function(a,c){var b,d,e=c||!1;if(a.esExtendedData&&es.isArray(a.esExtendedData)){b=ko.isObservable(a.esExtendedData)?a.esExtendedData():a.esExtendedData;for(d=0;d<b.length;d++)if(ko.isObservable(a[b[d].Key]))a[b[d].Key](b[d].Value);
else a[b[d].Key]=e?ko.observable(b[d].Value):b[d].Value;delete a.esExtendedData}if(void 0!==b){a.esExtendedData=[];for(d=0;d<b.length;d++)a.esExtendedData.push(ko.isObservable(b[d].Key)?b[d].Key():b[d].Key)}return a},removeExtraColumns:function(a){var c,b;if(a.esExtendedData&&es.isArray(a.esExtendedData)){b=ko.isObservable(a.esExtendedData)?a.esExtendedData():a.esExtendedData;for(c=0;c<b.length;c++)delete a[b[c]];delete a.esExtendedData}return a},getDirtyGraph:function(a,c,b){var d,e,f,g;if(void 0===
c&&!a.isDirtyGraph())return{};if(es.isEsEntity(a))for(d in es.isArray(b)?(e=a.prepareForJSON(),b.push(e),b=e):b=a.prepareForJSON(),void 0===c&&(c=b),a.esTypeDefs){if(void 0!==a[d]&&a[d].isDirtyGraph()){f=a[d].prepareForJSON();b[d]=[];for(g=0;g<f.length;g++)e=f[g],es.utils.getDirtyGraph(e,c,b[d])}}else{c=[];f=a.prepareForJSON();for(g=0;g<f.length;g++)e=f[g],es.utils.getDirtyGraph(e,c,c)}return c}};utils.newId=function(){var a=(new Date).getTime();return function(){return++a}}();es.utils=utils;
es.exportSymbol("es.extend",es.extend);es.exportSymbol("es.startTracking",es.startTracking);es.exportSymbol("es.getDirtyGraph",es.getDirtyGraph);
es.EsEntity=function(){var a=[];this.customize=function(c){a.push(c);return this};this.init=function(){var c=this;c.es.___esEntity___=es.utils.newId();c.es.ignorePropertyChanged=!1;c.es.originalValues={};c.es.collection=void 0;c.es.isLoading=ko.observable(!1);es.utils.startTracking(c);ko.utils.arrayForEach(a,function(a){a&&a.call(c)});this.isDirty=ko.computed(function(){return c.RowState()!==es.RowState.UNCHANGED});this.isDirtyGraph=function(){var a=!1;if(c.RowState()!==es.RowState.UNCHANGED)return!0;
for(propertyName in this.esTypeDefs)if(void 0!==this[propertyName]&&(a=this[propertyName].isDirtyGraph(),!0==a))break;return a}};this.prepareForJSON=function(){var a=this,b={};ko.utils.arrayForEach(es.objectKeys(this),function(d){var e,f;switch(d){case "es":case "esRoutes":case "esTypeDefs":case "esRoutes":case "esColumnMap":case "esExtendedData":break;case "RowState":b.RowState=ko.utils.unwrapObservable(a.RowState);break;case "ModifiedColumns":b.ModifiedColumns=ko.utils.unwrapObservable(a.ModifiedColumns);
break;default:f=ko.utils.unwrapObservable(a[d]),!es.isEsCollection(f)&&"function"!==typeof f&&void 0!==f&&(e=a.esColumnMap[d],void 0!==e&&(b[d]=f instanceof Date?utils.dateParser.serialize(f):f))}});return b};this.populateEntity=function(a){var b,d,e;this.es.ignorePropertyChanged=!0;try{for(b in this.hasOwnProperty("ModifiedColumns")?this.ModifiedColumns([]):this.ModifiedColumns=ko.observableArray(),this.es.originalValues={},es.utils.copyDataIntoEntity(this,a),es.utils.expandExtraColumns(this,!0),
a)a.hasOwnProperty(b)&&this.esTypeDefs&&this.esTypeDefs[b]&&((d=es.getType(this.esTypeDefs[b]))?(e=new d,e.es.hasOwnProperty("___esCollection___")?e.populateCollection(a[b]):e.populateEntity(a[b]),this[b]=e):es.isArray(a[b])?(this[b]=a[b],ko.utils.arrayForEach(this[b],function(){})):this[b]=a[b])}finally{this.es.ignorePropertyChanged=!1}};this.applyDefaults=function(){};this.acceptChanges=function(){this.es.originalValues={};this.ModifiedColumns([]);this.es.ignorePropertyChanged=!0;this.RowState(es.RowState.UNCHANGED);
this.es.ignorePropertyChanged=!1};this.rejectChanges=function(){var a;if(this.es.originalValues){this.es.ignorePropertyChanged=!0;for(a in this.es.originalValues)this[a](this.es.originalValues[a]);this.ModifiedColumns([]);this.es.originalValues={};this.es.ignorePropertyChanged=!1}};this.markAsDeleted=function(){this.hasOwnProperty("RowState")?this.RowState()!==es.RowState.DELETED&&this.RowState(es.RowState.DELETED):this.RowState=ko.observable(es.RowState.DELETED);this.hasOwnProperty("ModifiedColumns")&&
this.ModifiedColumns.removeAll()};this.load=function(a){var b=this;b.es.isLoading(!0);a.async=void 0!==a.success||void 0!==a.error?!0:!1;a.route&&(a.url=a.route.url||this.esRoutes[a.route].url,a.type=a.route.method||this.esRoutes[a.route].method);var d=a.success,e=a.error;a.success=function(a,c){b.populateEntity(a);d&&d.call(b,a,c.state);b.es.isLoading(false)};a.error=function(a,c,d){e&&e.call(b,a,c,d.state);b.es.isLoading(false)};es.dataProvider.execute(a);!1===a.async&&b.es.isLoading(!1)};this.loadByPrimaryKey=
function(a,b,d,e){var f={route:this.esRoutes.loadByPrimaryKey};1===arguments.length&&arguments[0]&&"object"===typeof arguments[0]?es.utils.extend(f,arguments[0]):(f.data=a,f.success=b,f.error=d,f.state=e);this.load(f)};this.save=function(a,b,d){var e=this;e.es.isLoading(!0);var f,g={success:a,error:b,state:d};1===arguments.length&&arguments[0]&&"object"===typeof arguments[0]&&es.utils.extend(g,arguments[0]);g.async=void 0!==g.success||void 0!==g.error?!0:!1;f=e.esRoutes.commit;switch(e.RowState()){case es.RowState.ADDED:f=
e.esRoutes.create||f;break;case es.RowState.MODIFIED:f=e.esRoutes.update||f;break;case es.RowState.DELETED:f=e.esRoutes["delete"]||f}g.route=f;g.data=es.utils.getDirtyGraph(e);f&&(g.url=f.url,g.type=f.method);var h=g.success,i=g.error;g.success=function(a,b){e.populateEntity(a);h&&h.call(e,a,b.state);e.es.isLoading(false)};g.error=function(a,b,c){i&&i.call(e,a,b,c.state);e.es.isLoading(false)};es.dataProvider.execute(g);!1===g.async&&e.es.isLoading(!1)}};es.exportSymbol("es.EsEntity",es.EsEntity);
es.exportSymbol("es.EsEntity.populateEntity",es.EsEntity.populateEntity);es.exportSymbol("es.EsEntity.markAsDeleted",es.EsEntity.markAsDeleted);es.exportSymbol("es.EsEntity.load",es.EsEntity.load);es.exportSymbol("es.EsEntity.loadByPrimaryKey",es.EsEntity.loadByPrimaryKey);es.exportSymbol("es.EsEntity.save",es.EsEntity.save);
es.EsEntityCollection=function(){var a=ko.observableArray([]);a.es={};ko.utils.extend(a,es.EsEntityCollection.fn);a.es.___esCollection___=es.utils.newId();a.es.deletedEntities=new ko.observableArray;a.es.isLoading=ko.observable(!1);return a};
es.EsEntityCollection.fn={filter:function(a){var c=this();return ko.utils.arrayFilter(c,a)},prepareForJSON:function(){var a=[];ko.utils.arrayForEach(this(),function(c){c.isDirtyGraph()&&a.push(c)});ko.utils.arrayForEach(this.es.deletedEntities(),function(c){c.RowState()!==es.RowState.ADDED&&a.push(c)});return a},acceptChanges:function(){ko.utils.arrayForEach(this(),function(a){a.RowState()!==es.RowState.UNCHANGED&&a.acceptChanges()});this.es.deletedEntities=new ko.observableArray},rejectChanges:function(){var a=
this,c=[],b=0,d=0;ko.utils.arrayForEach(this.es.deletedEntities(),function(a){a.RowState()===es.RowState.ADDED?(c[b]=d,b+=1):a.rejectChanges();d+=1});if(0<c.length)for(d=c.length-1;0<=d;d--)this.es.deletedEntities().splice(c[d],1);ko.utils.arrayForEach(this(),function(a){a.RowState()===es.RowState.MODIFIED&&a.rejectChanges()});ko.utils.arrayForEach(this.es.deletedEntities(),function(b){a.push(b)});this.es.deletedEntities=new ko.observableArray},markAllAsDeleted:function(){var a,c,b,d;this.es.deletedEntities(this.splice(0,
this().length));b=this.es.deletedEntities;d=b().length;for(a=0;a<d;a+=1)c=b()[a],c.RowState()===es.RowState.UNCHANGED&&c.markAsDeleted()},populateCollection:function(a){var c=this.es.entityTypeName,b,d=[],e=this.createEntity,f,g=this;c&&(b=es.getType(c));a&&es.isArray(a)&&(ko.utils.arrayForEach(a,function(a){f=e(a,b);f.es.collection=g;void 0!==f&&null!==f&&d.push(f)}),this(d))},createEntity:function(a,c){var b;b=c;c||(b=this.es.entityTypeName,b=es.getType(b));b?(b=new b,b.populateEntity(a)):b=a;return b},
addNew:function(){var a=null,c=this.es.entityTypeName;c&&(a=es.getType(c),a=new a,this.push(a));return a},load:function(a){var c=this;c.es.isLoading(!0);a.async=void 0!==a.success||void 0!==a.error?!0:!1;a.route&&(a.url=a.route.url||this.esRoutes[a.route].url,a.type=a.route.method||this.esRoutes[a.route].method);var b=a.success,d=a.error;a.success=function(a,d){c.populateCollection(a);b&&b.call(c,a,d.state);c.es.isLoading(false)};a.error=function(a,b,g){d&&d.call(c,a,b,g.state);c.es.isLoading(false)};
es.dataProvider.execute(a);!1===a.async&&c.es.isLoading(!1)},loadAll:function(a,c,b){var d={route:this.esRoutes.loadAll};1===arguments.length&&arguments[0]&&"object"===typeof arguments[0]?es.utils.extend(d,arguments[0]):(d.success=a,d.error=c,d.state=b);this.load(d)},save:function(a,c,b){var d=this;d.es.isLoading(!0);var e={success:a,error:c,state:b};1===arguments.length&&arguments[0]&&"object"===typeof arguments[0]&&es.utils.extend(e,arguments[0]);e.async=void 0!==e.success||void 0!==e.error?!0:
!1;e.route=d.esRoutes.commit;e.data=es.utils.getDirtyGraph(d);e.route&&(e.url=e.route.url,e.type=e.route.method);var f=e.success,g=e.error;e.success=function(a,b){d.populateCollection(a);f&&f.call(d,a,b.state);d.es.isLoading(false)};e.error=function(a,b,c){g&&g.call(d,a,b,c.state);d.es.isLoading(false)};es.dataProvider.execute(e);!1===e.async&&d.es.isLoading(!1)}};es.exportSymbol("es.EsEntityCollection",es.EsEntityCollection);es.exportSymbol("es.EsEntityCollection.markAllAsDeleted",es.EsEntityCollection.markAllAsDeleted);
es.exportSymbol("es.EsEntityCollection.loadAll",es.EsEntityCollection.loadAll);es.exportSymbol("es.EsEntityCollection.load",es.EsEntityCollection.load);es.exportSymbol("es.EsEntityCollection.save",es.EsEntityCollection.save);es.defineEntity=function(a,c){var b="string"!==typeof a,d=b?a:c,e=function(a){this.es={};d.call(this);this.applyDefaults();this.init();a&&this.populateEntity(a)};e.prototype=new es.EsEntity;b||(es.generatedNamespace[a]=e);return e};es.exportSymbol("es.defineEntity",es.defineEntity);
es.defineCollection=function(a,c){var b="string"!==typeof a,d=b?a:c,e=function(a){var b=new es.EsEntityCollection;b.es.entityTypeName=d;this.init.call(b);a&&b.populateCollection(a);return b};e.prototype=new function(){var a=this,b=[];this.init=function(){var c=this;ko.utils.arrayForEach(b,function(a){a.call(c)});for(var d in a)a.hasOwnProperty(d)&&"init"!==d&&"customize"!==d&&(c[d]=a[d]);this.isDirty=function(){var a,b,d=c(),e=!1;if(0<this.es.deletedEntities().length)e=!0;else if(0<d.length&&d[d.length-
1].isDirty())e=!0;else for(a=0;a<d.length;a++)if(b=d[a],b.RowState()!==es.RowState.UNCHANGED){e=!0;break}return e};this.isDirtyGraph=function(){var a,b,d=c();b=!1;if(0<this.es.deletedEntities().length)b=!0;else if(0<d.length&&d[d.length-1].isDirty())b=!0;else for(a=0;a<d.length;a++)if(b=d[a],b.RowState()!==es.RowState.UNCHANGED){b=!0;break}else if(b=b.isDirtyGraph(),!0===b)break;return b}};this.customize=function(a){b.push(a)}};b||(es.generatedNamespace[a]=e);return e};
es.exportSymbol("es.defineCollection",es.defineCollection);
es.AjaxProvider=function(){var a=function(){},c=function(a,c){var e=/\{([^\}]+)\}/g;if("string"!==typeof c)return e=a.replace(e,function(a,b){if(b in c)return ko.utils.unwrapObservable(c[b])})};this.execute=function(b){var d=b.success||a,e=b.error||a,b=$.extend({cache:!1,contentType:"application/json; charset=utf-8;",dataType:"json",type:"GET"},b);b.success=function(a){d(a,b)};b.error=function(a){if(e)e(a.status,a.responseText,b);else es.onError({code:a.status,message:a.responseText})};b.url=c(b.url,
b.data);b.data&&"GET"!==b.type&&(b.data=ko.toJSON(b.data));$.ajax(b)}};es.dataProvider=new es.AjaxProvider;
