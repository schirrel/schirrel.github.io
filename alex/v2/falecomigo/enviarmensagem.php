ï»¿<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Alex Viana 15000</title>
</head>
<body>

<div align="center">
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

<?php

include('../conexao/conexao.php');

$nome = $_POST['nome'];
$email = $_POST['email'];
$assunto = $_POST['assunto'];
$mensagem = $_POST['mensagem'];
$data = date("d-m-Y");
$time = date('H:i');

if($nome!=='')
	{
	if($email!=='')
		{
	mysql_query("INSERT INTO `mensagens` (
													`id` ,
													`email` ,
													`nome` ,
													`assunto` ,
													`mensagem` ,
													`data` ,
													`hora` ,
													`ip` ,
													`status`
													)
													VALUES (
													NULL , '$email', '$nome', '$assunto', '$mensagem ', '$data', '$time', '', 'N'
													)"
								) or die ('Falha no envio!');
								
								echo 'Mensagem eviada com exito!<br />';
								echo "Aguarde enquanto é redirecionado <meta http-equiv='refresh' content='3; url=contato.php'>";
				}

	else
		{
			echo 'O campo email &eacute; obrigatoiro!<br />';
			echo "<a href='javascript:window.history.go(-1)'>Voltar</a>";
		}
	}
else
	{
		echo 'O campo nome &eacute; obrigatoiro!<br />';
 		echo "<a href='javascript:window.history.go(-1)'>Voltar</a>";
	}



?>
</div>
</body>
</html>