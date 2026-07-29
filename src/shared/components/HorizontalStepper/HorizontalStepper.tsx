import StepperButton from '../StepperButton/StepperButton';
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
            <StepperButton direction="prev" onPress={onPrevious} />
            <Value>{value}</Value>
            <StepperButton direction="next" onPress={onNext} />
        </Container>
    );
}
