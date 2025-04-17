// src/screens/HolidayListScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const holidays = [
  { date: '2025-01-01', name: 'New Year\'s Day 🎉' },
  { date: '2025-04-18', name: 'Good Friday ✝️' },
  { date: '2025-05-01', name: 'Labor Day 💪' },
  { date: '2025-06-21', name: 'Midsummer 🌞' },
  { date: '2025-12-24', name: 'Christmas Eve 🎄' },
  { date: '2025-12-25', name: 'Christmas Day 🎁' },
];

export default function HolidayListScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🎉 Upcoming Holidays</Text>
      {holidays.map((holiday, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.holidayName}>{holiday.name}</Text>
          <Text style={styles.holidayDate}>{holiday.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 100,
    backgroundColor: '#F1F5F9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A535C',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },
  holidayName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  holidayDate: {
    fontSize: 14,
    color: '#777',
    marginTop: 6,
  },
});
