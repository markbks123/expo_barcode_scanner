import { Camera, CameraType,PermissionStatus, } from "expo-camera";
import { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import * as Linking from 'expo-linking';

const useScanner = ({ navigation }: any) =>{

    const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [scanned, setScanned] = useState(false);
  const [facing, setFacing] = useState<CameraType>('back');

  const handleBarCodeScanned = ({ data }: { data: string }) => {
    setScanned(true);

    if (data.startsWith('http://') || data.startsWith('https://')) {
      Linking.openURL(data);
      setTimeout(() => setScanned(false), 1000);
    } else {
      // ตรวจสอบว่าเป็น URL รูปภาพหรือไม่ (อย่างง่าย)
      const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif'];
      const isImageURL = imageExtensions.some(ext => data.toLowerCase().endsWith(ext));

      if (isImageURL) {
        navigation.navigate('ScanResult', { scannedData: data, type: 'image' });
      } else {
        // สันนิษฐานว่าเป็นข้อความ
        navigation.navigate('ScanResult', { scannedData: data, type: 'text' });
      }
      setScanned(false);
    }
  };

  useEffect(() => {
    const requestPermission = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    };

    requestPermission();
  }, []);


  return {
    hasPermission,
    scanned,
    facing,
    setFacing,
    handleBarCodeScanned
  }
}

export default useScanner