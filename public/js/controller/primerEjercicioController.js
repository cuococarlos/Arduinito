var app = angular.module("primerEj", ['btford.socket-io']);
var mySocket = app.factory('mySocket',function(socketFactory){
  return socketFactory();
});
app.controller("primerEjercicioController", function($scope,mySocket) {

  Blockly.JavaScript["bloqueLedAmarillo"] = function(block) {
  var code;
  var dropdown_switch = block.getFieldValue("Switch");
  if (dropdown_switch == "prender") {
    code = "mySocket.emit('ledAmarillo:on');";
  }
  if (dropdown_switch == "apagar") {
    code = "mySocket.emit('ledAmarillo:off');";
  }
  if(dropdown_switch == "titilar"){
    code = "mySocket.emit('blinkAmarillo:blink');";
  }
  return code;
};
Blockly.JavaScript["bloqueLedVerde"] = function(block) {
  var code;
  var dropdown_switch = block.getFieldValue("Switch");
  if (dropdown_switch == "prender") {
    code = "mySocket.emit('ledVerde:on');";
  }
  if (dropdown_switch == "apagar") {
    code = "mySocket.emit('ledVerde:off');";
  }
  if(dropdown_switch == "titilar"){
    code = "mySocket.emit('blinkVerde:blink');";
  }
  return code;
};



     $scope.runCode = function (){
          window.LoopTrap = 1000;
          Blockly.JavaScript.INFINITE_LOOP_TRAP =
              'if(--window.LoopTrap == 0) throw "Inifinite Loop";\n';
          var code = Blockly.JavaScript.workspaceToCode(workspace);
          Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
          try{
            eval(code);
          }catch(e){
            alert(e);
          }
        }
});
