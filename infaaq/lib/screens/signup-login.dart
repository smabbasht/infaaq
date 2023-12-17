import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: OpeningScreen(),
    );
  }
}

class OpeningScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white, // Assuming the background is white
      body: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        crossAxisAlignment: CrossAxisAlignment.center,
        children: <Widget>[
          
          SizedBox(width: 1050), // Spacing between top of screen and text
          Text(
            'Infaaq',
            style: TextStyle(
              color: Colors.black, // Assuming the text is black
              fontSize: 48, // Adjust the font size as needed
              fontWeight: FontWeight.bold,
            ),
          ),
          SizedBox(height: 50), // Spacing between text and buttons
          ElevatedButton(
            child: Text('Sign up'),
            onPressed: () {
              // Define what happens when the button is tapped
              Navigator.pushNamed(context, '/signup');
            },
            style: ElevatedButton.styleFrom(
              primary: Colors.orange, // Background color for button
              onPrimary: Colors.white, // Text color for button
            ),
          ),
          SizedBox(height: 20), // Spacing between buttons
          OutlinedButton(
            child: Text('Log in'),
            onPressed: () {
              // Define what happens when the button is tapped
              Navigator.pushNamed(context, '/login');
            },
            style: OutlinedButton.styleFrom(
              primary: Colors.black, // Text color for button
              side: BorderSide(color: Colors.orange), // Border color for button
            ),
          ),
        ],
      ),
    );
  }
}
