<?php
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// create a new PHPMailer object
$mail = new PHPMailer(true);


// Set the SMTP host, port, and authentication settings
$mail->isSMTP();
$mail->Host = 'smtp.elasticemail.com';
$mail->Port = 2525;
$mail->SMTPAuth = true;
$mail->Username = 'evpa.vergara.swu@phinmaed.com';
$mail->Password = 'EB5FF23C92DBCB8C9E947D97DB11BA770443';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = strip_tags(trim($_POST["name"]));
  $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
  $message = strip_tags(trim($_POST["message"]));

  // Check that data was sent
  if (empty($name) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo "Oops! There was a problem with your submission. Please complete the form and try again.";
    exit;
  }

  // Set the recipient email address
  $recipient = "evpa.vergara.swu@phinmaed.com";

  // Set the email subject
  $subject = "Inquiry from $name";

  // Build the email content
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n\n";
  $email_content .= "Message:\n$message\n";

  // Build the email headers
  $mail->SetFrom($email, $name);
  $mail->AddAddress($recipient);
  $mail->Subject = $subject;
  $mail->Body = $email_content;

  // Send the email
  if ($mail->Send()) {
    http_response_code(200);
    echo "Thank You! Your message has been sent.";
  } else {
    http_response_code(500);
    echo "Oops! Something went wrong and we couldn't send your message.";
  }
} else {
  http_response_code(403);
  echo "There was a problem with your submission, please try again.";
}
?>
