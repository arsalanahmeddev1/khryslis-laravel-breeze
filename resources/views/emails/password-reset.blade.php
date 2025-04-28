<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Reset Your Password</title>
</head>

<body style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 30px;">
    <div class="logo" style="display: flex; justify-content: center;">
        <img src="{{ asset('images/logo.png') }}" alt="Logo" style="max-width: 250px">
    </div>
    <div style="background: #fff; padding: 20px; border-radius: 8px; max-width: 500px; margin: auto;">
        <h2>Hello {{ $user->name ?? 'User' }},</h2>
        <p>You requested to reset your password. Click the button below to continue:</p>
        <a href="{{ $url }}"
            style="display:inline-block; background-color: #5213AA; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
            Reset Password
        </a>
        <p>This link will expire in 60 minutes.</p>
        <p>If you didn’t request a password reset, no further action is required.</p>
        <p>Thanks,<br>{{ config('app.name') }}</p>
    </div>
</body>

</html>
