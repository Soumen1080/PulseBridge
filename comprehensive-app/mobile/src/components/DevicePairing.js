import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import BluetoothManager from 'react-native-bluetooth-manager'; // Hypothetical Bluetooth manager

const DevicePairing = () => {
  const [pairedDevice, setPairedDevice] = useState(null);

  const onSuccess = (e) => {
    // Handle QR code scanning success
    setPairedDevice(e.data);
    // Add logic to pair device using the scanned data
  };

  const pairWithBluetooth = () => {
    // Logic to initiate Bluetooth pairing
    BluetoothManager.startPairing()
      .then(device => setPairedDevice(device))
      .catch(error => console.error('Bluetooth pairing failed', error));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Device Pairing</Text>
      {pairedDevice ? (
        <Text style={styles.pairedText}>Paired with: {pairedDevice}</Text>
      ) : (
        <QRCodeScanner
          onRead={onSuccess}
          topContent={<Text>Scan the QR code to pair with a device</Text>}
          bottomContent={
            <Button title="Pair via Bluetooth" onPress={pairWithBluetooth} />
          }
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  pairedText: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default DevicePairing;