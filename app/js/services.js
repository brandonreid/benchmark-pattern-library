// angular.module('services', ['benchmark.auth'])
//     .factory('Map', function () {
//         function getBounds(places) {
//             var w, n, e, s;

//             _.each(places, function (v, k) {
//                 v.latitude = v.point.coordinates[0];
//                 v.longitude = v.point.coordinates[1];
//             });

//             n = _(places)
//                 .map(function (v) {
//                     return v.latitude;
//                 })
//                 .max()
//                 .value();

//             s = _(places)
//                 .map(function (v) {
//                     return v.latitude;
//                 })
//                 .min()
//                 .value();

//             e = _(places)
//                 .map(function (v) {
//                     return v.longitude;
//                 })
//                 .min()
//                 .value();

//             w = _(places)
//                 .map(function (v) {
//                     return v.longitude;
//                 })
//                 .min()
//                 .value();

//             return {
//                 northeast: {latitude: n, longitude: e},
//                 southwest: {latitude: s, longitude: w}
//             };
//         }

//         return {
//             getBounds: getBounds
//         };
//     })
//     .factory('BenchmarkAPI', ['$http', 'URLS', 'AuthService', function ($http, URLS, AuthService) {
//         var BenchmarkAPI = {},
//             user = AuthService.getUser(),
//             BASE_URL = URLS.BENCHMARK_API_URL,
//             agency_id = user.agency_id,
//             headers = {
//                 'Authorization': 'Token ' + user.token
//             };

//         BenchmarkAPI.getPlaces = function () {
//             return $http({
//                 method: 'get',
//                 url: BASE_URL + '/agencies/' + agency_id + '/places/',
//                 headers: headers
//             });
//         };

//         BenchmarkAPI.createProvider = function (provider) {
//           return $http({
//             method: 'post',
//             url: BASE_URL + '/providers/',
//             data: provider,
//             headers: headers
//           });
//         };

//         BenchmarkAPI.createPlace = function (place) {
//           return $http({
//             method: 'post',
//             url: BASE_URL + '/places/',
//             headers: headers,
//             data: place
//           });
//         };

//         BenchmarkAPI.getAgencies = function () {
//           return $http({
//             method: 'get',
//             url: BASE_URL + '/agencies/',
//             headers: headers
//           });
//         };

//         BenchmarkAPI.getPlace = function (id) {
//             return $http({
//                 method: 'get',
//                 url: BASE_URL + '/agencies/' + agency_id + '/places/' + id + '/',
//                 headers: headers
//             });
//         };

//         BenchmarkAPI.getCharts = function (provider_id) {
//             return $http({
//                 method: 'get',
//                 url: BASE_URL + '/agencies/' + agency_id + '/charts/',
//                 headers: headers,
//                 params: {
//                     provider_id: provider_id
//                 }
//             });
//         };

//         BenchmarkAPI.contactSupport = function (contact) {
//             return $http({
//                 method: 'post',
//                 url: BASE_URL + '/contact-support/',
//                 data: contact
//             });
//         };

//         BenchmarkAPI.searchPlace = function (place) {
//           return $http({
//             method: 'get',
//             url: BASE_URL + '/places/search',
//             params: place,
//             headers: headers
//           });
//         };

//         BenchmarkAPI.scheduleSummaries = function (id) {
//           return $http({
//             method: 'get',
//             url: BASE_URL + '/summaries/run/',
//             params: {id: id},
//             headers: headers
//           });
//         };

//         BenchmarkAPI.getStats = function () {
//           return $http({
//             method: 'get',
//             url: BASE_URL + '/insights/overview/',
//             params: {agency_id: agency_id},
//             headers: headers
//           });
//         };

//         return BenchmarkAPI;
//     }]);
