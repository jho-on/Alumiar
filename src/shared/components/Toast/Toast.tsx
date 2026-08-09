import { Container, Text } from './style';

type ToastProps = {
    text: string;
    onClose: () => void;
};

import CloseIcon from '@/../assets/close.svg';

export default function Toast({ text, onClose }: ToastProps) {
    return (
        <Container>
            <Text>{text}</Text>
            <CloseIcon onPress={onClose} width={32} height={32} />
        </Container>
    );
}
