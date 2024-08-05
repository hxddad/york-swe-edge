<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    $to = "haddad.yazan117@gmail.com";
    $subject = "York SWE Edge Feedback Submission";

 
    $email_message = "Name: " . $name . "\n";
    $email_message = "Email: " . $email . "\n\n";
    $email_message = "Message: \n" . $message . "\n";

    $headers = "From: " . $email;
    if (mail($to, $subject, $email_message, $headers)) {
        echo "Thank you for contacting me. I'll get back to you shortly.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
}
?>