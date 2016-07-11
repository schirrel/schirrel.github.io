var ref = new Firebase("https://sicamisetas.firebaseio.com/pedidos");


var modelos = {m1: 0, m2:0,m3:0,m4:0,m5:0, m6:0, m7:0}
var pedido = {nome : "", semestre: "", telefone:"", qtds: null, tamanho:""}
function fazerPedido(){
  if(($("#nome").val() == "" || $("#nome").val() == "Nome" )
  || ($("#semestre").val() == "" || $("#semestre").val() =="Semestre" )
  ||( $("#telefone").val() == "" || $("#telefone").val() == "Telefone")) {
    alert("Existem campos em branco.");
  } else if(checarTodosOsModelos()){
    alert("Nenhum modelo foi escolhido");
  } else if($("#selectTamanho").val() == "Tamanho") {
    alert("O tamanho não foi escolhido");
  }
  else {
    modelos.m1 = $("#selectMod1").val() == "Qtd"? 0: $("#selectMod1").val()/1;
    modelos.m2 = $("#selectMod2").val() == "Qtd"? 0: $("#selectMod2").val()/1;
    modelos.m3 = $("#selectMod3").val() == "Qtd"? 0: $("#selectMod3").val()/1;
    modelos.m4 = $("#selectMod4").val() == "Qtd"? 0: $("#selectMod4").val()/1;
    modelos.m5= $("#selectMod5").val() == "Qtd"? 0: $("#selectMod5").val()/1;
    modelos.m6= $("#selectMod6").val() == "Qtd"? 0: $("#selectMod6").val()/1;
    modelos.m7= $("#selectMod7").val() == "Qtd"? 0: $("#selectMod7").val()/1;

    pedido.nome =  $("#nome").val();
    pedido.semestre =   $("#semestre").val();
    pedido.telefone =     $("#telefone").val();
    pedido.qtds = modelos;
    pedido.tamanho = $("#selectTamanho").val();
    ref.push(pedido, function (err) {
      if (err) {
        alert("Problema ao cadastrar pedido")
        logError(err);
        return false;
      }
      else {
      //  document.getElementById("#selectMod1").selectedIndex = "0";
        // document.getElementById("#selectMod2").selectedIndex = "0";
        // document.getElementById("#selectMod3").selectedIndex = "0";
        // document.getElementById("#selectMod4").selectedIndex = "0";
        // document.getElementById("#selectMod5").selectedIndex = "0";
        // document.getElementById("#selectMod6").selectedIndex = "0";
        // document.getElementById("#selectMod7").selectedIndex = "0";
        //
        // document.getElementById("selectTamanho").selectedIndex = "0";
$("#selectTamanho").prop('selectedIndex',0);
$("#selectMod1").prop('selectedIndex',0);
$("#selectMod2").prop('selectedIndex',0);
$("#selectMod3").prop('selectedIndex',0);
$("#selectMod4").prop('selectedIndex',0);
$("#selectMod5").prop('selectedIndex',0);
$("#selectMod6").prop('selectedIndex',0);
$("#selectMod7").prop('selectedIndex',0);



        alert("Pedido Salvo");
        $("#nome").val("");
        $("#semestre").val("");
        $("#telefone").val("");
        $("#selectTamanho").val();
        return false;
      }
    });

  }
}


function checarTodosOsModelos(){
  var oc=0;
  for(var i = 1; i < 8; i++) {
    if($("#selectMod"+i).val() == "Qtd"){
      oc++;
    }

  }
  return oc == 7;
}
