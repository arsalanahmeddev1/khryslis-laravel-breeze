<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Verify Your Email</title>
</head>
<body style="font-family: Arial, sans-serif; background: #f7f7f7; padding: 30px;">
    <div class="logo" style="display: flex; justify-content: center;">
        <img src="{{asset('images/logo.png')}}" alt="Logo" style="max-width: 250px">
    </div>
    <div style="background: #fff; padding: 20px; border-radius: 8px; max-width: 500px; margin: auto;">
        <h2>Hello, {{ $user->name ?? 'User' }}!</h2>
        <p>Thank you for registering! Please verify your email address by clicking the button below:</p>
        <p style="text-align: center;">
            <a href="{{ $url }}" style="background: #5213AA; color: white; padding: 10px 20px; border-radius: 5px; text-decoration: none;">Verify Email</a>
        </p>
        <p>If you did not create an account, no further action is required.</p>
        <br>
        <p style="font-size: 12px; color: #888;">Thanks and Regards,<br>Khryslis</p>
    </div>
</body>
</html>
