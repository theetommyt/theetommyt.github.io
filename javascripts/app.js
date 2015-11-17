var app = angular.module('portfolio', []);


app.controller('ProjectController', ['$scope', function($scope) {

  $scope.projects =
    [
        {
          name: "Reign",
          image: "images/reign.png",
          tag: "A Seattle themed restaurant POS system",
          weblink: "https://reignrest.herokuapp.com/",
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
          image: "images/portagePre.jpg",
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
        tag: "An environmentally focused endurance events company in Ventura, California",
        mission: "Compete Green is an endurance lifestyle brand specializing in event management and eco-friendly apparel. Our mission is to enjoy healthy, endurance lifestyles while promoting sustainability and environmental awareness through our events. We strive not to just use our beautiful world, but to become a growing and symbiotic part of it.",
        news1: "The Green Mile - Ventury County Reporter",
        news1link: "http://www.vcreporter.com/cms/story/detail/the_green_mile/9742/",
        news2: "Ventura Company Runs Races on Green Turf - Ventura County Star",
        news2link: "http://www.vcstar.com/business/running-races-on-green-turf",
        news3: "Runners Compete in Half Marathon & 5k - Ventura County Star",
        news3link: "http://www.vcstar.com/news/runners-compete-in-half-marathon-and-5k"
      },

      {
        name: "Cause 2 Compete",
        image: "images/cause2compete.jpg",
        title: "Founder/President",
        tag: "A community focused endurance events company in Northwest Indiana",
        mission: "Cause 2 Compete is an athletic events company that strives to be a positive force in our communities through events. With partnerships, we can improve our communities and community relationships in both social and environmental causes. It is our ultimate goal to be the change we want to see in our events and our communities. We care about your Cause 2 Compete.",
        news2: "We Run This Town Race Series Begins in Portage - NWILife.com",
        news2link: "http://www.portagelife.com/sports/parks-club-sports/29130-we-run-this-town-race-series-begins-in-portage",
        news1: "Gary To Host Its First Marathon On Oct. 27 - CBS Chicago",
        news1link: "http://chicago.cbslocal.com/2013/10/16/gary-to-host-its-first-marathon-on-oct-27/",
        news3: "Dawn of the Dunes Marathon debuts in Gary - NWI Times",
        news3link: "http://www.nwitimes.com/sports/recreation/running/dawn-of-the-dunes-marathon-debuts-in-gary/article_b79ebe31-3b89-58c1-a2f4-4afe83773798.html"

      }
    ]

}]);
