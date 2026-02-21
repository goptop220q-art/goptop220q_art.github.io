<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Генератор паролей</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        .container {
            max-width: 400px;
            margin: auto;
        }
        input[type="number"] {
            width: 100px;
        }
        button {
            margin-top: 10px;
            padding: 10px 15px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Генератор паролей</h1>
        <p>Укажите длину пароля:</p>
        <input type="number" id="password-length" min="4" max="32" value="8">
        <button onclick="generatePassword()">Сгенерировать</button>
        <h2>Ваш пароль:</h2>
        <p id="generated-password" style="font-size: 1.2em;"></p>
    </div>

    <script>
        function generatePassword() {
            const length = document.getElementById('password-length').value;
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
            let password = '';
            
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * characters.length);
                password += characters[randomIndex];
            }
            
            document.getElementById('generated-password').textContent = password;
        }
    </script>
</body>
</html>
