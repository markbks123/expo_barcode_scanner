import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
} from "react-native";
import QRCode from "react-native-qrcode-svg";
import WheelColorPicker from "react-native-wheel-color-picker";
import useGenarater from "./genarater.hooks";
import styles from "./genarater.module";

const Generator = () => {
  const {
    text,
    qrColor,
    logoUri,
    qrRef,
    bgColor,
    scrollEnabled,
    handleShare,
    handlePickLogo,
    setQrColor,
    setText,
    setLogoUri,
    setScrollEnabled
  } = useGenarater();
  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView
            contentContainerStyle={styles.container}
            scrollEnabled={scrollEnabled}
          >
            <Text style={styles.title}>🎨 Create QR Code</Text>

            <Text style={styles.label}>Text or Link:</Text>
            <TextInput
              style={styles.input}
              placeholder="กรอกข้อมูลที่ต้องการสร้าง QR"
              value={text}
              onChangeText={setText}
              placeholderTextColor="#999"
            />

            <Text style={styles.label}>QR Code Create:</Text>
            <View style={[styles.qrBox, { backgroundColor: bgColor }]}>
              <QRCode
                value={text || " "}
                size={230}
                getRef={(c) => (qrRef.current = c)}
                {...(logoUri
                  ? {
                      logo: { uri: logoUri },
                      logoSize: 50,
                      logoBackgroundColor: "#ffffff",
                      logoMargin: 4,
                    }
                  : {})}
                color={qrColor}
                backgroundColor={bgColor}
              />
            </View>

            {logoUri && (
              <View style={styles.logoPreview}>
                <Text style={styles.label}>Logo Select:</Text>
                <Image source={{ uri: logoUri }} style={styles.logoImage} />
                <TouchableOpacity
                  onPress={() => setLogoUri(null)}
                  style={styles.removeLogoBtn}
                >
                  <Text style={{ color: "#fff" }}>🗑️ Delete</Text>
                </TouchableOpacity>
              </View>
            )}
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={styles.logoButton}
                onPress={handlePickLogo}
              >
                <Text style={styles.logoText}>Seclect Logo</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.shareButton}
                onPress={handleShare}
              >
                <Text style={styles.shareText}>share QR Code</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.pickerWrapperContainer}>
              <View style={styles.pickerWrapper}>
                <Text style={styles.label}>
                  Choose your QR code line color:
                </Text>
                <View
                  onTouchStart={() => setScrollEnabled(false)}
                  onTouchEnd={() => setScrollEnabled(true)}
                >
                  <WheelColorPicker
                    color={qrColor}
                    onColorChangeComplete={setQrColor}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Generator;
