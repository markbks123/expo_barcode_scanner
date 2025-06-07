import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

const scanBoxSize = width * 0.65;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  overlay: { ...StyleSheet.absoluteFillObject, justifyContent: 'center', alignItems: 'center' },
  scanBox: {
    width: scanBoxSize,
    height: scanBoxSize,
    borderColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    position: 'relative',
  },
  cornerTopLeft: {
    position: 'absolute', top: -2, left: -2, width: 30, height: 30,
    borderTopWidth: 3, borderLeftWidth: 3, borderColor: '#00FFAA',
  },
  cornerTopRight: {
    position: 'absolute', top: -2, right: -2, width: 30, height: 30,
    borderTopWidth: 3, borderRightWidth: 3, borderColor: '#00FFAA',
  },
  cornerBottomLeft: {
    position: 'absolute', bottom: -2, left: -2, width: 30, height: 30,
    borderBottomWidth: 3, borderLeftWidth: 3, borderColor: '#00FFAA',
  },
  cornerBottomRight: {
    position: 'absolute', bottom: -2, right: -2, width: 30, height: 30,
    borderBottomWidth: 3, borderRightWidth: 3, borderColor: '#00FFAA',
  },
  button: {
    position: 'absolute', backgroundColor: 'rgba(0,0,0,0.4)', padding: 10, borderRadius: 20,
  },
});


export default styles