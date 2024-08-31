<?php
include('dbconnect.php');

$sql = "SELECT * FROM emp";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        echo "Employee ID: " . $row["empid"]." - Name: " . $row["name"]. " - Designation: " . $row["designation"]. " - DOJ: " . $row["DOJ"]. " - Salary: " . $row["salary"]. "<br>";
    }
} else {
    echo "0 results";
}

$conn->close();
?>
