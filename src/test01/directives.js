/**
 * Created by vinogradovivan on 2017-05-17.
 */


export default function sameHeightButtons($log, $q, $document, $timeout){
  return {
    restrict: 'A',
    link: function(scope, elem, attrs) {
        if(scope.$last) {
          const buttons = elem.parent().find("button");
          let maxHeight = buttons[0].offsetHeight;
          $timeout(function() {
            for (let i = 0; i < buttons.length; i++) {
              maxHeight = buttons[i].offsetHeight > maxHeight
                ? buttons[i].offsetHeight
                : maxHeight;
            }
            scope.models.maxHeight = Math.ceil(maxHeight / 10) * 10 + 'px';
          })
      }
    }
  }
}
