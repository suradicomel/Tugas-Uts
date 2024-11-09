<?php
session_start();

// Data dummy sebagai contoh (Ganti dengan database pada aplikasi nyata)
$akun_mahasiswa = [
    "user1" => "password123",
    "user2" => "password456"
];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    if (isset($akun_mahasiswa[$username]) && $akun_mahasiswa[$username] === $password) {
        $_SESSION["username"] = $username;
        header("Location: dashboard.php");
        exit();
    } else {
        echo "<script>alert('Username atau password salah!'); window.location.href = 'index.html';</script>";
    }
} else {
    header("Location: index.html");
    exit();
}
?>