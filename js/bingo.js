var numeros = [];
var ultimo = "";

function novoNumero() {

    numeros.push(ultimo);
  ultimo = window.prompt("", 0);
      for (var a = 0; a<numeros.length; a++){
        if(numeros[a] == ultimo){
           ultimo = "";
           break; 
        }
    }

    AddNaLista();
    document.getElementById("agora").innerHTML = ultimo;  
    }


function deleteMe(numero) {
    var i = numeros.indexOf(numero);
 
    var aux = [];

    for (var j = 0; j < numeros.length; j++) {
        if(numeros[j] != numero.toString()) {
            aux.push(numeros[j]);
        }
    }

    numeros = aux;
 
      AddNaLista();

}

function AddNaLista() {
    var content = document.getElementById("sairam");

    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    for (var i = 0; i < numeros.length; i++) {

        if (numeros[i] != "") {
            //    var bt = document.createElement('div');
            // bt.style.fontSize= "1.2em";
            // bt.style.color="black";
            // bt.className = 
            // bt.style.fontWeight = "bold";
            //     bt.style.display = 'inline';
            //    bt.innerHTML= " <div class='btn btn-info' style=margin-top: 5px; font-size:1.2em;color:black;font-weight: bold;  onclick = 'deleteMe("+numeros[i]+")' >"+numeros[i]+"</div>";
            content.innerHTML += " <div class='btn btn-info' style='margin-top: 5px; font-size:2em;color:black;font-weight: bold;'  onclick = 'deleteMe(" + numeros[i] + ")' >" + numeros[i] + "</div>";
            // content.appendChild(bt);
        }
    }
}

