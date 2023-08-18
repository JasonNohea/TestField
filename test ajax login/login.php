<?php
// PHP code for login.php
$database = file_get_contents("http://localhost/testfield/test%20ajax%20login/account.json");
$database = json_decode($database, TRUE);


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Process login request and return response
  $response = array();

  $email = $_POST['email'];
  $password = $_POST['password'];

  // Perform login authentication here
  if (isset($_POST['username']) && isset($_POST['password'])) {
    for ($i = 0; $i < count($database); $i++) {
      if ($database[$i]['username'] == $_POST['username']) {
        if ($database[$i]['password'] == $_POST['password']) {
          $response['success'] = true;
          break;
        } else {
          $response['success'] = false;
          $response['message'] = $message;
        }
      } else {
        $response['success'] = false;
        $response['message'] = $message;
      }
    }
  } else {
    echo "Harap isi semua kolom yang tersedia";
  }
  if ($success == TRUE) {
    echo "Selamat Datang " . $_POST['username'];
  } else {
    echo "Username/Password Salah";
  }

  // Check if the credentials are valid and set the $success and $message variables accordingly

  // if ($success) {
  //   $response['success'] = true;
  // } else {
  //   $response['success'] = false;
  //   $response['message'] = $message;
  // }

  // Return the response in JSON format
  echo json_encode($response);
}
