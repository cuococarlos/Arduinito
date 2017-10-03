var app = angular.module("primerEj", ['btford.socket-io']);
var mySocket = app.factory('mySocket',function(socketFactory){
  return socketFactory();
});
app.controller("primerEjercicioController", function($scope,mySocket) {

Blockly.JavaScript["bloqueLed"] = function(block) {
  var code;
  var dropdown_switch = block.getFieldValue("Switch");
  var pin=block.getFieldValue("PIN");
  removerCss("led-" + dropdown_switch);
  code = "mySocket.emit('led:" + dropdown_switch + "'," + pin + ");";
  return code;
};


     $scope.runCode = function (){
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

    function removerCss(newClass){
      var clase = $('#led').attr('class');
      $( "#led").removeClass(clase).addClass(newClass);
    };



})
