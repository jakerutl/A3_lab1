<?php
  $user = "root";
  $pass = "root"; //this should be a blank string for windows machines
  $host = "localhost";
  $db = "db_cooper"; // whatever you called your database

  $conn = mysqli_connect($host, $user, $pass, $db);
  mysqli_set_charset($conn, 'utf8');

  if (!$conn){
    echo "something broke... no soup for you!";
    exit;
  }
//
// $myQuery = "SELECT * FROM mainmodel";
// $result = mysqli_query($conn, $myQuery);
//
// $rows = array();
//
// while($row = mysqli_fetch_assoc($result)) {
//   $rows[] = $row;
// }

//get a single row (one result) using a query parameter
if (isset($_GET['carModel'])){//see if there's a parameter called carModel
  $car = $_GET['carModel']; // whatever comes after the ?

  $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";
  $result = mysqli_query($conn, $myQuery);

  $row = mysqli_fetch_assoc($result);

  echo json_encode($row);
}


if (isset($_GET["getVideos"])) {


  $myQuery = "SELECT * FROM video";

  $result = mysqli_query($conn, $myQuery);
  $rows = array();

  while($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }

  echo json_encode($rows);
}


 ?>
