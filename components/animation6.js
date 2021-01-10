import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated} from 'react-native';

const Animation = () => {
  const [animation1] = useState(new Animated.Value(0));
  const [animation2] = useState(new Animated.Value(-50));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation2, {
          toValue: -30,
          duration: 0,
        }),
        Animated.timing(animation1, {
          toValue: 60,
          duration: 400,
        }),
        Animated.timing(animation2, {
          toValue: 30,
          duration: 400,
        }),
        Animated.timing(animation1, {
          toValue: 0,
          duration: 400,
        }),
        Animated.timing(animation2, {
          toValue: -30,
          duration: 400,
        }),
      ]),
    ).start();
  }, []);

  const animationStyle = {
    transform: [{translateY: animation1}, {translateX: animation2}],
  };

  return (
    <View style={{alignItems: 'center'}}>
      <Animated.View style={[styles.box, animationStyle]}></Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: 40,
    height: 40,
    backgroundColor: 'cornflowerblue',
  },
});

export default Animation;
