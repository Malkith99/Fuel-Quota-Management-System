


import 'package:restapi/api/api_service.dart';
import 'package:restapi/models/product_model.dart';
import 'package:restapi/screens/edit_product.dart';
import 'package:flutter/material.dart';


class FuelQuotaPage extends StatefulWidget {
  final String fuelQuotaId;

  FuelQuotaPage({required this.fuelQuotaId});

  @override
  _FuelQuotaPageState createState() => _FuelQuotaPageState();
}

class _FuelQuotaPageState extends State<FuelQuotaPage> {
  final ApiService apiService = ApiService();
  FuelQuota? fuelQuota; // Store the current FuelQuota object

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Center(
          // Center the title
          child: Text(
            'Fuel Quota Details',
            style: TextStyle(
              fontWeight: FontWeight.bold, // Make the text bold
              color: Colors.white, // Set text color
            ),
          ),
        ),
        backgroundColor: Colors.teal, // Set a color for the AppBar
      ),
      body: SingleChildScrollView(
        child: fuelQuota == null
            ? FutureBuilder<FuelQuota>(
                future: apiService.fetchFuelQuota(widget.fuelQuotaId),
                builder: (context, snapshot) {
                  if (snapshot.connectionState == ConnectionState.waiting) {
                    return const Center(child: CircularProgressIndicator());
                  } else if (snapshot.hasError) {
                    return Center(child: Text("Error: ${snapshot.error}"));
                  } else if (!snapshot.hasData) {
                    return const Center(child: Text("Fuel Quota not found"));
                  } else {
                    fuelQuota = snapshot.data!;
                    return buildFuelQuotaDetails();
                  }
                },
              )
            : buildFuelQuotaDetails(), // If we already have the data, show it directly
      ),
    );
  }

  Widget buildFuelQuotaDetails() {
    return Padding(
      padding: const EdgeInsets.all(16.0),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const SizedBox(height: 16.0),
          Text('Used Quota: ${fuelQuota!.usedQuota}', style: const TextStyle(fontSize: 24.0)),
          const SizedBox(height: 8.0),
          Text('Station ID: ${fuelQuota!.stationId}', style: const TextStyle(fontSize: 20.0)),
          const SizedBox(height: 8.0),
          Text('Time Stamp: ${fuelQuota!.timeStamp}', style: const TextStyle(fontSize: 16.0)),
          const SizedBox(height: 16.0),
          ElevatedButton(
            onPressed: () async {
              final updatedFuelQuota = await Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => EditFuelQuotaPage(fuelQuota: fuelQuota!),
                ),
              );

              // Check if the updatedFuelQuota is not null (i.e., changes were made)
              if (updatedFuelQuota != null) {
                setState(() {
                  fuelQuota = updatedFuelQuota; // Update the fuelQuota with the new data
                });
              }
            },
            child: const Text("Edit"),
          ),
        ],
      ),
    );
  }
}


