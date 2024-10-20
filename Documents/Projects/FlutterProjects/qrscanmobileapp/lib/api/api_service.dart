import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:qrscanmobileapp/models/product_model.dart';

class ApiService {

 final String baseUrl = "http://10.0.2.2:8080/api/v1/fuelstation";

  Future<List<FuelQuota>> fetchAllFuelQuotas() async {
    final String url = "$baseUrl/getfuelquotas";  // Adjusted to the Spring Boot endpoint
    try {
      final response = await http.get(Uri.parse(url));

      if (response.statusCode == 200) {
        List<dynamic> responseData = json.decode(response.body);

        List<FuelQuota> fuelQuotas = responseData.map((json) {
          return FuelQuota.fromJson(json);
        }).toList();
        return fuelQuotas;
      } else {
        print("Failed to fetch fuel quotas. Status code: ${response.statusCode}");
        throw Exception("Failed to fetch fuel quotas");
      }
    } catch (e) {
      print("Error: $e");
      throw Exception("Failed to fetch fuel quotas");
    }
  }

  // Fetch a single fuel quota by ID from the API
  Future<FuelQuota> fetchFuelQuota(String id) async {
    final String url = "$baseUrl/getfuelquota/$id";  // Adjusted to the Spring Boot endpoint
    try {
      final response = await http.get(Uri.parse(url));

      if (response.statusCode == 200) {
        print("Succesfully fetching fuel quota");
        print("url: $url");
        print("Response body: ${response.body}");
        FuelQuota fuelQuota = FuelQuota.fromJson(json.decode(response.body));
        return fuelQuota;
      } else {
        print("Failed to fetch fuel quota. Status code: ${response.statusCode}");
        throw Exception("Failed to fetch fuel quota");
      }
    } catch (e) {
      print("Error: $e");
      throw Exception("Failed to fetch fuel quota");
    }
  }

  // Add a product to the API
  // Add a new fuel quota to the API
  Future<FuelQuota> addFuelQuota(FuelQuota fuelQuota) async {
    final String url = "$baseUrl/addfuelquota";  // Adjusted to the Spring Boot endpoint
    try {
      final response = await http.post(
        Uri.parse(url),
        headers: {"Content-Type": "application/json"},
        body: json.encode(fuelQuota.toJson()),
      );

      if (response.statusCode == 200 || response.statusCode == 201) {
        FuelQuota newFuelQuota = FuelQuota.fromJson(json.decode(response.body));
        return newFuelQuota;
      } else {
        print("Failed to add fuel quota. Status code: ${response.statusCode}");
        throw Exception("Failed to add fuel quota");
      }
    } catch (e) {
      print("Error: $e");
      throw Exception("Failed to add fuel quota");
    }
  }

  
 // Update an existing fuel quota in the API
  Future<FuelQuota> updateFuelQuota(FuelQuota fuelQuota) async {
    final String url = "$baseUrl/updatefuelquota";  // Adjusted to the Spring Boot endpoint
    try {
      final response = await http.put(
        Uri.parse(url),
        headers: {"Content-Type": "application/json"},
        body: json.encode(fuelQuota.toJson()),
      );

      if (response.statusCode == 200) {
        FuelQuota updatedFuelQuota = FuelQuota.fromJson(json.decode(response.body));
        return updatedFuelQuota;
      } else {
        print("Failed to update fuel quota. Status code: ${response.statusCode}");
        throw Exception("Failed to update fuel quota");
      }
    } catch (e) {
      print("Error: $e");
      throw Exception("Failed to update fuel quota");
    }
  }



  // Delete a fuel quota from the API (This method was not provided in your Spring Boot controller)
  Future<void> deleteFuelQuota(String id) async {
    final String url = "$baseUrl/deletefuelquota/$id";  // You can add a delete method to your controller
    try {
      final response = await http.delete(Uri.parse(url));

      if (response.statusCode != 200) {
        print("Failed to delete fuel quota. Status code: ${response.statusCode}");
        throw Exception("Failed to delete fuel quota");
      }
    } catch (e) {
      print("Error: $e");
      throw Exception("Failed to delete fuel quota");
    }
  }


}
