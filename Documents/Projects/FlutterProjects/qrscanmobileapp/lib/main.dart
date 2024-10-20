


import 'package:flutter/material.dart';
import 'package:qrscanmobileapp/screens/QRScanPage.dart';

void main() {
  runApp(
    const MaterialApp(
      title: 'Fuel Quota Scanner',
      home: MyHome(),
    ),
  );
}

class MyHome extends StatelessWidget {
  const MyHome({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Fuel Quota Scanner')),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate to QRScanPage when the button is pressed
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const QRScanPage()),
            );
          },
          child: const Text('Open QR Scanner'),
        ),
      ),
    );
  }
}


