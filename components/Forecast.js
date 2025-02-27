import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const Forecast = ({ forecast }) => {
  return (
    <ScrollView horizontal style={styles.scrollContainer}>
      {forecast.list.map((item, index) => (
        <View key={index} style={styles.forecastItem}>
          <Text>{new Date(item.dt * 1000).toLocaleDateString()}</Text>
          <Text>{new Date(item.dt * 1000).toLocaleTimeString()}</Text>
          <Text>{item.main.temp}°C</Text>
          <Image
            style={styles.icon}
            source={{ uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png` }}
          />
          <Text>{item.weather[0].description}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginVertical: 20,
  },
  forecastItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default Forecast;