<?php

require_once 'config.php';
session_start();
if (isset($_SESSION["loggedin"]) && $_SESSION["loggedin"] == true) {
    header("location: restricted.php");
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST['action'] == 'register') {

        // Check if user with same name already exists
        $stmt = $db->prepare("SELECT * FROM user WHERE meno=:name");
        $stmt->bindParam(':name', $_POST['name']);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user) {
            // User already exists, show error message or redirect to registration page
            echo '
            <script>
                document.addEventListener("DOMContentLoaded", function() {
                    document.getElementById("alertNameReg").style.visibility = "visible";
                    document.getElementById("regLink").click();
                });
            </script>';
        } else {
            // Insert new user record
            $sql = "INSERT INTO user (meno, heslo, test_count) VALUES (:name, :password,:test_count)";

            $name = $_POST['name'];
            $password = $_POST['password'];
            $test_count = 0;

            // Hash the password
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);

            // Bind parameters to SQL
            $stmt = $db->prepare($sql);
            $stmt->bindParam(":name", $name, PDO::PARAM_STR);
            $stmt->bindParam(":password", $hashed_password, PDO::PARAM_STR);
            $stmt->bindParam(":test_count", $test_count, PDO::PARAM_STR);

            $stmt->execute();
            echo '<script>alert("Registrácia prebehla úspešne, môžeš sa teraz prihlásiť!");</script>';

        }
    } elseif ($_POST['action'] == 'login') {

        $username = $_POST["username"];
        $password = $_POST["password"];

        $stmt = $db->prepare("SELECT * FROM user WHERE meno=:username");
        $stmt->bindParam(':username', $username);
        $stmt->execute();

        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($user) {
            if (password_verify($password, $user['heslo'])) {
                $_SESSION["loggedin"] = true;
                $_SESSION["id"] = $user["id"];
                $_SESSION["username"] = $username;
                header("location: restricted.php");
            } else {
                echo '
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("alertName").style.visibility = "visible";
        });
    </script>';
            }
        } else {
            echo '
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            document.getElementById("alertName").style.visibility = "visible";
        });
    </script>';
        }
    }
}
?>


<!DOCTYPE html>
<html lang="sk">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />

    <link rel="stylesheet" href="styles.css">
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>

    <link rel="icon" type="image/png" href="../images/fav.png">
    <title>Otestuj sa !</title>
</head>

<body>
    <header>
        <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: rgb(77, 82, 81);">
            <div class="container-fluid">
                <a class="navbar-brand pad" style="padding: 0.5rem 0;" href="#">
                    <svg style="margin: 6px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-calculator" viewBox="0 0 16 16">
                        <path
                            d="M12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z" />
                        <path
                            d="M4 2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-2zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm3-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm0 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-4z" />
                    </svg>
                    Otestuj sa !</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link home"
                                style=" color: white; background-color: #504e4e; border-radius: 4px;"
                                href=" ../landingPage/index.html">
                                <svg style=" margin-right: 2px; margin-bottom: 4px;" xmlns="http://www.w3.org/2000/svg"
                                    width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                    <path
                                        d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z" />
                                </svg>
                                Domov
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main style="width: 80%; margin: auto;">
    <div style="text-align: center; margin-top: 2rem;">
       <h3 style="color:darkblue">Otestuj si svoje vedomosti v TESTE.</h3>
    <p>Pre prístup do testu sa musíš prihlásiť !</p> 
    </div>
    
    
        <!-- Login form -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

        <form id="loginForm" class="p-4 border rounded" method="POST" action="/BP2023/test/">
            <h2 class="mb-4">Prihlásiť sa</h2>
            <div class="form-group">
                <label for="username">Meno:</label>
                <input type="text" class="form-control" id="username" name="username" required>
            </div>

            <div class="form-group mt-2">
                <label for="password">Heslo:</label>
                <input type="password" class="form-control" id="password" name="password" required>
            </div>
            <input type="hidden" name="action" value="login">

            <p class="text-center" id="alertName" style="color:red">Nesprávne meno alebo heslo!</p>
            <div class="d-flex justify-content-center mt-4">
                <button type="submit" class="btn btn-primary">Prihlásiť sa</button>
            </div>

            <p class="text-center mt-3">
                <small>Ak ešte nemáš účet <a id=regLink href="#" data-toggle="modal" data-target="#registrationModal">zaregistruj
                        sa tu.</a> </small>
            </p>
        </form>

        <!-- Add the Bootstrap JavaScript library -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>

        <!-- Registration modal -->
        <div class="modal fade" id="registrationModal" tabindex="-1" role="dialog"
    aria-labelledby="registrationModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="registrationModalLabel">Registrácia</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form method="POST" action="/BP2023/test/">
                    <div class="form-group">
                        <label for="name">Meno:</label>
                        <input type="text" class="form-control" id="name" name="name" required>
                    </div>

                    <div class="form-group">
                        <label for="password">Heslo:</label>
                        <input type="password" class="form-control" id="password1" name="password" required>
                    </div>
                    <p class="text-center" id="alertNameReg" style="color:red">Používateľ s rovnakým menom už existuje, zvol si iné meno!</p>
                    <input type="hidden" name="action" value="register">
                    <button type="submit" class="btn btn-primary btn-block mt-4">Registrovať sa</button>
                </form>
            </div>
        </div>
    </div>
</div>





    </main>
    <footer class="fixed-bottom text-center text-lg-start bg-light" style="height: 4rem;">
  <div class="container">
    <p class="text-center mb-0 py-1">© 2023 Copyright: Marek Belis</p>
  </div>
</footer>
    <!-- Popper.js library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
        integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
        <script defer>
    $('#alertName').css('visibility', 'hidden');
  $('#alertNameReg').css('visibility', 'hidden');
</script>

</body>

</html>

