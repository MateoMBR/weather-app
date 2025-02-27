import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CurrentWeather = ({ weather }) => {
  return (
    <View style={styles.container}>
      <Text>Ville: {weather.name}</Text>
      <Text>Température: {weather.main.temp}°C</Text>
      <Text>Description: {weather.weather[0].description}</Text>
      <Image
        style={{ width: 50, height: 50 }}
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
});

export default CurrentWeather;