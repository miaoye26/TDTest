export const test01 = {
    template: require('./app.html'),
    controller($scope, buttonService, $translate) {
      $scope.models = {};
      $scope.models.buttonLabels = [];
      $scope.models.maxHeight;
      $scope.init = () => {
        buttonService.getButtonsLabels().then(response => $scope.models.buttonLabels = response);
      }
      $scope.changeLanguage = function (key) {
        $translate.use(key);
      };
    }
};

