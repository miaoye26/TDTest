export const test01 = {
    template: require('./app.html'),
    controller($scope, testService, $translate, $log) {
      $scope.models = {};
      $scope.models.buttonLabels = [];
      $scope.models.maxHeight;
      $scope.init = () => {
      testService.getButtonsLabels().then(response => $scope.models.buttonLabels = response);
      }
      $scope.changeLanguage = function (key) {
        $translate.use(key);
      };
    }
};

