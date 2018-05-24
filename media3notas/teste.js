function answer() {
    var num1= formu.n1.value;
    var num2= formu.n2.value;
    var num3= formu.n3.value;
    if (num1== ""||num2==""||num3== "") {
      alert('Preencha todos os campos');
    } if (num1< 0||num2<0||num3 <0){
      alert('Preencha somente números positivos');
    } if (isNaN(num1)|| isNaN(num2)||isNaN(num3)){
       alert('Preencha somente números');
    }else{
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
        var num3 = document.getElementById("num3").value;
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        num3 = parseFloat(num3);
  
        var result = average(num1, num2, num3);
            
        if(result >= 6){
            var paragraph = document.getElementById("averageFinal");
            paragraph.textContent = "Aprovada";
        }else{
            var paragraph = document.getElementById("averageFinal");
            paragraph.textContent = "Reprovada";
        }
        return false;
   }
  
  function average(num1, num2, num3) {
          var conta = (num1 + num2 + num3) / 3;
          return conta;
        }
  }
  