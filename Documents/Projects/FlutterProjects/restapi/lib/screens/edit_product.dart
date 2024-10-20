import 'package:flutter/material.dart';
import 'package:restapi/api/api_service.dart';
import 'package:restapi/models/product_model.dart';
import 'package:intl/intl.dart'; // For date formatting


class EditFuelQuotaPage extends StatefulWidget {
  final FuelQuota fuelQuota;

  EditFuelQuotaPage({required this.fuelQuota});

  @override
  _EditFuelQuotaPageState createState() => _EditFuelQuotaPageState();
}

class _EditFuelQuotaPageState extends State<EditFuelQuotaPage> {
  final ApiService apiService = ApiService();
  final _formKey = GlobalKey<FormState>();

  late String id;
  late int usedQuota;
  late String stationId;
  late String timeStamp;

  @override
  void initState() {
    super.initState();
    id = widget.fuelQuota.id;
    usedQuota = widget.fuelQuota.usedQuota;
    stationId = widget.fuelQuota.stationId;
    // timeStamp = widget.fuelQuota.timeStamp;
    timeStamp = DateFormat('yyyy-MM-dd kk:mm').format(DateTime.now()).toString();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Edit Fuel Quota"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                initialValue: id.toString(),
                decoration: const InputDecoration(labelText: 'ID'),
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
              const SizedBox(height: 16.0),
              TextFormField(
                initialValue: usedQuota.toString(),
                decoration: const InputDecoration(labelText: 'Used Quota'),
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
              const SizedBox(height: 16.0),
              TextFormField(
                initialValue: stationId,
                decoration: const InputDecoration(labelText: 'Station ID'),
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
              const SizedBox(height: 16.0),
              TextFormField(
                initialValue: timeStamp,
                decoration: const InputDecoration(labelText: 'Time Stamp'),
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
                onPressed: () async {

                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    FuelQuota updatedFuelQuota = FuelQuota(
                      id: id,
                      usedQuota: usedQuota,
                      stationId: stationId,
                      timeStamp: timeStamp,
                    );
                    try {
                      await apiService.updateFuelQuota(updatedFuelQuota); //widget.fuelQuota.id!, updatedFuelQuota
                      // Navigator.pop(context);
                      Navigator.pop(context, updatedFuelQuota);
                    } catch (error) {
                      print('Error updating fuel quota: $error');
                    }
                  }
                },
                child: const Text('Update Fuel Quota'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
