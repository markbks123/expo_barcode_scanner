import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    safe: {
      flex: 1,
      backgroundColor: "#f7f7f7",
    },
    container: {
      padding: 20,
      paddingBottom: 80,
      alignItems: "center",
    },
    title: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 24,
      color: "#333",
    },
    label: {
      fontSize: 16,
      color: "#444",
      marginBottom: 8,
      alignSelf: "flex-start",
    },
    input: {
      width: "100%",
      borderWidth: 1,
      borderColor: "#ccc",
      borderRadius: 12,
      paddingHorizontal: 16,
      paddingVertical: 12,
      backgroundColor: "#fff",
      fontSize: 16,
      marginBottom: 20,
    },
    qrBox: {
      padding: 24,
      borderRadius: 16,
      elevation: 4,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      marginBottom: 24,
    },
    pickerWrapper: {
      width: "100%",
      height: 180,
      marginBottom: 40,
    },
    logoButton: {
      backgroundColor: "#FFA500",
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
    },
    logoText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    logoPreview: {
      alignItems: "center",
      marginBottom: 16,
    },
    logoImage: {
      width: 60,
      height: 60,
      borderRadius: 8,
      marginBottom: 8,
    },
    removeLogoBtn: {
      backgroundColor: "#dc3545",
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
    },
    shareButton: {
      backgroundColor: "#1E90FF",
      paddingHorizontal: 12,
      paddingVertical: 8,
      borderRadius: 8,
      alignSelf: "center",
    },
    shareText: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600",
    },
    pickerWrapperContainer: {
      display: "flex",
       paddingTop:50,
      justifyContent: "space-between",
    },
    buttonContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 24,
      marginBottom: 24,
    },
  });

  export default  styles