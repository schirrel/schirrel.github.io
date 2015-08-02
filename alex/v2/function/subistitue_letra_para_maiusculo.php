<?
 function subistitue_letra_para_maiusculo($texto)
	{
		$trocarIsso = array(' ','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z',);
		$porIsso = array('','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','Y','Z',);
		$titletext = str_replace($trocarIsso, $porIsso, $texto);
		return $titletext;
	}
	// $resultado = subistitue_letra_para_maiusculo($valor_antigo);

?>