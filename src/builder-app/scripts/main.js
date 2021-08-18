/*
    MAIN SCRIPTS - Last updated: 06.08.15 - entwide
*/
//-----------------------------------------------------------------
// Swap {{ brackets }} for {(...)} - avoid jekyll conflict
//-----------------------------------------------------------------

var app = angular.module('builderApp', ['ngRoute'], function($interpolateProvider) {
    $interpolateProvider.startSymbol('{(');
    $interpolateProvider.endSymbol(')}');
});

//-----------------------------------------------------------------
// Route Provider
//-----------------------------------------------------------------

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider

		// DEFAULT
		.when("/", {templateUrl: "/builder-app/layouts/preview/", controller: "PageController"})

		// DASHBOARD
		.when("/dashboard/option-1/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})
		.when("/dashboard/option-2/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})
		.when("/dashboard/option-3/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})

		// CONTENT
		.when("/content/settings/", {templateUrl: "/builder-app/layouts/settings/", controller: "PageController"})
		.when("/content/sitemap/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})
		.when("/content/assets/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})
		.when("/content/copywriting/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})
		.when("/content/seo/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})

		// DESIGN
		.when("/design/moodboard/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})
		.when("/design/wireframes/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})
		.when("/design/styleguide/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})
		.when("/design/branding/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})
		.when("/design/component-library/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "PageController"})

		// PREVIEW
		.when("/preview/", {templateUrl: "/builder-app/layouts/coming_soon/", controller: "StageLoaderController"})

		// 404
		.otherwise("/404", {templateUrl: "/builder-app/layouts/404.html", controller: "NavController"});
}]);

//-----------------------------------------------------------------
// Page Controller
//-----------------------------------------------------------------

app.controller('PageController', function ($scope) {
	console.log("Page Controller reporting for duty...");
	$('.lv-stage-loader').addClass('hide');
});

//-----------------------------------------------------------------
// Preview Controller
//-----------------------------------------------------------------

app.controller('StageLoaderController', function ($scope) {
	$('.lv-stage-loader').removeClass('hide');
});

//-----------------------------------------------------------------
// ContextMenuPanelController
//-----------------------------------------------------------------

app.controller('PanelController', function(){
	this.tab = 1;
	this.tools = ['Dashboard', 'Content', 'Design', 'Development', 'Preview'];

	this.selectTab = function(setTab) {
		this.tab = setTab;
	};
	this.isSelected = function(getTab) {
		return this.tab === getTab;
	};

	this.previewUrl = function(url) {
		var root = "";//http://dannybeaton.com.au";
		$('.lv-stage-loader').removeClass('hide').attr('src', root + url);
	}
});