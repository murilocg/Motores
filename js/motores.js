$("#container-msg-success").hide();

function adicionarMotor(numeropolos, tensaorede, regimeservico, correntenominal, potencianominal, torquemaximo){
    var motor = new Motor(numeropolos, tensaorede, regimeservico, correntenominal, potencianominal, torquemaximo);
    if($MDB.salvarMotor(motor)){
        $("#msg-success").html("Motor inserido com sucesso");
        $("#container-msg-success").show();
        resetForm();
    }
}

function resetForm(){
     document.getElementById("form-motor").reset(); 
}