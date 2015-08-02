<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Documento sem título</title>
</head>
<link rel="stylesheet" href="../css/style.css" />
 <style type="text/css">
  body {
	background-color: #CCC;
	background-image: url(../img/fundo.jpg);
}
</style>
<body>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Eu Sou 15000 - Alex Viana 15000</title>
<link rel="stylesheet" href="../css/style.css" />
<script type="text/javascript">var switchTo5x=true;</script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">stLight.options({publisher: "9566e847-5655-4ab1-8dbc-0e15f5a5bada"}); </script>
 <link href="../css/jquery.tweet.css" rel="stylesheet"/>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
  <script src="../js/jquery.tweet.js" charset="utf-8"></script>
  <script type="text/javascript">
    function randomString(length) {
      var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');
      var str = '';
      for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
      }
      return str;
    }
    var rnd = randomString(8);

    jQuery(function($) {
      $(".rnd").replaceWith(rnd);


      $(".demo .code").hide().each(function(i,e){
        $(e).before($('').
                      click(function(ev) {
                        $(e).slideToggle();
                        $(this).hide();
                        ev.preventDefault();
                      }));

      }).each(function(i, e){ eval($(e).text()); });
    });
  </script>
  <style type="text/css">
  body {
	background-color: #CCC;
	background-image: url(../img/fundo.jpg);
}
  #menubar {
	position:fixed;
	left:-1px;
	top:-1px;
	width:100%;
	height:46px;
	background-image:url(../img/bgmenu.gif);
	z-index:2;
}
  #container {
	position:absolute;
	left:12px;
	top:80px;
	width:614px;
	height:484px;
	z-index:1;
}
    #jasanelogo {
	position: fixed;
	right:0px;
	bottom:-0px;
	width:100%;
	height:75px;
	z-index:5;
	background-image: url(img/jasanelogo.png);
	background-repeat:no-repeat;
	background-position:right;
}

  #eusou {
	position:absolute;
	left:13px;
	width:501px;
	height:168px;
	z-index:1;
}
  #eusoufoto {
	position:absolute;
	left:34px;
	width:130px;
	height:130px;
	z-index:3;
	background:#fff;
	-moz-border-radius:12px;
	-webkit-border-radius:12x;
	border-radius:12px;
}
  #eusounome {
	position:absolute;
	left:195px;
	width:284px;
	height:28px;
	z-index:4;
	background:#fff;
	-moz-border-radius:12px;
	-webkit-border-radius:12x;
	border-radius:12px;
}
  #eusoutexto {
	position:absolute;
	left:194px;
	width:286px;
	height:80px;
	z-index:5;
	background:#fff;
	-moz-border-radius:12px;
	-webkit-border-radius:12x;
	border-radius:12px;
}
  </style>
  <script type="text/javascript">var switchTo5x=true;</script>
<script type="text/javascript" src="http://w.sharethis.com/button/buttons.js"></script>
<script type="text/javascript">stLight.options({publisher: "9566e847-5655-4ab1-8dbc-0e15f5a5bada"}); </script>

</head>

<body>
<!--   MENU  -->

<div id="inicioimg"><a href="../index.php"><img src="../img/inicio.png" width="50" height="31" alt="Inicio" /></a></div>
<div id="menubar"></div>
<div id="menu">
<ul id="menu">
<li><a href="../minhahistoria/">Minha História</a></li>
<li><a href="../diretrizes/">Diretrizes</a></li>
<li><a href="../noticias/">Notícias</a></li>
<li><a href="../videos/">Videos</a></li>
<li><a href="../agenda/">Agenda</a></li>
<li><a href="../falecomigo/">Fale Comigo</a></li>
<li><a href="../eusou15000/">Eu Sou 15000</a></li>
<li><a href="../galeria/">Galeria</a></li>
</ul>
</div>
<div id="RS">
<a href="http://www.facebook.com/Alex.Viana.15"><img src="../img/icon_fb.png" width="32" height="32" alt="Facebook" /></a>
<a href="http://www.twitter.com/Alex_Viana15"><img src="../img/icon_tw.png" width="32" height="32" alt="Twitter" /></a>
<a href="http://www.youtube.com/user/AlexViana15000"><img src="../img/icon_yt.png" width="32" height="32" alt="YouTube" /></a>
</div>
<!--   AREA A DIREITA  -->
<div id="foto"><img src="../img/foto.png" width="308" height="330" alt="Alex Viana 1500" longdesc="http://alexviana15000.com.br" /></div>
<div id="logo"><img src="../img/logo.png" width="623" height="230" alt="Alex" /></div>
<div id="twitter" align="center"class="demo">
  <h3>Últimos Tweets</h3>
