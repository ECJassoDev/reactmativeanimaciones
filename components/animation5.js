import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';

const Animation = () => {
  const [animation] = useState(new Animated.Value(1));

  const pressButton = () => {
    Animated.spring(animation, {
      toValue: 0.9,
    }).start();
  };

  const keepButton = () => {
    Animated.spring(animation, {
      toValue: 1,
      friction: 4,
      tension: 30,
    }).start();
  };

  const animationStyle = {
    transform: [{scale: animation}],
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPressIn={() => pressButton()}
        onPressOut={() => keepButton()}>
        <Animated.View style={[styles.button, animationStyle]}>
          <Text style={styles.label}>Iniciar sesion</Text>
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'cornflowerblue',
    width: 280,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    color: '#FFF',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 28,
  },
});
export default Animation;
