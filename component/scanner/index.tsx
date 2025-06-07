import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CameraView } from 'expo-camera';
import styles from '../scanner/scanner.module';
import useScanner from './scanner.hooks';

const Scanner = ({ navigation }: any) => {
  const {
    hasPermission,
    scanned,
    facing,
    handleBarCodeScanned
  } = useScanner({ navigation });

  if (hasPermission === null) return <Text>Requesting camera permission...</Text>;
  if (hasPermission === false) return <Text>Unable to access the camera</Text>;

  return (
    <View style={styles.container}>
      <CameraView
        style={StyleSheet.absoluteFillObject}
        facing={facing}
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
      >
        <View style={styles.overlay}>
          <View style={styles.scanBox}>
            {['TopLeft', 'TopRight', 'BottomLeft', 'BottomRight'].map((corner) => (
              <View key={corner} style={styles[`corner${corner}` as keyof typeof styles]} />
            ))}
          </View>
        </View>
      </CameraView>
    </View>
  );
};

export default Scanner;
