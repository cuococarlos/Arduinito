Blockly.Blocks['bloqueLedAmarillo'] = {
  init: function() {
    this.appendDummyInput("Left")
        .appendField("Led Amarillo")
        .appendField(new Blockly.FieldDropdown([["prender","prender"], ["apagar","apagar"],["titilar","titilar"]]), "Switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
Blockly.Blocks['bloqueLedVerde'] ={
  init: function() {
    this.appendDummyInput("Left")
        .appendField("Led Verde")
        .appendField(new Blockly.FieldDropdown([["prender","prender"], ["apagar","apagar"],["titilar","titilar"]]), "Switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
  this.setTooltip("");
  this.setHelpUrl("");
}
};

//Generator Stub
