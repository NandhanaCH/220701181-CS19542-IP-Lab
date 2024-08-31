<?php
include('db_connect.php');
include('form_validation.php');

if ($_SERVER["REQUEST_METHOD"] == "POST" && empty($errors)) {
    $ano = $_POST["ano"];
    $atype = $_POST["atype"];
    $balance = $_POST["balance"];
    $cid = $_POST["cid"];

    $sql = "INSERT INTO ACCOUNT (ANO, ATYPE, BALANCE, CID) VALUES ('$ano', '$atype', '$balance', '$cid')";

    if ($conn->query($sql) === TRUE) {
        echo "New account created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>
