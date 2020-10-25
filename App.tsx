import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button,PushNotification} from 'react-native';
import * as Notifications from 'expo-notifications';


Notifications.scheduleNotificationAsync({
  content: {
    title: "Notification",
    body: 'Change sides!',
  },
  trigger: {
    seconds: 10,
  },
});


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={
        {fontSize: 50, 
        flex: 1,
        paddingTop:50,}}>
          The Remind App
          </Text>
        <TextInput style={styles.textbox}>Enter Reminder</TextInput>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFECEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textbox:{
    backgroundColor:'#BDBDBD',
    flex:4,
    marginHorizontal:20,
    marginVertical: 10,
  },
  button:{
    flex:3,
  }
});

