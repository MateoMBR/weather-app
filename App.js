import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

const API_KEY = '7e8e2e58051fba9a97cdd779cb4910c6';

export default function App() {
  const [location, setLocation] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);

      const { latitude, longitude } = location.coords;
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`);
      setForecast(response.data);
    })();
  }, []);

  if (errorMsg) {
    return (
      <View style={styles.container}>
        <Text>{errorMsg}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  if (!forecast) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {forecast.list.map((item, index) => (
          <View key={index} style={styles.forecastItem}>
            <Text>{new Date(item.dt * 1000).toLocaleString()}</Text>
            <Text>Température: {item.main.temp}°C</Text>
            <Text>Description: {item.weather[0].description}</Text>
            <Image
              style={{ width: 50, height: 50 }}
              source={{ uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png` }}
            />
          </View>
        ))}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  forecastItem: {
    marginVertical: 10,
    alignItems: 'center',
  },
});