import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Donor Events App',
      theme: ThemeData(
        primarySwatch: Colors.orange,
      ),
      home: DonorEventsScreen(),
    );
  }
}

class Event {
  final String date;
  final String title;

  Event({required this.date, required this.title});
}

class DonorEventsScreen extends StatelessWidget {
  final List<Event> events = [
    Event(date: '23/09/2023', title: 'Visiting Dar-ul-Sukoon Orphanage for charity'),
    Event(date: '25/09/2023', title: 'Visiting Edhi Old Age Home for Monthly Medicine Supply'),
    Event(date: '28/09/2023', title: 'Visiting Civil Hospital for charity event'),
    // Add more events here
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Infaaq'),
        backgroundColor: Colors.orange,
      ),
      body: ListView.builder(
        itemCount: events.length,
        itemBuilder: (context, index) {
          Event event = events[index];
          return Card(
            color: Colors.orange[50],
            margin: EdgeInsets.all(8),
            child: ListTile(
              title: Text(
                event.title,
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                ),
              ),
              subtitle: Text(event.date),
              trailing: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  primary: Colors.orange,
                ),
                child: Text('Donate'),
                onPressed: () {
                  // Implement donation logic
                },
              ),
            ),
          );
        },
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.event),
            label: 'Events',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.handshake),
            label: 'Apply as Volunteer',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.info_outline),
            label: 'About App',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.exit_to_app),
            label: 'Sign Out',
          ),
        ],
        selectedItemColor: Colors.orange,
        // Set the current index for the bottom navigation
        // currentIndex: _selectedIndex,
        // onTap: _onItemTapped,
      ),
    );
  }
}
