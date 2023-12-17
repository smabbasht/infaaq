import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class LoginScreen extends StatefulWidget {
  @override
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final TextEditingController _emailController = TextEditingController();
  final TextEditingController _passwordController = TextEditingController();

  Future<void> handleSubmit() async {
    final email = _emailController.text;
    final password = _passwordController.text;

    try {
      final response = await http.get(
        Uri.parse("http://localhost:8000/users/login"),
      );

      if (response.statusCode == 200) {
        final List<dynamic> users = json.decode(response.body);

        final userExists = users.any((user) => user['email'] == email && user['password'] == password);

        if (userExists) {
          Navigator.pushNamed(context, '/events-page');
        } else {
          // Show an error message
          showDialog(
            context: context,
            builder: (ctx) => AlertDialog(
              title: Text('Login Failed'),
              content: Text('Incorrect email or password.'),
              actions: <Widget>[
                TextButton(
                  child: Text('Okay'),
                  onPressed: () {
                    Navigator.of(ctx).pop();
                  },
                ),
              ],
            ),
          );
        }
      } else {
        throw Exception('Failed to fetch user data');
      }
    } catch (error) {
      print('There was an error: $error');
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Log In'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            TextFormField(
              controller: _emailController,
              keyboardType: TextInputType.emailAddress,
              decoration: InputDecoration(
                labelText: 'Your Email',
                border: OutlineInputBorder(),
              ),
            ),
            SizedBox(height: 16),
            TextFormField(
              controller: _passwordController,
              obscureText: true,
              decoration: InputDecoration(
                labelText: 'Password',
                border: OutlineInputBorder(),
                suffixIcon: Icon(Icons.visibility_off),
              ),
            ),
            SizedBox(height: 24),
            ElevatedButton(
              child: Text('Log In'),
              style: ElevatedButton.styleFrom(
                primary: Colors.orange,
                onPrimary: Colors.white,
                padding: EdgeInsets.symmetric(vertical: 12),
                minimumSize: Size(double.infinity, 36),
              ),
              onPressed: handleSubmit,
            ),
            // ... other buttons
          ],
        ),
      ),
    );
  }
}

