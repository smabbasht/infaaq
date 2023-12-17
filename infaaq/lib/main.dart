import 'package:flutter/material.dart';
import 'screens/signup-login.dart'; // Assuming this is the OpeningScreen
import 'screens/apply-as-a-volunteer.dart';
// import 'screens/events-catalog-admin.dart';
// import 'screens/events-catalog-donor.dart';
// import 'screens/events-catalog-volunteer.dart';
import 'screens/events-page.dart';
import 'screens/login.dart';
import 'screens/signup.dart';

//disabled debug banner
void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});


  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Infaaq app',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.orange),
        useMaterial3: true,
      ),
      debugShowCheckedModeBanner: false,
      // Set OpeningScreen as the initial route
      initialRoute: '/signup-login', // Make sure this matches the route name for OpeningScreen
      routes: {
        // Register all the routes
        '/signup-login': (context) => OpeningScreen(), // Assuming this is the OpeningScreen
        '/apply-as-a-volunteer': (context) => VolunteerApplicationForm(),
        // 'create-event': (context) => CreateNewPostScreen(),
        // '/events-catalog-admin': (context) => EventsCatalogAdminScreen(),
        // '/events-catalog-donor': (context) => EventsCatalogDonorScreen(),
        // '/events-catalog-volunteer': (context) => (),
        '/events-page': (context) => EventDetailScreen(),
        '/login': (context) => LoginScreen(),
        '/signup': (context) => SignUpScreen(),
      },
      // Removed the home property as it's not needed when using initialRoute
    );
  }
}
