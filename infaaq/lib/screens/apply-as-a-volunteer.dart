import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Volunteer Application',
      theme: ThemeData(
        primarySwatch: Colors.orange,
      ),
      home: VolunteerApplicationForm(),
    );
  }
}

class VolunteerApplicationForm extends StatefulWidget {
  @override
  _VolunteerApplicationFormState createState() => _VolunteerApplicationFormState();
}

class _VolunteerApplicationFormState extends State<VolunteerApplicationForm> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  String? firstName, lastName, address, profession, institution;
  DateTime? startDate, endDate;

  // You can create controllers for the text fields to manage the form data

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Apply as Volunteer'),
        backgroundColor: Colors.orange,
      ), body: Form(
        key: _formKey,
        child: SingleChildScrollView(
          padding: EdgeInsets.all(16),
          child: Column(
            children: <Widget>[
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'First Name',
                  border: OutlineInputBorder(),
                ),
                onSaved: (value) => firstName = value,
              ),
              SizedBox(height: 16),
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Last Name',
                  border: OutlineInputBorder(),
                ),
                onSaved: (value) => lastName = value,
              ),
              SizedBox(height: 16),
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Address',
                  border: OutlineInputBorder(),
                ),
                onSaved: (value) => address = value,
              ),
              SizedBox(height: 16),
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Profession',
                  border: OutlineInputBorder(),
                ),
                onSaved: (value) => profession = value,
              ),
              SizedBox(height: 16),
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Institution where you want to volunteer',
                  border: OutlineInputBorder(),
                ),
                onSaved: (value) => institution = value,
              ),
              SizedBox(height: 16),
              Row(
                children: <Widget>[
                  Expanded(
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'Start Date',
                        border: OutlineInputBorder(),
                      ),
                      onTap: () async {
                        // Prevent the keyboard from showing as we are interested in the date only
                        FocusScope.of(context).requestFocus(new FocusNode());
                        startDate = await showDatePicker(
                          context: context,
                          initialDate: DateTime.now(),
                          firstDate: DateTime(2000),
                          lastDate: DateTime(2100),
                        );
                      },
                    ),
                  ),
                  SizedBox(width: 16),
                  Expanded(
                    child: TextFormField(
                      decoration: InputDecoration(
                        labelText: 'End Date',
                        border: OutlineInputBorder(),
                      ),
                      onTap: () async {
                        FocusScope.of(context).requestFocus(new FocusNode());
                        endDate = await showDatePicker(
                          context: context,
                          initialDate: DateTime.now(),
                          firstDate: DateTime(2000),
                          lastDate: DateTime(2100),
                        );
                      },
                    ),
                  ),
                ],
              ),
              SizedBox(height: 24),
              ElevatedButton(
                onPressed: () {
                  // Implement the logic to submit the form
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                  Navigator.pop(context);
                    // Now you can use the form data to apply as a volunteer
                  }
                },
                child: Text('Submit Application'),
                style: ElevatedButton.styleFrom(
                  primary: Colors.orange,
                  onPrimary: Colors.white,
                ),
              ),
            ],
          ),
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: 'Home',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.chat),
            label: 'Chats',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.event),
            label: 'Events',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.monetization_on),
            label: 'Donations',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person_add),
            label: 'Apply as Volunteer',
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
