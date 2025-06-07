import { View, Text, Image, StyleSheet } from "react-native";

const ScanResult = ({ route }: any) => {
  const scannedData = route?.params?.scannedData ?? null;
  const type = route?.params?.type ?? null;

  if (!scannedData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No scanned data available.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Scan Result</Text>
        {type === "image" ? (
          <Image
            source={{ uri: scannedData }}
            style={styles.image}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.dataText}>{scannedData}</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 24,
    width: "100%",
    maxWidth: 350,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 16,
    color: "#333",
  },
  dataText: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginBottom: 8,
  },
  errorText: {
    fontSize: 18,
    color: "red",
  },
});

export default ScanResult;
