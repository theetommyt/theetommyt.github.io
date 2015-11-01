var app = angular.module('portfolio', []);


app.controller('ProjectController', ['$scope', function($scope) {

  $scope.projects =
    [
        {
          name: "Reign",
          image: "images/reign.png",
          tag: "A Seattle themed restaurant POS system",
          weblink: "https://reignpos.herokuapp.com/",
          github: "https://github.com/theetommyt/RESTaurant",
          things: "HTML5 - CSS3 - JavaScript - jQuery - BackboneJS - UnderscoreJS - Ruby - Sinatra - Authenication - PostgreSQL - Heroku - Photoshop"
        },

        {
          name: "Bar Crawl Disaster",
          image: "images/barcrawl.jpg",
          tag: "Make your own bar crawl with chat",
          weblink: "http://linusdisaster.herokuapp.com/",
          github: "https://github.com/theetommyt/BarCrawlApp",
          things: "HTML5 - CSS3 - SkeletonCSS - NormalizeCSS - Responsive Design - JavaScript - jQuery - Ruby - Ruby on Rails - Authenication - Google Maps API - Google Places API - PostgreSQL - Heroku - Photoshop - Illustrator"
        },

        {
          name: "Shakespeare... in Bed",
          image: "images/shakespeare.png",
          tag: "Random shakespeare quote generator",
          weblink: "https://shakespeareinbed.herokuapp.com/",
          github: "https://github.com/theetommyt/Shakespeare-in-bed",
          things: "HTML5 - CSS3 - Responsive Design - JavaScript - jQuery - RegEx - GitHub Pages - Photoshop"
        },

        {
          name: "Race for Charity",
          image: "images/charityRace.png",
          tag: "Search for a race charity",
          weblink: "#",
          github: "https://github.com/theetommyt/charity_race_app",
          things: "HTML5 - CSS3 - BootstrapCSS - NormalizeCSS - Responsive Design - JavaScript - jQuery - MongoDB - ExpressJS - AngularJS - NodeJS - Digital Ocean - GitHub - Photoshop"
        },

        {
          name: "Portage Preschool",
          image: "images/materialMountain.jpg",
          tag: "Local preschool info site",
          weblink: "http://www.ptgpreschool.com",
          github: "https://github.com/theetommyt/portagePreschool",
          things: "HTML5 - CSS3 - BootstrapCSS - NormalizeCSS - Responsive Design - JavaScript - jQuery - GitHub - Photoshop - Illustrator"
        },

        {
          name: "TheeTommyT",
          image: "images/portfolio.png",
          tag: "My personal portfolio site",
          weblink: "http://www.theetommyt.com",
          github: "https://github.com/theetommyt/portagePreschool",
          things: "HTML5 - CSS3 - MaterializeCSS - NormalizeCSS - Responsive Design - JavaScript - jQuery - AngularJS - GitHub Pages - Photoshop - Illustrator"
        },

        {
          name: "Tiki Torch 5k",
          image: "images/tiki.png",
          tag: "A tiki themed 5k race",
          weblink: "http://www.tiki5k.com",
          github: "",
          things: "WordPress, HTML5, CSS3, jQuery"
        },

        {
          name: "Dawn of the Dunes",
          image: "images/dod.png",
          tag: "A fall beachfront marathon",
          weblink: "http://www.dunesmarathon.com",
          github: "",
          things: "WordPress, HTML5, CSS3, jQuery"
        },

    ]

}]);
