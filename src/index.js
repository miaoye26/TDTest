import angular from 'angular';
import {ngAnimate} from 'angular-animate';
import {ngSanitize} from 'angular-sanitize';
import 'angular-ui-bootstrap';
import 'angular-ui-router';
import 'angular-translate';


import routesConfig from './routes';

import testService from './test01/services';
import sameHeightButtons from './test01/directives';

import {hello} from './app/hello';
import {test01} from './test01/app';
import {test02} from './test02/app';


import './index.scss';


export const app = 'app';

angular
  .module(app, ['ngAnimate', 'ngSanitize','ui.router', 'ui.bootstrap', 'pascalprecht.translate'])
  .config(routesConfig)
  .service('testService', testService)
  .directive('sameHeightButtons', sameHeightButtons)
  .component('app', hello)
  .component('test01', test01)
  .component('test02', test02);






