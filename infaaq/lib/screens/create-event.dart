// import 'package:flutter/material.dart';
// import 'package:http/http.dart' as http;
// import 'dart:convert';
//
// class CreateNewPostScreen extends StatefulWidget {
//   @override
//   _CreateNewPostScreenState createState() => _CreateNewPostScreenState();
// }
//
// class _CreateNewPostScreenState extends State<CreateNewPostScreen> {
//   final TextEditingController _titleController = TextEditingController();
//   final TextEditingController _descController = TextEditingController();
//   final TextEditingController _dateController = TextEditingController();
//   final TextEditingController _timeController = TextEditingController();
//   final TextEditingController _locationController = TextEditingController();
//   final TextEditingController _nAttendeesController = TextEditingController();
//   final TextEditingController _raisedPercentageController = TextEditingController();
//   final TextEditingController _contactController = TextEditingController();
//   // Image upload handling will require additional logic
//
//   Future<void> handleSubmit() async {
//     final Map<String, dynamic> eventData = {
//       'title': _titleController.text,
//       'desc': _descController.text,
//       'date': _dateController.text,
//       'time': _timeController.text,
//       'location': _locationController.text,
//       'n_attendees': int.tryParse(_nAttendeesController.text) ?? 0,
//       'raised_percentage': int.tryParse(_raisedPercentageController.text) ?? 0,
//       'contact': _contactController.text,
//       'image': 'http://localhost:8000/images/default.png', // Placeholder for image URL
//     };
//
//     try {
//       final response = await http.post(
//         Uri.parse("http://localhost:8000/events/api"),
//         headers: <String, String>{
//           'Content-Type': 'application/json; charset=UTF-8',
//         },
//         body: json.encode(eventData),
//       );
//
//       if (response.statusCode == 200 || response.statusCode == 201) {
//         // Handle a successful event creation
//         // For example, show a confirmation dialog or navigate to another screen
//       } else {
//         throw Exception('Failed to create event');
//       }
//     } catch (error) {
//       // Handle errors in event creation
//       print('Error creating event: $error');
//     }
//   }
//
//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Create a New Event'),
//         backgroundColor: Colors.orange,
//       ),
//       body: SingleChildScrollView(
//         padding: EdgeInsets.all(16),
//         child: Column(
//           crossAxisAlignment: CrossAxisAlignment.stretch,
//           children: <Widget>[
//             TextFormField(
//               controller: _titleController,
//               decoration: InputDecoration(
//                 labelText: 'Event Title',
//                 border: OutlineInputBorder(),
//               ),
//             ),
//             SizedBox(height: 16),
//             // Repeat for each field (description, date, time, etc.)
//             // ...
//
//             ElevatedButton(
//               child: Text('Create Event'),
//               style: ElevatedButton.styleFrom(
//                 primary: Colors.orange,
//                 onPrimary: Colors.white,
//                 padding: EdgeInsets.symmetric(vertical: 16),
//               ),
//               onPressed: handleSubmit,
//             ),
//           ],
//         ),
//       ),
//     );
//   }
// }
//