<pre class="code">
      jQuery(function($){
        $(".tweet").tweet({
          join_text: "auto",
          username: "alex_viana15",
          avatar_size: 28,
          count: 3,
          auto_join_text_default: "",
          auto_join_text_ed: "",
          auto_join_text_ing: "",
          auto_join_text_reply: "",
          auto_join_text_url: "",
          loading_text: "loading tweets..."
        });
      });
    </pre>
    <div class='tweet query'></div>
</div>
<div id="container" align="center">

<?php
include('../conexao/conexao.php');
include('../function/verifica_mail.php');

$nome = $_POST['nome'];
$email = $_POST['email'];
$eusou = $_POST['eusou'];

$_UP['pasta'] = 'img/';
$_UP['tamanho'] = 1024 * 1024 * 2; // 2Mb
$_UP['extensoes'] = array('jpg', 'png', 'gif');
$_UP['renomeia'] = true;
$_UP['erros'][0] = 'Não houve erro';
$_UP['erros'][1] = 'O arquivo no upload é maior do que o limite do PHP';
$_UP['erros'][2] = 'O arquivo ultrapassa o limite de tamanho especifiado no HTML';
$_UP['erros'][3] = 'O upload do arquivo foi feito parcialmente';
$_UP['erros'][4] = 'Não foi feito o upload do arquivo';
if ($_FILES['arquivo']['error'] != 0) {
										die("Não foi possível fazer o upload, erro:<br />" . $_UP['erros'][$_FILES['arquivo']['error']]);
										exit; 
									  }

$extensao = strtolower(end(explode('.', $_FILES['arquivo']['name'])));

if (array_search($extensao, $_UP['extensoes']) === false) {

															echo "Por favor, envie arquivos com as seguintes extensões: jpg, png ou gif";
															
														   }

else if ($_UP['tamanho'] < $_FILES['arquivo']['size']) {

															echo "O arquivo enviado é muito grande, envie arquivos de até 2Mb.";
															
														}

else {


		if ($_UP['renomeia'] == true) {
								$sql_select = "SELECT * FROM eusou ORDER BY id ASC";
								
								$sql_query = mysql_query($sql_select);
								while($array = mysql_fetch_array($sql_query)) {
																				$idfoto = $array['id']+1;
																			   }
		$foto = $idfoto.'.jpg';

		} else {

				$foto = $_FILES['arquivo']['name'];

				}
		
		 
		
		if (move_uploaded_file($_FILES['arquivo']['tmp_name'], $_UP['pasta'] . $foto)) {
		
																							echo "Foto enviada com sucesso!";
		
		} else {
		
				echo "Não foi possível enviar a foto, <a href='javascript:window.history.go(-1)'>tente novamente</a>";
				
				}

}



if($nome!=='')
	{
	if($email!=='')
		{
		 	$email_verificado = verifica_email($email);
			if($email_verificado)
				{
					mysql_query("INSERT INTO  `alexvian_bd`.`eusou` (
													`id` ,
													`nome` ,
													`email` ,
													`eusou` ,
													`foto`
													)
													VALUES (
													NULL ,  '$nome',  '$email',  '$eusou',  '$foto'
													);"
								) or die ('Falha no envio!');
								
								echo 'Mensagem eviada com exito!';
				}
			else
				{
					echo 'O campo email n&atildeo &eacute; valido!<br />';
					echo "<a href='javascript:window.history.go(-1)'>Voltar</a>";
				}
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
<br /><br /><br /><br />
<span class='st_facebook_hcount' displayText='Facebook' ></span>
<span class='st_twitter_hcount' displayText='Tweet'></span>

</div>
<div id="jasanelogo"></div>

</body>
</html>

</body>
</html>