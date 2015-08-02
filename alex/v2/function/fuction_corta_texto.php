<?
function corta_texto($tx,$quantidade)
	{
	if ($tx)
		{
			$contatamanho = strlen($tx); //comta quantas letras tem no texto e atribui a variavel 	$contatamanho
			if(empty($quantidade))
				{ // verifica se a varialvel é vasia
					$quantidade = 110;
				}
			if($contatamanho > $quantidade)
				{
					//Substitui o texto tx + ... por um total de $quantidade determinadas
					$texto = substr_replace($tx, " ...", $quantidade, $contatamanho - $quantidade);
				}
			else 
				{
					$texto = $tx;
			}
		return $texto;
		}
	}
	
	?>