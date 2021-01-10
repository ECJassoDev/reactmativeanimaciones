import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Animated } from 'react-native';

const Animation = () => {

    const [animation] = useState(new Animated.Value(0));

    useEffect(() => {
        Animated.timing(
            animation,
            {
                toValue: 1,
                duration: 500,
            }
        ).start();
    }, [])

    return (
        <Animated.View style={{ opacity: animation }}>
            <Text style={styles.text}>Animacion 1</Text>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
    }
});

export default Animation;