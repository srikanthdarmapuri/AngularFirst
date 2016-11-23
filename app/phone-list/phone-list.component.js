angular.
  module('phoneList').
  component('phoneList', {
    templateUrl: 'phone-list/phone-list.template.html',
    controller: ['$http', function PhoneListController($http) {
      this.orderProp = 'age';
      var self = this;
      $http.get('mock-data/phones.json').then(function(response) {
        self.phones = response.data;
      });
    }]
  });