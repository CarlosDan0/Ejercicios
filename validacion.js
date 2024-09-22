function validar1(form) {
    
    let cantcap = form.cantcap.value.trim()
    let resultado = 0;

    if (cantcap <= 0 || isNaN(Number(cantcap))){
        alert("Ingrese una cantidad valida");
        return false;
    }

    resultado = (cantcap*2)/100;
    alert("La ganancia que obtendra despues de un mes será de: " + resultado + " pesos")

    return true;
}

function validar2(form) {
    
    let sueldo = form.sueldo.value.trim()
    let sm = 0;
    let smt = 0;

    if (sueldo <= 0 || isNaN(Number(sueldo))){
        alert("Ingrese una cantidad valida");
        return false;
    }

    sm = ((sueldo*30)/100);
    smt = parseFloat(sueldo) + parseFloat(sm);
    alert("Su sueldo total despues de sus comisiones será de: " + smt + " pesos");

    return true;
}

function validar3(form) {

    let precio = form.precio.value.trim()
    let descuento;
    let preciofin;

    if (precio <= 0 || isNaN(Number(precio))){
        alert("Ingrese un precio valido");
        return false;
    }

    descuento = (precio*15)/100;
    preciofin = parseFloat(precio) - parseFloat(descuento);

    alert("El descuento es de " + descuento + " pesos, dando un precio final de " + preciofin + " pesos");

    return true
}

function validar4(form) {
    
    let promedio = form.promedio.value.trim()
    let prom;
    let examen = form.examen.value.trim()
    let exam;
    let trabajo = form.trabajo.value.trim()
    let trab;
    let sum;

    if (promedio < 0 || promedio > 10 || isNaN(Number(promedio))) {
        alert("Ingrese un promedio valido");
        return false;
    }
    if (examen < 0 || examen > 10 || isNaN(Number(examen))){
        alert("Ingrese una calificacion de examen valida");
        return false;
    }
    if (trabajo < 0 || trabajo > 10 || isNaN(Number(trabajo))){
        alert("Ingrese una calificacion del trabajo valida");
        return false;
    }

    prom = (promedio*55)/100;
    exam = (examen*30)/100;
    trab = (trabajo*15)/100;
    sum = parseFloat(prom) + parseFloat(exam) + parseFloat(trab);

    alert("Su calificacion sera de " + sum + " puntos finales")

    return true

}

function validar5(form) {
    let ano = parseFloat(form.ano.value.trim())
    let mes = parseFloat(form.mes.value.trim())
    let dia = parseFloat(form.dia.value.trim())
    let ano2 = parseFloat(form.ano2.value.trim())
    let mes2 = parseFloat(form.mes2.value.trim())
    let dia2 = parseFloat(form.dia2.value.trim())
    let newano;

    if (ano <= 0 || isNaN(Number(ano)) || ano >2024 || ano.length < 4){
        alert("Ingrese un año valido");
        return false;
    }
    if (mes <= 0 || isNaN(Number(mes)) || mes > 12){
        alert("Ingrese un mes valido")
        return false;
    }
    if (dia <= 0 || isNaN(Number(dia)) || dia > 31){
        alert("Ingrese un dia valido");
        return false;
    }

    if (ano2 <= 0 || isNaN(Number(ano2)) || ano2 >2024 || ano2.length < 4){
        alert("Ingrese un año valido");
        return false;
    }
    if (mes2 <= 0 || isNaN(Number(mes2)) || mes2 > 12){
        alert("Ingrese un mes valido")
        return false;
    }
    if (dia2 <= 0 || isNaN(Number(dia2)) || dia2 > 31){
        alert("Ingrese un dia valido");
        return false;
    }

    if (ano >= ano2){
        alert("Ingrese años validos");
        return false;
    }

    if (parseFloat(mes) >= parseFloat(mes2)){
        if (parseFloat(dia) >= parseFloat(dia2)){
            newano = parseFloat(ano) - parseFloat(ano2);
        }
        else{
            newano = parseFloat(ano) - parseFloat(ano2) - 1;
        }
    }

    alert("Usted tiene " + newano + " años de edad")
    return true;
}



