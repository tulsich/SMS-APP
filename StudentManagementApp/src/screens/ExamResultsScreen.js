import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ExamResult from '../models/ExamResult';

export default function ExamResultsScreen() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const data = [
      new ExamResult('Math', 88, 100, 'A'),
      new ExamResult('Science', 76, 100, 'B'),
      new ExamResult('English', 92, 100, 'A+'),
      new ExamResult('History', 67, 100, 'C+'),
    ];
    setResults(data);
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.score}>
        Score: <Text style={styles.bold}>{item.score}/{item.total}</Text> ({item.getPercentage()})
      </Text>
      <Text style={styles.grade}>Grade: <Text style={styles.gradeTag}>{item.grade}</Text></Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📊 Exam Results</Text>
      <FlatList
        data={results}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f3f4f6' },
  heading: { fontSize: 24, fontWeight: 'bold', color: '#1e293b', marginBottom: 20, textAlign: 'center' },
  list: { paddingBottom: 50 },
  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 14,
    marginBottom: 15,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
  },
  subject: { fontSize: 18, fontWeight: '600', color: '#0f172a' },
  score: { marginTop: 5, fontSize: 16, color: '#334155' },
  grade: { marginTop: 5, fontSize: 16, color: '#475569' },
  gradeTag: { fontWeight: 'bold', color: '#2563eb' },
  bold: { fontWeight: '600', color: '#111827' },
});
