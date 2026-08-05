import IconButton from '../IconButton/IconButton';
import { Container, Value } from './style';

type HorizontalStepperProps = {
    value: string | number;
    onPrevious: () => void;
    onNext: () => void;
};

export default function HorizontalStepper({
    value,
    onPrevious,
    onNext,
}: HorizontalStepperProps) {
    return (
        <Container>
            <IconButton icon="<" onPress={onPrevious} />
            <Value>{value}</Value>
            <IconButton icon=">" onPress={onNext} />
        </Container>
    );
}
