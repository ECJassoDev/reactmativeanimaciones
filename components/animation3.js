import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

const Animation = () => {
  const [animation] = useState(new Animated.Value(14));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 40,
      duration: 800,
    }).start();
  }, []);

  return (
    <View>
      <Animated.Text style={[styles.text, {fontSize: animation}]}>
        Animacion 3
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
});

export default Animation;
