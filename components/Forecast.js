import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Forecast = ({ forecast }) => {
  return (
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
  );
};

const styles = StyleSheet.create({
  forecastItem: {
    marginVertical: 10,
    alignItems: 'center',
  },
});

export default Forecast;