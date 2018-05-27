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

function confirmRemove(idMotor){
    $("#btn-yes-remove-motor").click(function (){
        removeMotor(idMotor);
    });
    $("#confirm-modal-remove").modal("show");
}

function removeMotor(idMotor){
    if($MDB.removerMotor(idMotor)){
        $("#msg-success").html("Motor removido com sucesso");
        $("#container-msg-success").show();
        $("#confirm-modal-remove").modal("hide");
        listarMotores();
    }
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
        var options = $("<td></td");
        var btnRemove = $("<a></a>").addClass("btn btn-danger").attr("href", "javascript:confirmRemove(" + motor.id + ")"); 
        btnRemove.append($("<span></span>").addClass("glyphicon glyphicon-remove"));
        options.append(btnRemove);
        item.append(options);
        $("#content-table-motores").append(item);
    });
}