function validar7(form) {
    let sueldo = parseFloat(form.sueldo.value.trim());  
    let lun = parseFloat(form.lun.value.trim());
    let mar = parseFloat(form.mar.value.trim());
    let mie = parseFloat(form.mie.value.trim());
    let jue = parseFloat(form.jue.value.trim());
    let vie = parseFloat(form.vie.value.trim());
    let sulu, suma, sumi, suju, suvi, total, lut, mat, mit, jut, vit;

    if (sueldo <= 0 || isNaN(Number(sueldo))){
        alert("Ingrese un sueldo valido");
        return false;
    }

    if (isNaN(Number(lun)) || isNaN(Number(mar)) || isNaN(Number(mie)) || isNaN(Number(jue)) || isNaN(Number(vie))){
        alert("Ingrese horas validas");
        return false;
    }

    if ( lun > 24 || mar > 24 || mie > 24 || jue > 24 || vie > 24){
        alert("Ingrese las horas trabajadas validas")
        return false;
    }
    if ( lun < 0 || mar < 0 || mie < 0 || jue < 0 || vie < 0){
        alert("Ingrese las horas trabajadas validas")
        return false;
    }

    if(lun <= 8){lut = lun * sueldo}
    if(lun > 8 && lun <= 16){
        sulu = ((lun - 8) * 2) + 8;
        lut = sulu * sueldo;
    }
    if(lun > 16){
        sulu = (((lun - 16)* 3) + 24);
        lut = sulu * sueldo;
    }
    if(mar <= 8){mat = mar * sueldo}
    if(mar > 8 && mar <= 16){
        suma = ((mar - 8) * 2) + 8;
        mat = suma * sueldo;
    }
    if(mar > 16){
        suma = (((mar - 16)* 3) + 24);
        mat = suma * sueldo;
    }
    if(mie <= 8){mit = mie * sueldo}
    if(mie > 8 && mie <= 16){
        sumi = ((mie - 8) * 2) + 8;
        mit = sumi * sueldo;
    }
    if(mie > 16){
        sumi = (((mie - 16)* 3) + 24);
        mit = sumi * sueldo;
    }
    if(jue <= 8){jut = jue * sueldo}
    if(jue > 8 && jue <= 16){
        suju = ((jue - 8) * 2) + 8;
        jut = suju * sueldo;
    }
    if(jue > 16){
        suju = (((jue - 16)* 3) + 24);
        jut = suju * sueldo;
    }
    if(vie <= 8){vit = vie * sueldo}
    if(vie > 8 && vie <= 16){
        suvi = ((vie - 8) * 2) + 8;
        vit = suvi * sueldo;
    }
    if(vie > 16){
        suvi = (((vie - 16)* 3) + 24);
        vit = suvi * sueldo;
    }
    
    total = lut + mat + mit + jut + vit;
    alert("Su sueldo total es de " + total + " pesos");
    return true;
}

function validar8(form) {
    let salario = parseFloat(form.salario.value.trim());  
    let anti = parseFloat(form.anti.value.trim());  
    let total;


    if (salario <= 0 || isNaN(Number(salario))){
        alert("Ingrese un salario valido");
        return false;
    }
    if (anti <= 0 || isNaN(Number(anti))){
        alert("Ingrese una antiguedad valida");
        return false;
    }

    if (anti < 1){
        total = (salario * 5) / 100;
    }
    if (anti >= 1 && anti < 2) {
        total = (salario * 7) / 100;
    }
    if (anti >= 2 && anti < 5) {
        total = (salario * 10) / 100;
    }
    if (anti >= 5 && anti < 10) {
        total = (salario * 15) / 100;
    }
    if (anti >= 10) {
        total = (salario * 20) / 100;
    }

    alert("Su utilidad final será de " + total + " pesos")

    return true
}

function validar9(form) {

    let residuo = 0;
    let find = "";
    let num = form.num.value.trim()
    let letra = form.letra.value.trim().toUpperCase();
    var coso = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];

    if (num === "" || letra === "") {  
        alert("Ingrese los datos solicitados");  
        return false;  
    }  
    if (isNaN(num) || num < 0 || num > 99999999) {  
        alert("Ingrese un número válido");  
        return false;  
    }  
    if (num.length < 8) { 
        alert("Ingrese los 8 dígitos de su DNI");
        return false;  
    }  

    residuo = num % 23; 

    find = coso[residuo]; 

    if (find === letra) { 
        alert("Su DNI es correcto");  
    } else {  
        alert("Su DNI es incorrecto, intente de nuevo");  
    }  


    return true;
}
