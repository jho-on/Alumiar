import { Container, Text } from './style';

type ToastProps = {
    text: string;
    onClose: () => void;
};

import CloseIcon from '@/../assets/close.svg';

export default function Toast({ text, onClose }: ToastProps) {
    return (
        <Container onPress={onClose}>
            <Text>{text}</Text>
            <CloseIcon width={32} height={32} />
        </Container>
    );
}
