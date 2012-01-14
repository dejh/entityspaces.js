//===============================================================================		
// EntitySpaces Version : 2012.1.0000.0
// Date Generated       : 1/14/2012 11:29:15 AM
//===============================================================================

(function (es) { //myNS = "myNameSpace" ... for example purposes

	if (typeof (es) === undefined) {
		throw "Please Load EntitySpaces.Core First";
	}

	es.objects.Region = es.defineEntity(function () {

		// core columns
		this.RegionID = ko.observable();
		this.RegionDescription = ko.observable();

		// extended columns
		this.esExtendedData = undefined;

		// Hierarchical Properties
		this.TerritoriesCollectionByRegionID = undefined;
	});

	//#region Prototype Level Information

	es.objects.Region.prototype.esTypeDefs = {
		TerritoriesCollectionByRegionID: "TerritoriesCollection"
	};
	
	es.objects.Region.prototype.esRoutes = {
		commit: { method: 'PUT', url: 'Region_Save', response: 'entity' },
		loadByPrimaryKey: { method: 'GET', url: 'Region_LoadByPrimaryKey', response: 'entity' }
	};

	es.objects.Region.prototype.esColumnMap = [];

	//#endregion

}(window.es, window.myNS));

(function (es) {

	es.objects.RegionCollection = es.defineCollection('RegionCollection', 'Region');

	//#region Prototype Level Information

	es.objects.RegionCollection.prototype.esRoutes = {
		commit: { method: 'PUT', url: 'RegionCollection_Save', response: 'collection' },
		loadAll: { method: 'GET', url: 'RegionCollection_LoadAll', response: 'collection' }
	};

	//#endregion

}(window.es, window.myNS));
