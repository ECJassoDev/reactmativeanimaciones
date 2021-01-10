import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animation from './components/animation6';

const App = () => {
  return (
    <>
      <View style={styles.content}>
        <Animation />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {marginTop: 100},
});

export default App;
