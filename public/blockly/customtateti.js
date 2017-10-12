Blockly.Blocks['bloqueLed'] = {
  init: function() {
    this.appendDummyInput("Left")
        .appendField("Led")
        .appendField(new Blockly.FieldDropdown([["prender","prender"]]), "Switch");
    this.appendDummyInput("Left")
         .appendField("PIN")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"]]), "PIN");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['bloquePlayer2'] = {
  init: function() {
    this.appendDummyInput("Left")
        .appendField("Led")
        .appendField(new Blockly.FieldDropdown([["titilar","titilar"]]), "Switch");
    this.appendDummyInput("Left")
         .appendField("PIN")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"],["3","3"],["4","4"],["5","5"],["6","6"],["7","7"],["8","8"],["9","9"],["10","10"],["11","11"],["12","12"],["13","13"]]), "PIN");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};