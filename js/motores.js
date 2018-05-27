$("#container-msg-success").hide();
$(document).ready(listarMotores);

function adicionarMotor(id, numeropolos, tensaorede, regimeservico, correntenominal, potencianominal, torquemaximo) {
    var motor = new Motor(id, numeropolos, tensaorede, regimeservico, correntenominal, potencianominal, torquemaximo);
    if (motor.id != 0) {
        if ($MDB.update(motor)) {
            showSuccessMsg("Motor editado com sucesso");
        }
    } else if ($MDB.create(motor)) {
        showSuccessMsg("Motor criado com sucesso");
    }
    resetForm();
    listarMotores();
}

function showSuccessMsg(msg){
    $("#msg-success").html(msg);
    $("#container-msg-success").show();
}

function resetForm() {
    $("#motorid").val(0);
    document.getElementById("form-motor").reset();
}

function confirmRemove(idMotor) {
    $("#btn-yes-remove-motor").click(function () {
        removeMotor(idMotor);
    });
    $("#confirm-modal-remove").modal("show");
}

function removeMotor(idMotor) {
    if ($MDB.removerMotor(idMotor)) {
        showSuccessMsg("Motor removido com sucesso");
        $("#confirm-modal-remove").modal("hide");
        listarMotores();
    }
}

function editMotor(idMotor) {
    var motor = $MDB.find(idMotor);
    $("#motorid").val(motor.id);
    $("#numeropolos").val(motor.numeropolos);
    $("#tensaorede").val(motor.tensaorede);
    $("#regimeservico").val(motor.regimeservico);
    $("#correntenominal").val(motor.correntenominal);
    $("#potencianominal").val(motor.potencianominal);
    $("#torquemaximo").val(motor.torquemaximo);
}

function listarMotores() {
    $("#content-table-motores").html("");
    $MDB.tableMotor.forEach(function (motor) {
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

        var btnEdit = $("<a></a>").addClass("btn btn-default").attr("href", "javascript:editMotor(" + motor.id + ")");
        btnEdit.append($("<span></span>").addClass("glyphicon glyphicon-pencil"));

        options.append(btnRemove);
        options.append(btnEdit);

        item.append(options);
        $("#content-table-motores").append(item);
    });
}
