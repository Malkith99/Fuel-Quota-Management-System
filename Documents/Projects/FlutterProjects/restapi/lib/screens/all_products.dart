

import 'package:flutter/material.dart';
import 'package:restapi/api/api_service.dart';
import 'package:restapi/models/product_model.dart';
import 'package:restapi/screens/create_product.dart';
import 'package:restapi/screens/single_product.dart';

class AllFuelQuotasPage extends StatefulWidget {
  @override
  _AllFuelQuotasPageState createState() => _AllFuelQuotasPageState();
}

class _AllFuelQuotasPageState extends State<AllFuelQuotasPage> {
  final ApiService apiService = ApiService();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("All Fuel Quotas"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(10),
        child: FutureBuilder<List<FuelQuota>>(
          future: apiService.fetchAllFuelQuotas(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return const Center(child: CircularProgressIndicator());
            } else if (snapshot.hasError) {
              return Center(child: Text("Error: ${snapshot.error}"));
            } else if (!snapshot.hasData || snapshot.data!.isEmpty) {
              return const Center(child: Text("No fuel quotas found"));
            } else {
              return ListView.builder(
                itemCount: snapshot.data!.length,
                itemBuilder: (context, index) {
                  FuelQuota fuelQuota = snapshot.data![index];
                  return Container(
                    margin: const EdgeInsets.only(bottom: 10),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(5.0),
                      color: Colors.grey[200],
                    ),
                    child: ListTile(
                      title: Text("Station ID: ${fuelQuota.stationId}"),
                      subtitle: Text("Used Quota: ${fuelQuota.usedQuota}"),
                      trailing: Text("ID: ${fuelQuota.id}"),
                      onTap: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(
                            builder: (context) => FuelQuotaPage(fuelQuotaId: fuelQuota.id.toString()),
                          ),
                        );
                      },
                    ),
                  );
                },
              );
            }
          },
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          Navigator.push(
            context,
            MaterialPageRoute(
              builder: (context) => AddFuelQuotaPage(),
            ),
          );
        },
        child: const Icon(Icons.add),
      ),
    );
  }
}
