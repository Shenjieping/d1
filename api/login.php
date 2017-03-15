<?php
    header("Content-type:text/html;charset=utf-8");
    function doPost(){
		session_start();
		//$_SESSION["user"]=null;
		if(!isset($_SESSION["user"])){
			$user=0;
			if(isSet($_POST["user"]) && isSet($_POST["password"])){
				$conn=new mysqli("localhost","root","","shop");
				mysqli_query($conn,"set character set 'utf8'");//读库
				mysqli_query($conn,'set names utf8');//写库
				$result=$conn->query("select * from shop where user='".$_POST["user"]."' and secret='".$_POST["password"]."';");
				$sql="select * from shop where user='".$_POST["user"]."' and secret='".$_POST["password"]."';";
				//echo $sql;
				while($row = mysqli_fetch_assoc($result)){
					$user=$row["user"];
					//$_SESSION["secret"]=$row["password"];
				}
				//echo 555;
				$conn->close();
			}
			//echo 666;
			echo $user;
		}else{
			if(isset($_SESSION["user"])){
				//echo $_SESSION["user"];
			}
		}
    }
    doPost();

?>