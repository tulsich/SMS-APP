import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Holiday from '../models/Holiday';

export default function HolidayListScreen() {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    const data = [
      new Holiday('2025-04-19', 'Spring Festival', 'Celebrating the season of renewal.'),
      new Holiday('2025-05-01', 'Labour Day', 'Honoring workers and their contributions.'),
      new Holiday('2025-06-21', 'Midsummer Holiday', 'Traditional Finnish midsummer break.'),
    ];
    setHolidays(data);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.date}>📅 {item.getFormattedDate()}</Text>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.desc}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>🗓️ Holiday List</Text>
      <FlatList
        data={holidays}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fefce8' },
  heading: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#78350f', marginBottom: 20 },
  list: { paddingBottom: 50 },
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 14,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#fbbf24',
    elevation: 3,
  },
  date: { fontSize: 14, color: '#92400e', marginBottom: 5 },
  title: { fontSize: 18, fontWeight: '600', color: '#78350f' },
  desc: { fontSize: 15, color: '#92400e', marginTop: 3 },
});
