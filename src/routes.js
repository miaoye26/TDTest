export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('test01', {
      url: '/test01',
      component: 'test01'
    })
    .state('test02', {
      url: '/test02',
      component: 'test02'
    });
    $translateProvider.translations('en', {
      "label1": "Apply for Overdraft Protection",
      "label2": "Switch to TD",
      "label3": "Review my everyday canada is a country for all banking needs",
      "label4": "Open a U.S. Dollar account",
      "label5": "Open a savings account",
      "label6": "Open a chequing account"
    });
    $translateProvider.translations('fr', {
      "label1": "orem ipsum dolorem ask ",
      "label2": "Neque porro quisquam",
      "label3": "Neque porro quisquam est qui ssadfsdfs how fox cookie pencil",
      "label4": "Ut enim ad minima veniam, quis",
      "label5": "onsequuntur magni dolores eos",
      "label6": "quis nostrum exercitationem"
    });
    $translateProvider.preferredLanguage('fr');
}
