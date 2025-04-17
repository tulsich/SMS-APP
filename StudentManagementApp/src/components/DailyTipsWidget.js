// src/screens/DashboardScreen.js
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  useColorScheme,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { Switch } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const features = [
  {
    title: 'Profile',
    screen: 'Profile',
    icon: <MaterialIcons name="person" size={32} color="#fff" />,
    bg: '#FF6B6B',
  },
  {
    title: 'Attendance',
    screen: 'Attendance',
    icon: <FontAwesome5 name="calendar-check" size={28} color="#fff" />,
    bg: '#4ECDC4',
  },
  {
    title: 'Exams',
    screen: 'ExamResults',
    icon: <MaterialIcons name="school" size={32} color="#fff" />,
    bg: '#FFD93D',
  },
  {
    title: 'Messages',
    screen: 'Messages',
    icon: <Ionicons name="chatbubble-ellipses" size={30} color="#fff" />,
    bg: '#1A535C',
  },
  {
    title: 'Timetable',
    screen: 'Timetable',
    icon: <MaterialIcons name="calendar-today" size={30} color="#fff" />,
    bg: '#FF9F1C',
  },
  {
    title: 'Holidays',
    screen: 'HolidayList',
    icon: <MaterialIcons name="beach-access" size={30} color="#fff" />,
    bg: '#2EC4B6',
  },
  {
    title: 'Notices',
    screen: 'Notices',
    icon: <Ionicons name="notifications" size={30} color="#fff" />,
    bg: '#6A4C93',
  },
  {
    title: 'Progress',
    screen: 'Progress',
    icon: <MaterialIcons name="bar-chart" size={30} color="#fff" />,
    bg: '#8E44AD',
  },
  {
    title: 'Polls',
    screen: 'Polls',
    icon: <Ionicons name="help-circle" size={30} color="#fff" />,
    bg: '#00B894',
  },
  {
    title: 'Calendar',
    screen: 'Calendar',
    icon: <MaterialIcons name="event" size={30} color="#fff" />,
    bg: '#F39C12',
  },
  {
    title: 'Chat',
    screen: 'Chat',
    icon: <Ionicons name="chatbox-ellipses" size={30} color="#fff" />,
    bg: '#E74C3C',
  },
];

export default function DashboardScreen() {
  const [isDark, setIsDark] = useState(false);
  const scheme = useColorScheme();
  const theme = isDark || scheme === 'dark';
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: item.bg }]}
      onPress={() => navigation.navigate(item.screen)}
    >
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.cardText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme ? '#121212' : '#f0f0f0' }]}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: theme ? '#fff' : '#222' }]}>
          📚 Dashboard
        </Text>
        <Switch
          value={isDark}
          onValueChange={() => setIsDark(!isDark)}
          color="#4ECDC4"
        />
      </View>

      <FlatList
        data={features}
        renderItem={renderItem}
        keyExtractor={(item) => item.title}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  grid: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 30,
  },
  card: {
    flex: 0.48,
    borderRadius: 20,
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  iconContainer: {
    marginBottom: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
