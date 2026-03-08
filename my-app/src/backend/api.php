<?php
include 'connect.php';
include 'requests.php';
// 1. Retrieve the raw POST data
$action = $_GET['action'] ?? $_POST['action'] ?? null;
// 2. Decode the JSON data into a PHP associative array
$jsonData = file_get_contents('php://input');
$data = json_decode($jsonData, true);
switch ($action) {
    case "login":
        $response = createUsers($data, $conn);
        echo json_encode($response);
        break;
    case "QuestionAndAnswer":
        echo json_encode(['status' => true, 'questions' => questionAndAnswer($conn)]);
        break;

    case 'CategorySelection':
        echo json_encode(['status'=> true, 'categories' => categorySelection($conn)]);
        break;

    default:
        echo json_encode([
            "status" => "error",
            "message" => "Invalid action"
        ]);
}

?>