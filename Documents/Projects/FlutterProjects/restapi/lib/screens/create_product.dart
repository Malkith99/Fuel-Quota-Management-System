import 'package:flutter/material.dart';
import 'package:restapi/api/api_service.dart';
import 'package:restapi/models/product_model.dart';


class AddFuelQuotaPage extends StatefulWidget {
  @override
  _AddFuelQuotaPageState createState() => _AddFuelQuotaPageState();
}

class _AddFuelQuotaPageState extends State<AddFuelQuotaPage> {
  final ApiService apiService = ApiService();
  final _formKey = GlobalKey<FormState>();

  String id ="0";
  int usedQuota = 0;
  String stationId = '';
  String timeStamp = '';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Add Fuel Quota"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(labelText: 'ID'),
                keyboardType: TextInputType.number,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter an ID';
                  }
                  return null;
                },
                onSaved: (value) {
                  id = value!;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Used Quota'),
                keyboardType: TextInputType.number,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter the used quota';
                  }
                  return null;
                },
                onSaved: (value) {
                  usedQuota = int.parse(value!);
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Station ID'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter a station ID';
                  }
                  return null;
                },
                onSaved: (value) {
                  stationId = value!;
                },
              ),
              TextFormField(
                decoration: InputDecoration(labelText: 'Time Stamp'),
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter a time stamp';
                  }
                  return null;
                },
                onSaved: (value) {
                  timeStamp = value!;
                },
              ),
              const SizedBox(height: 16.0),
              ElevatedButton(
                onPressed: () {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    FuelQuota newFuelQuota = FuelQuota(
                      id: id,
                      usedQuota: usedQuota,
                      stationId: stationId,
                      timeStamp: timeStamp,
                    );
                    apiService.addFuelQuota(newFuelQuota).then((value) {
                      Navigator.pop(context);
                    });
                  }
                },
                child: const Text('Add Fuel Quota'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
