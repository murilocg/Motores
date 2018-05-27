class Motor{
    constructor(numeropolos, tensaorede, regimeservico, correntenominal, potencianominal, torquemaximo){
        this.id = 0;
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

$MDB.salvarMotor = function(motor){
    $MDB.idGlobalMotor = $MDB.idGlobalMotor + 1;
    motor.id = $MDB.idGlobalMotor;
    $MDB.tableMotor.push(motor);
    return true;
}

$MDB.removerMotor = function(idMotor){
    $MDB.tableMotor = $MDB.tableMotor.filter(motor => motor.id !== idMotor);
    return true;
}