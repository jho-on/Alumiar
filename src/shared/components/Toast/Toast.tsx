import { Animated } from 'react-native';
import { Container, Text } from './style';
import CloseIcon from '@/../assets/close.svg';
import { useEffect, useState } from 'react';

type ToastProps = {
    text: string;
    onClose: () => void;
};

export default function Toast({ text, onClose }: ToastProps) {
    const [translateX] = useState(() => new Animated.Value(300));

    useEffect(() => {
        Animated.timing(translateX, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
    }, [translateX]);

    return (
        <Container
            style={{
                transform: [{ translateX }],
            }}
            onPress={onClose}
        >
            <Text>{text}</Text>
            <CloseIcon width={32} height={32} />
        </Container>
    );
}
