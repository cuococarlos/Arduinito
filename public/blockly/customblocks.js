Blockly.Blocks['bloqueLedAmarillo'] = {
  init: function() {
    this.appendDummyInput("Left")
        .appendField("Led Amarillo")
        .appendField(new Blockly.FieldDropdown([["prender","prender"], ["apagar","apagar"],["titilar","titilar"]]), "Switch");
    this.appendDummyInput("Left")
         .appendField("PIN")
        .appendField(new Blockly.FieldNumber('0','12','13'),"PIN");
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
// Blockly.Blocks['math_number'] = {
//   /**
//    * Block for numeric value.
//    * @this Blockly.Block
//    */
//   init: function() {
//     this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
//     this.setColour(Blockly.Blocks.math.HUE);
//     this.appendDummyInput()
//          .appendField(new Blockly.FieldNumber('0','12','13'), 'NUM');
//     this.setOutput(true, 'Number');
//     this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
//   }
// };


//Generator Stub
