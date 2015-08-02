<?

// conexão com o banco


 $banco = "alexvian_bd";
 $usuario = "alexvian_site";
 $senha = "d23m07";
 $hostname = 'localhost';

$conn = mysql_connect($hostname,$usuario,$senha) or die ("Não foi possível conectar-se com o banco de dados");

mysql_select_db($banco) or die ( "Não foi possível conectar ao banco MySQL");

if (!$conn) 
	{
		echo "Não foi possível conectar ao banco MySQL."; exit;
	}

// termina conexão com o banco



mysql_query("SET NAMES 'utf8'");

mysql_query('SET character_set_connection=utf8');

mysql_query('SET character_set_client=utf8');

mysql_query('SET character_set_results=utf8');
?>

