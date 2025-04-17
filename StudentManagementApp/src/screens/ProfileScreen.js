import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Student from '../models/Student';

export default function ProfileScreen() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const fetchedStudent = new Student(
      1,
      'John Doe',
      'john.doe@student.edu',
      '10A',
      42
    );
    setStudent(fetchedStudent);
  }, []);

  if (!student) {
    return <Text style={styles.loading}>Loading profile...</Text>;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>👤 Student Profile</Text>
      <View style={styles.card}>
        <Text style={styles.info}>Name: <Text style={styles.bold}>{student.name}</Text></Text>
        <Text style={styles.info}>Email: <Text style={styles.bold}>{student.email}</Text></Text>
        <Text style={styles.info}>Class: <Text style={styles.bold}>{student.className}</Text></Text>
        <Text style={styles.info}>Roll No: <Text style={styles.bold}>{student.rollNo}</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9fafb' },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#1e293b',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: '#334155',
  },
  bold: {
    fontWeight: '600',
    color: '#0f172a',
  },
  loading: {
    flex: 1,
    textAlign: 'center',
    marginTop: 100,
    fontSize: 18,
    color: '#999',
  },
});
