angular.module('gmmApp').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('views/catalogos.html',
    "<div class=\"container-fluid nopadding\"> <div class=\"row\"> <div class=\"container content\"> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 header-box\"> <h3>Carga de Catálogos</h3> </div> <div ng-hide=\"notificacion\"> <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0 input-file\"> <div class=\"form-group\"> <label for=\"exampleInputFile\">Seleccione el archivo que desea cargar.</label> <input type=\"file\" id=\"exampleInputFile\" file-model=\"input\"> </div> </div> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 send-btn\"> <button type=\"submit\" ng-click=\"send()\"> CARGAR ARCHIVO</button> </div> </div> </div> <div ng-show=\"notificacion\"> <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0 input-file\"> <div class=\"form-group\"> <label for=\"exampleInputFile\">El proceso ha iniciado, pronto recibirá una notificación.</label> </div> </div> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 send-btn\"> <button type=\"submit\" ng-click=\"regresar()\"> Regresar</button> </div> </div> </div> </div> </div> </div>"
  );


  $templateCache.put('views/ccontrl.html',
    "<div class=\"container-fluid nopadding\"> <div class=\"row\"> <div class=\"container content\"> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 header-box\"> <h3>Carga de Cifras de Control</h3> </div> <div class=\"col-lg-6\" ng-hide=\"notificacion\"> <div class=\"container-fluid nopadding\"> <div class=\"row\"> <div class=\"container content\"> <div class=\"col-xs-12 row-input\"> <div class=\"alert alert-danger\" ng-show=\"alert\"> <strong>{{mensaje}}</strong> </div> <div class=\"col-lg-offset-2 col-lg-1\"> KTPT8AT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPT8AT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTDGT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTDGT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTDIT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTDIT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTDMT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTDMT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTBCT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTBCT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTCLT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTCLT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTAST </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTAST\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTDLT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTDLT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KAPTPAT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KAPTPAT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPT8LT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPT8LT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTBQT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTBQT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTCKT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTCKT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPT8BT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPT8BT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTDJT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTDJT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTDNT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTDNT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTCNT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTCNT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTCOT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTCOT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTCPT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTCPT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTDFT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTDFT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPT6WT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPT6WT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTDOT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTDOT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-input\"> <div class=\"col-lg-offset-2 col-lg-1\"> KTPTCQT </div> <div class=\"col-lg-6 input\"> <input type=\"text\" ng-model=\"cifras.KTPTCQT\" ng-focus=\"changeMessage()\"> </div> </div> <div class=\"col-xs-12 row-submit nopadding\"> <div class=\"col-lg-offset-3 col-lg-6\"> <button ng-click=\"enviar()\">Guardar</button> </div> </div> </div> </div> </div> </div> <div ng-show=\"notificacion\"> <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0 input-file\"> <div class=\"form-group\"> <label for=\"exampleInputFile\">Proceso Finalizado</label> </div> </div> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 send-btn\"> <button type=\"submit\" ng-click=\"regresar()\"> Regresar</button> </div> </div> </div> </div> </div> </div> <div class=\"loading-wrap\" ng-show=\"loading\"> <img src=\"images/loading.gif\" alt=\"\"> </div>"
  );


  $templateCache.put('views/content.html',
    "<div class=\"container\"> <div ui-view=\"header\"></div> <div ui-view=\"main\"></div> <div ui-view=\"footer\"></div> </div>"
  );


  $templateCache.put('views/derechos.html',
    "<div class=\"archivo mod\"> <a href=\"archivo.html\"><img class=\"back-arrow\" src=\"img/arrow-back.svg\"></a> <img src=\"img/file.svg\"> <h3><b>Archivo 1</b></h3> <p>Modificacion 4</p> <div class=\"modificaciones\"> <div class=\"ajustes\"> <select> <option>opcion 1</option> </select> <select> <option>opcion 2</option> </select> <select> <option>opcion 3</option> </select> <input type=\"text\" name=\"input\" placeholder=\"Escribe algo\"> </div> <div class=\"btn\"> <button>Guardar</button> </div> </div> </div>"
  );


  $templateCache.put('views/footer.html',
    "<!-- \n" +
    " <div class=\"footer\">\n" +
    "      <div class=\"container\">\n" +
    "        <p><span class=\"glyphicon glyphicon-heart\"></span> from the Yeoman team</p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "-->"
  );


  $templateCache.put('views/header.html',
    "<div class=\"container-fluid nopadding\"> <div class=\"row\"> <div class=\"container\"> <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-9 nav-bar\"> <ul> <li><a ng-click=\"goTo(4)\">Descarga de Archivo</a></li> <li><a ng-click=\"goTo(3)\">Carga de Cat&aacute;logos</a></li> <li><a ng-click=\"goTo(2)\">Carga de Cifras de Control</a></li> <li><a ng-click=\"goTo(1)\">Carga de Tablas</a></li> </ul> </div> </div> </div> </div>"
  );


  $templateCache.put('views/menu_principal.html',
    "<div class=\"container-fluid nopadding\"> <div class=\"row\"> <div class=\"container content\"> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 header-box\"> <h3>Carga de Archivo de Tablas</h3> </div> <div ng-hide=\"notificacion\"> <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0 input-file\"> <div class=\"alert alert-danger\" ng-show=\"alert\"> <strong>{{mensaje}}</strong> </div> <div class=\"form-group\"> <label for=\"exampleInputFile\">Seleccione el archivo que desea cargar.</label> <input type=\"file\" id=\"exampleInputFile\" file-model=\"input\"> </div> </div> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 send-btn\"> <button type=\"submit\" ng-click=\"send()\"> CARGAR ARCHIVO</button> </div> </div> </div> <div ng-show=\"notificacion\"> <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12 col-xs-offset-0 input-file\"> <div class=\"form-group\"> <label for=\"exampleInputFile\">El proceso ha iniciado, pronto recibirá una notificación.</label> </div> </div> <div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\"> <div class=\"col-lg-6 col-lg-offset-3 col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0 send-btn\"> <button type=\"submit\" ng-click=\"regresar()\"> Regresar</button> </div> </div> </div> </div> </div> </div> <div class=\"loading-wrap\" ng-show=\"loading\"> <img src=\"images/loading.gif\" alt=\"\"> </div>"
  );

}]);
