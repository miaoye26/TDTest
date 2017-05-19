/**
 * Created by vinogradovivan on 2017-05-17.
 */
export default function buttonService($http) {
  this.getButtonsLabels = () => $http.get('./test01/data.json').then(response => response.data);
}

