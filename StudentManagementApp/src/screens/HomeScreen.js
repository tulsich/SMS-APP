import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../context/ThemeContext'; // Optional if using dark/light theme

const items = [
  { title: 'Profile', icon: 'account', color: '#0ea5e9', screen: 'Profile' },
  { title: 'Class Routine', icon: 'calendar-clock', color: '#84cc16', screen: 'Timetable' },
  { title: 'Exam', icon: 'clipboard-text-outline', color: '#facc15', screen: 'ExamResults' },
  { title: 'Message', icon: 'email-outline', color: '#2563eb', screen: 'Messages' },
  { title: 'Exam Result', icon: 'certificate-outline', color: '#ec4899', screen: 'ExamResults' },
  { title: 'Attendance', icon: 'check-decagram', color: '#fb923c', screen: 'Attendance' },
  { title: 'Notice', icon: 'bell-ring-outline', color: '#a855f7', screen: 'Messages' },
  { title: 'Holiday', icon: 'party-popper', color: '#ef4444', screen: 'HolidayList' },
  { title: 'Homework', icon: 'home-edit', color: '#f97316', screen: 'Messages' },
  { title: 'Fee Payment', icon: 'bank-transfer', color: '#7c3aed', screen: 'Messages' },
  { title: 'Library', icon: 'bookshelf', color: '#4c1d95', screen: 'Messages' },
];

export default function HomeScreen({ navigation }) {
  const { theme } = useTheme(); // Optional

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.item, { backgroundColor: item.color }]}
      onPress={() => navigation.navigate(item.screen)}
    >
      <MaterialCommunityIcons name={item.icon} size={32} color="#fff" />
      <Text style={styles.label}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme?.colors?.background || '#f3f4f6' }]}>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 30 },
  grid: { paddingHorizontal: 10, paddingBottom: 50 },
  row: { justifyContent: 'space-between', marginBottom: 20 },
  item: {
    flex: 1,
    height: 100,
    borderRadius: 50,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  label: {
    color: '#fff',
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    fontWeight: '500',
  },
});
