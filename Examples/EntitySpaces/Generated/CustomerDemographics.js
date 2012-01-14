//===============================================================================		
// EntitySpaces Version : 2012.1.0000.0
// Date Generated       : 1/14/2012 11:29:15 AM
//===============================================================================

(function (es) { //myNS = "myNameSpace" ... for example purposes

	if (typeof (es) === undefined) {
		throw "Please Load EntitySpaces.Core First";
	}

	es.objects.CustomerDemographics = es.defineEntity(function () {

		// core columns
		this.CustomerTypeID = ko.observable();
		this.CustomerDesc = ko.observable();

		// extended columns
		this.esExtendedData = undefined;

		// Hierarchical Properties
		this.UpToCustomersCollection = undefined;
		this.CustomerCustomerDemoCollectionByCustomerTypeID = undefined;
	});

	//#region Prototype Level Information

	es.objects.CustomerDemographics.prototype.esTypeDefs = {
		UpToCustomersCollection: "CustomersCollection",
		CustomerCustomerDemoCollectionByCustomerTypeID: "CustomerCustomerDemoCollection"
	};
	
	es.objects.CustomerDemographics.prototype.esRoutes = {
		commit: { method: 'PUT', url: 'CustomerDemographics_Save', response: 'entity' },
		loadByPrimaryKey: { method: 'GET', url: 'CustomerDemographics_LoadByPrimaryKey', response: 'entity' }
	};

	es.objects.CustomerDemographics.prototype.esColumnMap = [];

	//#endregion

}(window.es, window.myNS));

(function (es) {

	es.objects.CustomerDemographicsCollection = es.defineCollection('CustomerDemographicsCollection', 'CustomerDemographics');

	//#region Prototype Level Information

	es.objects.CustomerDemographicsCollection.prototype.esRoutes = {
		commit: { method: 'PUT', url: 'CustomerDemographicsCollection_Save', response: 'collection' },
		loadAll: { method: 'GET', url: 'CustomerDemographicsCollection_LoadAll', response: 'collection' }
	};

	//#endregion

}(window.es, window.myNS));
