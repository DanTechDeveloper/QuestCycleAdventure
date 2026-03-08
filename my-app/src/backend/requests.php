<?php
include 'connect.php';

function createUsers($data, $conn){
    // Validate required fields
    if (!isset($data['id']) || !isset($data['username']) || !isset($data['role']) || !isset($data['password'])) {
        return [
            "status" => false,
            "message" => "Missing required fields: id, username, role, password"
        ];
    }

    $id = trim($data['id']);
    $username = trim($data['username']);
    $role = trim($data['role']);
    $password = trim($data['password']);

    // Validate input
    if (empty($id) || empty($username) || empty($role) || empty($password)) {
        return [
            "status" => false,
            "message" => "All fields are required"
        ];
    }

    try {
        // Check if user already exists
        $checkSql = "SELECT sacli_id FROM users WHERE sacli_id = :sacli_id";
        $checkStmt = $conn->prepare($checkSql);
        $checkStmt->execute([':sacli_id' => $id]);

        if ($checkStmt->rowCount() > 0) {
            return [
                "status" => false,
                "message" => "User with this ID or username already exists"
            ];
        }

        // Hash the password
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        // Insert the user
        $sql = "INSERT INTO users (sacli_id, username, role, password) VALUES (:sacli_id, :username, :role, :password)";
        $stmt = $conn->prepare($sql);
        $stmt->execute([
            ':sacli_id' => $id,
            ':username' => $username,
            ':role' => $role,
            ':password' => $hashedPassword
        ]);

        return [
            "status" => true,
            "message" => "User created successfully",
            "user" => [
                "id" => $id,
                "username" => $username,
                "role" => $role
            ]
        ];
    } catch (PDOException $e) {
        return [
            "status" => "error",
            "message" => "Database error: " . $e->getMessage()
        ];
    }
}

function questionAndAnswer($conn){
    try {
        $sql = "SELECT * FROM questions";
        $stmt = $conn->prepare($sql);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        return $result;
    } catch (PDOException $e) {
        return ["status" => false, "message" => "Database error: " . $e->getMessage()];
    }
}


?>