import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const InteractiveCalendarScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📅 Academic Calendar</Text>
      <View style={styles.eventContainer}>
        <Text style={styles.eventTitle}>📖 Calendar feature is currently disabled.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  eventContainer: {
    alignItems: 'center',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#aaa',
    fontStyle: 'italic',
  },
});

export default InteractiveCalendarScreen;
