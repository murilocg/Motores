$("#container-msg-success").hide();
$(document).ready(listarMotores);

function adicionarMotor(numeropolos, tensaorede, regimeservico, correntenominal, potencianominal, torquemaximo){
    var motor = new Motor(numeropolos, tensaorede, regimeservico, correntenominal, potencianominal, torquemaximo);
    if($MDB.salvarMotor(motor)){
        $("#msg-success").html("Motor inserido com sucesso");
        $("#container-msg-success").show();
        resetForm();
        listarMotores();
    }
}

function resetForm(){
     document.getElementById("form-motor").reset(); 
}

function listarMotores(){
    $("#content-table-motores").html("");
    $MDB.tableMotor.forEach(function(motor){
        var item = $("<tr></tr>");
        item.append($("<td></td").text(motor.numeropolos));
        item.append($("<td></td").text(motor.tensaorede));
        item.append($("<td></td").text(motor.regimeservico));
        item.append($("<td></td").text(motor.correntenominal));
        item.append($("<td></td").text(motor.potencianominal));
        item.append($("<td></td").text(motor.torquemaximo));
        $("#content-table-motores").append(item);
    });
}