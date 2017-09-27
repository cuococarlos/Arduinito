var app = angular.module("primerEj", ['btford.socket-io']);
var mySocket = app.factory('mySocket',function(socketFactory){
  return socketFactory();
});
app.controller("primerEjercicioController", function($scope,mySocket) {

Blockly.JavaScript["bloqueLedAmarillo"] = function(block) {
  var code;
  var dropdown_switch = block.getFieldValue("Switch");
  code = "mySocket.emit('ledAmarillo:" + dropdown_switch + ");";
  return code;
};
Blockly.JavaScript["bloqueLedVerde"] = function(block) {
  var code;
  var dropdown_switch = block.getFieldValue("Switch");
  code = "mySocket.emit('ledVerde:" + dropdown_switch + ");";
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
