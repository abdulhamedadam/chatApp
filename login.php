<?php
session_start();
if(isset($_SESSION['unique_id']))
{
    header("location: users.php");
}
?>

<?php
include_once "header.php";
?>
<body>

    <div class="wrapper">
        <section class="form login">
            <header>RealTime Chat App| Login</header>
            <form action="#">
                <div class="error-txt"></div>
                    <div class="field input">
                        <label for="">Email Address</label>
                        <input type="text" name="email" placeholder="Enter your email">
                    </div>
                    <div class="field input">
                        <label for="">Password</label>
                        <input type="password" name="password" placeholder="password">
                        <i class="fas fa-eye"></i>
                    </div>

                    <div class="field button">
                        <input type="submit" value="Continue to chat">
                    </div>
           
            </form>
            <div class="link">Not Yet singed up? <a href="index.php">signUp Now</a></div>

        </section>
    </div>
    <script src="Javascript/pass-show-hide.js"></script>
    <script src="Javascript/login.js"></script>
    
</body>
</html>