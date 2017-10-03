Blockly.Blocks['bloqueLed'] = {
  init: function() {
    this.appendDummyInput("Left")
        .appendField("Led")
        .appendField(new Blockly.FieldDropdown([["prender","prender"], ["apagar","apagar"],["titilar","titilar"]]), "Switch");
    this.appendDummyInput("Left")
         .appendField("PIN")
        .appendField(new Blockly.FieldNumber('2','2','13'),"PIN");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
