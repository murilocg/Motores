class Motor {
    constructor(id, numeropolos, tensaorede, regimeservico, correntenominal, potencianominal, torquemaximo) {
        this.id = id;
        this.numeropolos = numeropolos;
        this.tensaorede = tensaorede;
        this.regimeservico = regimeservico;
        this.correntenominal = correntenominal;
        this.potencianominal = potencianominal;
        this.torquemaximo = torquemaximo;
    }
}
var $MDB = new Object();
$MDB.idGlobalMotor = 0;
$MDB.tableMotor = [];

$MDB.create = function (motor) {
    $MDB.idGlobalMotor = $MDB.idGlobalMotor + 1;
    motor.id = $MDB.idGlobalMotor;
    $MDB.tableMotor.push(motor);
    return true;
}

$MDB.update = function (motor) {
    var oldMotor = $MDB.find(motor.id);
    oldMotor.numeropolos = motor.numeropolos;
    oldMotor.tensaorede = motor.tensaorede;
    oldMotor.regimeservico = motor.regimeservico;
    oldMotor.correntenominal = motor.correntenominal;
    oldMotor.potencianominal = motor.potencianominal;
    oldMotor.torquemaximo = motor.torquemaximo;
    return true;
}

$MDB.removerMotor = function (idMotor) {
    $MDB.tableMotor = $MDB.tableMotor.filter(motor => motor.id !== idMotor);
    return true;
}

$MDB.find = function (idMotor) {
    return $MDB.tableMotor.find(function (motor) {
        return motor.id == idMotor;
    });
}
