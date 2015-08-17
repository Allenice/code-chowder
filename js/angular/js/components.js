/*
* angular components
* */

var tabTpl = document.getElementById('tpl-tab').innerHTML;
var paneTpl = document.getElementById('tpl-pane').innerHTML;

var components = angular.module('components', []);


components.directive('myTabs', function() {
  return {
    restrict: 'E',
    transclude: true,
    scope: {},
    controller: function($scope, $element) {
      var panes = $scope.panes = [];

      $scope.select = function(pane) {
        angular.forEach(panes, function(pane) {
          pane.selected = false;
        });

        pane.selected = true;
      };

      this.addPane = function(pane) {
        if (panes.length === 0) $scope.select(pane);
        panes.push(pane);
      }
    },

    template: tabTpl,

    replace: true
  }
});

components.directive('pane', function() {
  return {
    require: '^myTabs',
    restrict: 'E',
    transclude: true,
    scope: {title: '@'},
    link: function(scope, element, attrs, tabsController) {
      tabsController.addPane(scope);
    },
    template: paneTpl,
    replace: true
  }
});