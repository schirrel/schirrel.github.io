<?
function verifica_email($email)
{
	$separa_aroba=(explode("@",$email));//separa o email en duas partes o nomne do usuario e a pagina do email
	$conta_aroba =count($separa_aroba);
	if($separa_aroba[1]!='' and $conta_aroba=='2')
		{
			$separa_ponto = (explode(".",$separa_aroba[1]));
			
			$conta_ponto = count($separa_ponto);
			if($conta_ponto=='2' or $conta_ponto=='3')
				{
					
					//$url="http://www.".$separa_aroba[1];
					//echo $url;
					//	$verifica_url=
				
					//echo $verifica_url=$_REQUEST['http://www.inteco.com.br'];

					/*header("www.terra.com.br: Negotiate");
					echo '-> '.$verifica_url.' <--';
					if ($verifica_url)
						{ 
							echo '1';
						} 
					else
						{
							 echo '0';
						}
					*/
					return true;
				}
			else
				{
					return false;
				}
		}
	else
		{
			return false;
		}
}


?>