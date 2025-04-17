import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import AttendanceRecord from '../models/AttendanceRecord';

export default function AttendanceScreen() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const mockRecords = [
      new AttendanceRecord('2025-04-01', 'present'),
      new AttendanceRecord('2025-04-02', 'absent'),
      new AttendanceRecord('2025-04-03', 'present'),
      new AttendanceRecord('2025-04-04', 'present'),
      new AttendanceRecord('2025-04-05', 'absent'),
    ];
    setRecords(mockRecords);
  }, []);

  const renderItem = ({ item }) => (
    <View style={[styles.card, item.isPresent() ? styles.present : styles.absent]}>
      <Text style={styles.date}>{item.getFormattedDate()}</Text>
      <Text style={styles.status}>
        {item.isPresent() ? '✅ Present' : '❌ Absent'}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📋 Attendance Record</Text>
      <FlatList
        data={records}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f3f4f6' },
  heading: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', color: '#1e293b', marginBottom: 20 },
  list: { paddingBottom: 50 },
  card: {
    padding: 20,
    borderRadius: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
    elevation: 2,
  },
  present: {
    borderLeftWidth: 6,
    borderLeftColor: '#10b981',
  },
  absent: {
    borderLeftWidth: 6,
    borderLeftColor: '#ef4444',
  },
  date: { fontSize: 16, color: '#374151', marginBottom: 5 },
  status: { fontSize: 18, fontWeight: 'bold', color: '#111827' },
});
