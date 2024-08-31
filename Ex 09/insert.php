<?php
include('dbconnect.php');

if ($_SERVER["REQUEST_METHOD"] == "POST" && empty($errors)) {
    $empid = $_POST["empid"];
    $name = $_POST["name"];
    $designation = $_POST["designation"];
    $DOJ = $_POST["DOJ"];
    $salary = $_POST["salary"];

    $sql = "INSERT INTO emp (empid,name,designation,DOJ,salary) VALUES ('$empid', '$name', '$designation', '$DOJ', '$salary')";

    if ($conn->query($sql) === TRUE) {
        echo "New employee created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

$conn->close();
?>

