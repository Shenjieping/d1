<?php
    header("Content-type:text/html;charset=utf-8");
    function doPost(){
        $success=0;
        $conn=new mysqli("localhost","root","","shop");
        mysqli_query($conn,"set character set 'utf8'");//读库
        mysqli_query($conn,'set names utf8');//写库
        $value="'".$_POST["user"]."','".$_POST["mobile"]."','".$_POST["secret"]."'";
        $sql="insert into shop (user,mobile,secret) values (".$value.");";
        //echo $sql;
        if($conn->query($sql)==true){
            $success=1;
        }
        $conn->close();
        echo $success;
    }
    doPost();
?>


