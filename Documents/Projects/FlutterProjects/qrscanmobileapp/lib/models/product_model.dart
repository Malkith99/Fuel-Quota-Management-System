class FuelQuota {
  String id;
  int usedQuota;
  String stationId;
  String timeStamp;
 
  FuelQuota({
    required this.id,
    required this.usedQuota,
    required this.stationId,
    required this.timeStamp,
  });

  // Factory method to create a FuelQuota object from a JSON map
  factory FuelQuota.fromJson(Map<String, dynamic> json) {
    return FuelQuota(
      id: json['id'],
      usedQuota: json['usedQuota'],
      stationId: json['stationId'],
      timeStamp: json['timeStamp'],
    );
  }

  // Method to convert FuelQuota object into a JSON map
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'usedQuota': usedQuota,
      'stationId': stationId,
      'timeStamp': timeStamp,
    };
  }
}
