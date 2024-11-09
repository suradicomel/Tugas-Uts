function validateForm() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessage = document.getElementById("error-message");

  if (username === "" || password === "") {
      errorMessage.textContent = "Username dan password harus diisi!";
      return false;
      document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Menghindari form submit biasa (refresh halaman)
    
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var errorMessage = document.getElementById("error-message");
    
        // Validasi data di sisi klien
        if (username === "" || password === "") {
            errorMessage.textContent = "Username dan password tidak boleh kosong!";
            return;
        }
    
        // Menyiapkan data untuk dikirim ke server
        var formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
    
        // Mengirim data ke PHP menggunakan AJAX
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "login.php", true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // Jika login berhasil
                    window.location.href = "dashboard.php"; // Redirect ke halaman dashboard
                } else {
                    // Jika login gagal
                    errorMessage.textContent = response.message;
                }
            } else {
                errorMessage.textContent = "Terjadi kesalahan saat mengirim data!";
            }
        };
        xhr.send(formData);
    });
    
  }

  return true;
}
