import { useState, useRef } from "react";
import QRCodeType from "react-native-qrcode-svg";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import * as ImagePicker from "expo-image-picker";
const  useGenarater = () =>{

    const [text, setText] = useState("https://example.com");
    const [qrColor, setQrColor] = useState("#000000");
    const [bgColor, setBgColor] = useState("#ffffff");
    const [logoUri, setLogoUri] = useState<string | null>(null);
    const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);
    const qrRef = useRef<QRCodeType | null>(null);
    const QR_SIZE = 230;
    const LOGO_SIZE = QR_SIZE * 0.15;
    

    const handlePickLogo = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
    
        if (!result.canceled) {
          setLogoUri(result.assets[0].uri);
        }
      };
    
      const handleShare = () => {
        (qrRef.current as any)?.toDataURL(async (dataURL: string) => {
          const base64Image = `data:image/png;base64,${dataURL}`; // ตรงนี้เพิ่ม prefix ชัดๆ
          const filePath = FileSystem.cacheDirectory + "qr.png";
      
          await FileSystem.writeAsStringAsync(filePath, dataURL, {
            encoding: FileSystem.EncodingType.Base64,
          });
      
          await Sharing.shareAsync(filePath, {
            mimeType: 'image/png', // บอกว่าไฟล์นี้เป็น PNG
            dialogTitle: 'Share your QR Code',
          });
        });
      };


      return {
        text,
        qrColor,
        logoUri,
        qrRef,
        bgColor,
        scrollEnabled,
        QR_SIZE,
        LOGO_SIZE,
        setLogoUri,
        setQrColor,
        setText,
        handleShare ,
        handlePickLogo ,
        setScrollEnabled

      }
}

export default useGenarater 