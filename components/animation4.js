import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Animated} from 'react-native';

const Animation = () => {
  const [animation] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 360,
      duration: 800,
    }).start();
  }, []);

  const interpolation = animation.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  const animationStyle = {
    transform: [{rotate: interpolation}],
  };

  return (
    <View>
      <Animated.View style={[styles.box, animationStyle]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animation;
