function calcular(){
  salario();
    
}

function salario(){
    var id          = document.getElementById("campoId").value;
    var horas       = document.getElementById("campoHoras").value;
    var salarioHora = document.getElementById("campoSalarioHora").value;
    var dinheiro,totalDinheiro = 0;
    var n200=0, n100=0; n50=0, n20=0, n10=0, n5=0, n2 =0, n1=0, aux=0;

    if(id>0){
        dinheiro       = salarioHora * horas;
        totalDinheiro += dinheiro;

        n200     = n200 + Math.floor(dinheiro/200);
        dinheiro = dinheiro % 200;

        n100     = n100 + Math.floor(dinheiro/100);
        dinheiro = dinheiro % 100;

        n50     = n50 + Math.floor(dinheiro/50);
        dinheiro = dinheiro % 50;

        n20     = n20 + Math.floor(dinheiro/20);
        dinheiro = dinheiro % 20;

        n10     = n10 + Math.floor(dinheiro/10);
        dinheiro = dinheiro % 10;

        n5     = n5 + Math.floor(dinheiro/5);
        dinheiro = dinheiro % 5;

        n2     = n2 + Math.floor(dinheiro/2);
        dinheiro = dinheiro % 2;

        n1     = n1 + Math.floor(dinheiro/1);
        dinheiro = dinheiro % 1;
    }else alert("Id não pode ser menor que 0");

    document.getElementById("total").innerHTML   =
     "Total de salario: R$ " + totalDinheiro; 

    document.getElementById("nota1").innerHTML   = 
    (n1);

    document.getElementById("nota2").innerHTML   = 
    (n2);

    document.getElementById("nota5").innerHTML   =
    (n5);

    document.getElementById("nota10").innerHTML  = 
    (n10);

    document.getElementById("nota20").innerHTML  = 
    (n20);

    document.getElementById("nota50").innerHTML  = 
    (n50);

    document.getElementById("nota100").innerHTML = 
    (n100);

    document.getElementById("nota200").innerHTML = 
    (n200);
}