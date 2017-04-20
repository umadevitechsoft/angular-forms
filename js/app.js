angular.module("ranjith", ['ui.router']) //set module
angular.module("ranjith").config(function($stateProvider) {

    $stateProvider.state('homestate', {
        url: "/homelink",
        templateUrl: "templates/home.html",
        controller: "homeController"
    });
    $stateProvider.state('aboutstate', {
        url: "/aboutlink",
        templateUrl: "templates/about.html",
        controller: "aboutController"
    });
    $stateProvider.state('servicesstate', {
        url: "/serviceslink",
        templateUrl: "templates/services.html",
        controller: "servicesController"
    });
    $stateProvider.state('contactstate', {
        url: "/contactlink",
        templateUrl: "templates/contact.html",
        controller: "contactController"
    });

});