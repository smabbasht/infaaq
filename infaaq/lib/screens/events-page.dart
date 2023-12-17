import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

class EventDetailScreen extends StatefulWidget {
  @override
  _EventDetailScreenState createState() => _EventDetailScreenState();
}

class _EventDetailScreenState extends State<EventDetailScreen> {
  List<dynamic> events = [];

  @override
  void initState() {
    super.initState();
    fetchEvents();
  }

  Future<void> fetchEvents() async {
    try {
      final response = await http.get(Uri.parse("http://localhost:8000/events/api"));
      if (response.statusCode == 200) {
        setState(() {
          events = json.decode(response.body);
        });
      } else {
        throw Exception('Failed to load events');
      }
    } catch (e) {
      print(e.toString());
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Infaaq'),
        backgroundColor: Colors.orange,
      ),
      body: SingleChildScrollView(
        child: Column(
          children: events.map((event) => eventCard(event)).toList(),
        ),
      ),
      // bottomNavigationBar: BottomNavigationBar(
      //   // ... BottomNavigationBar items
      //   kBoottomNavigationBarItems,
      // ),
    );
  }

  Widget eventCard(dynamic event) {
    return Card(
      margin: EdgeInsets.all(8),
      child: Column(
        children: <Widget>[
          Image.network('https://picsum.photos/200/300'),
          ListTile(
            title: Text(event['title']),
            subtitle: Text(event['desc']),
          ),
          Padding(
            padding: EdgeInsets.all(16),
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: <Widget>[
                Text('Date: ${event['date']}'),
                Text('Time: ${event['time']}'),
              ],
            ),
          ),
          ElevatedButton(
            style: ElevatedButton.styleFrom(
              primary: Colors.orange,
              padding: EdgeInsets.symmetric(vertical: 12),
              minimumSize: Size(double.infinity, 36),
            ),
            child: Text('Volunteer'),
            onPressed: () {
              // Implement volunteer sign-up logic
              Navigator.pushNamed(context, '/apply-as-a-volunteer');
            },
          ),
        ],
      ),
    );
  }
}

