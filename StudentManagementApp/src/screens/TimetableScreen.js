// src/screens/TimetableScreen.js
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import TimetableEntry from '../models/TimetableEntry';

export default function TimetableScreen() {
  const [timetable, setTimetable] = useState([]);

  useEffect(() => {
    const entries = [
      new TimetableEntry('Monday', 'Math', '9:00', '10:00'),
      new TimetableEntry('Monday', 'Science', '10:15', '11:15'),
      new TimetableEntry('Tuesday', 'English', '9:00', '10:00'),
      new TimetableEntry('Wednesday', 'History', '11:30', '12:30'),
      new TimetableEntry('Friday', 'Physics', '8:00', '9:00'),
    ];
    setTimetable(entries);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.day}>{item.day}</Text>
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.time}>{item.getTimeRange()}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Class Timetable</Text>
      <FlatList
        data={timetable}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: { padding: 15, backgroundColor: '#f5f5f5', borderRadius: 10, marginBottom: 10 },
  day: { fontWeight: 'bold', fontSize: 16 },
  subject: { fontSize: 18, marginTop: 5 },
  time: { color: 'gray', marginTop: 3 },
});
