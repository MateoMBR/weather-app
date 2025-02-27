import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CurrentWeather = ({ weather }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.cityName}>{weather.name}</Text>
      <Text style={styles.temperature}>{weather.main.temp}°C</Text>
      <Text style={styles.description}>{weather.weather[0].description}</Text>
      <Image
        style={styles.icon}
        source={{ uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}.png` }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  cityName: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  temperature: {
    fontSize: 24,
  },
  description: {
    fontSize: 18,
    fontStyle: 'italic',
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default CurrentWeather;