<?
 function converteData($Data){
						if (strstr($Data, "/")) //verifica se tem a barra /
							{
							  $d = explode ("/", $Data); //tira a barra
							  $rstData = "$d[2]-$d[1]-$d[0]"; //separa as datas $d[2] = ano $d[1] = mes etc...
							  return $rstData;
						} elseif(strstr($Data, "-")){
							  $d = explode ("-", $Data);
							  $rstData = "$d[2]/$d[1]/$d[0]"; 
							  return $rstData;
						}else{
						 	  return "Data invalida";
						}
					}	
				?>