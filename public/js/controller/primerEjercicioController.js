
var app = angular.module("primerEj", ['btford.socket-io']);
var mySocket = app.factory('mySocket',function(socketFactory){
  return socketFactory();
});
var pinesUsados=[];
// var interpreter=app.factory('interpreter',function())
app.controller("primerEjercicioController", function($scope,mySocket) {


Blockly.JavaScript["bloqueLed"] = function(block) {
  var code;
  var dropdown_switch = block.getFieldValue("Switch");
  removerCss("led-" + dropdown_switch,pin,dropdown_switch);
  var pin = block.getFieldValue("PIN");
  code = "mySocket.emit('led:" + dropdown_switch + "'," + pin + ");";
  return code;
};

Blockly.JavaScript['wait'] = function(block) {
  var dropdown_delay = block.getFieldValue('DELAY');
  // TODO: Assemble JavaScript into code variable.
  //var code = "mySocket.emit('wait'," + dropdown_delay + ");";

  var code='wait(' + dropdown_delay + ');';
  return code;
};

     $scope.runCode = function (){
		 $("#leds").html('');
          window.LoopTrap = 1000;
          Blockly.JavaScript.INFINITE_LOOP_TRAP =
              'if(--window.LoopTrap == 0) throw "Inifinite Loop";\n';
          var code = Blockly.JavaScript.workspaceToCode(workspace);
          var code = Blockly.JavaScript.workspaceToCode(workspace);
          var myInterpreter = new Interpreter(code);

          Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
          try{
           console.log(code);
            //myInterpreter.run()
           eval(code);

           validar();
           refreshToolTip();
          }catch(e){
            alert(e);
          }
    };

    function removerCss(newClass,pin,estado){
    var tooltip;
    switch(estado) {
    case "prender":
        tooltip = "Prendido";
        break;
    case "apagar":
         tooltip = "Apagado";
        break;
    case "titilar":
        tooltip = "Titilando";
    }

		if($("#" + pin).hasClass('led-prender') || $("#" + pin).hasClass('led-apagar') || $("#" + pin).hasClass('led-titilar') )
		{
			var clase = $('#'+ pin).attr('class');
			$( "#"+ pin).removeClass(clase).addClass(newClass);
		}
		else
		{
			var html = "<div class='led-box'> <div id ='"+ pin + "' class='" + newClass + "' data-toggle='tooltip' title=' Led "+pin+ ": "+ tooltip +"'></div></div>";
			$("#leds").append(html);
		}
    };

    function validar(){
       var titilar = $('.led-titilar').length;
       var prender = $('.led-prender').length;
       var apagar = $('.led-apagar').length;
       if(titilar == 2 || (prender == 6 && apagar == 8))
          bootbox.alert("Has llegado al resultado esperado!");
        else
          bootbox.alert("El resultado final y el esperado no son iguales!");
    };


    function refreshToolTip(){
        $('[data-toggle="tooltip"]').tooltip();
    };


})
