import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

//import { App } from "@/app/(tabs)/App.js"

//import { BleManager } from 'react-native-ble-plx';
//export const manager = new BleManager();

//import React from "react";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/qub3b.jpg')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">EggFinder</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="subtitle">EggTracker Companion App</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Data Feed</ThemedText>
        <ThemedText>
          Raw Data
        </ThemedText>
      </ThemedView>
      
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

//App();
/*
requestBluetoothPermission = async () => {
  if (Platform.OS === 'ios') {
    return true
  }
  if (Platform.OS === 'android' && PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION) {
    const apiLevel = parseInt(Platform.Version.toString(), 10)

    if (apiLevel < 31) {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
      return granted === PermissionsAndroid.RESULTS.GRANTED
    }
    if (PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN && PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT) {
      const result = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      ])

      return (
        result['android.permission.BLUETOOTH_CONNECT'] === PermissionsAndroid.RESULTS.GRANTED &&
        result['android.permission.BLUETOOTH_SCAN'] === PermissionsAndroid.RESULTS.GRANTED &&
        result['android.permission.ACCESS_FINE_LOCATION'] === PermissionsAndroid.RESULTS.GRANTED
      )
    }
  }

  this.showErrorToast('Permission have not been granted')

  return false
}

React.useEffect(() => { 

  const stateChangeListener = manager.onStateChange(state => { 
  
  console.log('onStateChange: ', state); 
  
  if (state === State.PoweredOn) { 
  
  scan();
  
  } 
  
  }); 
  
  return () => { 
  
  stateChangeListener?.remove(); 
  
  }; 
  
  }, [manager]); 

  React.useEffect(() => { 

    let locationSubscription: EmitterSubscription | null = null; 
    
    const addLocationListener = async () => { 
    
    try { 
    
    const subscription = await SystemSetting.addLocationListener(data => { 
    
    console.log('Location: ', data); 
    
    setIsLocationOn(data); 
    
    }); 
    
    locationSubscription = subscription; 
    
    } catch (error) { 
    
    console.error('Error adding location listener:', error); 
    
    } 
    
    }; 
    addLocationListener(); 
    
    const stopLocationListener = () => { 
    
    if (locationSubscription) { 
    
    console.log('Listener stoped'); 
    
    locationSubscription.remove(); 
    
    locationSubscription = null; 
    
    } 
    
    }; 
    
    return () => { 
    
    stopLocationListener(); 
    
    }; 
    
    }, [isLocationOn]); 

    function scan () { 
      manager.startDeviceScan(null, null, (error, device) => { 
        if (error) { 
          // Handle error (scanning will be stopped automatically) 
          return 
        } 
     
        // Check if it is a device, you are looking for based on advertisement data 
        // or other criteria. 
        if (device.name === 'TI BLE Sensor Tag' || device.name === 'SensorTag') { 
          // Stop scanning as it's not necessary if you are scanning for one device. 
    
          connect() 
          manager.stopDeviceScan() 
     
          // Proceed with connection. 
        } 
      }) 
    } 

    */