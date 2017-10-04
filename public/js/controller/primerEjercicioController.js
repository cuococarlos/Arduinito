var app = angular.module("primerEj", ['btford.socket-io']);
var mySocket = app.factory('mySocket',function(socketFactory){
  return socketFactory();
});
app.controller("primerEjercicioController", function($scope,mySocket) {

Blockly.JavaScript["bloqueLed"] = function(block) {
  var code;
  var dropdown_switch = block.getFieldValue("Switch");
  var pin=block.getFieldValue("PIN");
  removerCss("led-" + dropdown_switch,pin);
  code = "mySocket.emit('led:" + dropdown_switch + "'," + pin + ");";
  return code;
};


     $scope.runCode = function (){
		 $("#leds").html('');
          window.LoopTrap = 1000;
          Blockly.JavaScript.INFINITE_LOOP_TRAP =
              'if(--window.LoopTrap == 0) throw "Inifinite Loop";\n';
          var code = Blockly.JavaScript.workspaceToCode(workspace);
          Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
          try{
           console.log(code);
           eval(code);
          }catch(e){
            alert(e);
          }
    };
	
    function removerCss(newClass,pin){
		if($("#" + pin).hasClass('led-prender') || $("#" + pin).hasClass('led-apagar') || $("#" + pin).hasClass('led-titilar') )
		{
			var clase = $('#'+ pin).attr('class');
			$( "#"+ pin).removeClass(clase).addClass(newClass);
		}
		else
		{
			var html = "<div class='led-box'> <div id ='"+ pin + "' class='" + newClass + "'></div></div>";
			$("#leds").append(html);
		}
    };



})
