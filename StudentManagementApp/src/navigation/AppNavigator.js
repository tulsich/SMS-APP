import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import LoginScreen from '../screens/LoginScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TimetableScreen from '../screens/TimetableScreen';
import MessagesScreen from '../screens/MessagesScreen';
import ExamResultsScreen from '../screens/ExamResultsScreen';
import AttendanceScreen from '../screens/AttendanceScreen';
import HolidayListScreen from '../screens/HolidayListScreen';
import NoticeScreen from '../screens/NoticeScreen';
import ProgressDashboardScreen from '../screens/ProgressDashboardScreen';
import PollsScreen from '../screens/PollsScreen';
import InteractiveCalendarScreen from '../screens/InteractiveCalendarScreen';
import ChatReactionScreen from '../screens/ChatReactionScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Timetable" component={TimetableScreen} />
      <Stack.Screen name="Messages" component={MessagesScreen} />
      <Stack.Screen name="ExamResults" component={ExamResultsScreen} />
      <Stack.Screen name="Attendance" component={AttendanceScreen} />
      <Stack.Screen name="HolidayList" component={HolidayListScreen} />
      <Stack.Screen name="Notices" component={NoticeScreen} />
      <Stack.Screen name="Progress" component={ProgressDashboardScreen} />
      <Stack.Screen name="Polls" component={PollsScreen} />
      <Stack.Screen name="Calendar" component={InteractiveCalendarScreen} />
      <Stack.Screen name="Chat" component={ChatReactionScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;