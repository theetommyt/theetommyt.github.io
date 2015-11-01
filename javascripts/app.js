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

app.controller("StartupController", ["$scope", function($scope){

  $scope.startups =

    [
      {
        name: "Compete Green",
        image: "images/competeGreen.jpg",
        title: "Founder/President",
        tag: "",
        mission: "Compete Green is an endurance lifestyle brand specializing in event management and eco-friendly apparel. Our mission is to enjoy healthy, endurance lifestyles while promoting sustainability and environmental awareness through our events. We strive not to just use our beautiful world, but to become a growing and symbiotic part of it."
      },

      {
        name: "Cause 2 Compete",
        image: "images/cause2compete.jpg",
        title: "Founder/President",
        tag: "",
        mission: "Cause 2 Compete is an athletics lifestyle events company that strives to be a positive force in our communities through events, clubs, and personal interactions. With the partnerships in our communities, we deliver quality athletic activities while also contributing time, money, effort, and awareness to both social and environmental causes that improve our communities and community relationships. It is our ultimate goal to be the change we want to see in our events and our partnerships. We care about your Cause 2 Compete.",
      }
    ]

}]);
