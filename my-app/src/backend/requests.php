<?php
include 'connect.php';

function createUsers($data, $conn)
{
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

function loginUser($data, $conn)
{
    // Validate required fields
    if (!isset($data['id']) || !isset($data['password']) || !isset($data['role'])) {
        return [
            "status" => false,
            "message" => "Missing required fields: id, role, password"
        ];
    }

    $id = trim($data['id']);
    $password = trim($data['password']);
    $role = trim($data['role']);

    if (empty($id) || empty($password) || empty($role)) {
        return [
            "status" => false,
            "message" => "All fields are required"
        ];
    }

    try {
        // Fetch user from DB
        $sql = "SELECT sacli_id, username, role, password FROM users WHERE sacli_id = :sacli_id AND role = :role";
        $stmt = $conn->prepare($sql);
        $stmt->execute([':sacli_id' => $id, ':role' => $role]);

        if ($stmt->rowCount() > 0) {
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            // Verify password
            if (password_verify($password, $user['password'])) {
                return [
                    "status" => true,
                    "message" => "Login successful",
                    "user" => [
                        "id" => $user['sacli_id'],
                        "username" => $user['username'],
                        "role" => $user['role']
                    ]
                ];
            } else {
                return [
                    "status" => false,
                    "message" => "Invalid password"
                ];
            }
        } else {
            return [
                "status" => false,
                "message" => "User not found or role mismatch"
            ];
        }
    } catch (PDOException $e) {
        return [
            "status" => "error",
            "message" => "Database error: " . $e->getMessage()
        ];
    }
}

function questionAndAnswer($conn)
{
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

function categorySelection($conn)
{
    try {
        // SQL query
        $sql = "SELECT c.id, c.name,
            CASE WHEN c.id = 1 THEN 'unlocked' ELSE 'locked' END AS status
            FROM categories c
            ORDER BY c.id";

        $stmt = $conn->query($sql);
        $categories = $stmt->fetchAll();
        return $categories;
    } catch (PDOException $e) {
        return ["status" => false, "message" => "" . $e->getMessage()];
    }
}


?>