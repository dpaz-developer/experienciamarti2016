'use strict'


var module = angular.module('PYBServices', ['ngResource']);


module.factory('Locations',function ($resource){
    var url = apiBaseUrlLocations + "/locations/zipcodes/:action";
    return $resource(url, {}, {
        zipcode:{method:"GET"}
    });
});

module.factory('Bands', function ($resource){
    var url = "/published/band";
    return $resource(url, {},{
       newband:{method:"GET"}
    });
});

// TODO generar un servicio para las categorias
module.factory('Categories', function($resource){
    var url = apiBaseUrlCategories + "/categories/:categoryId";
    return $resource(url,{},{
       socialEvents:{method:"GET"}
    });

});
// TODO generar un servicio para los estados
module.factory('States', function($resource){
    var url = apiBaseUrlLocations + "/locations/MX";
    return $resource(url, {},{
       stateEvents:{method:"GET"}
    });

});

/*

 module.factory('Locations',function ($resource){
 var url = apiBaseUrl + "/locations/zipcodes/:action";
 return $resource(url, {}, {
 zipcode:{method:"GET", params:{action:"54900"}}
 });
 });
 */