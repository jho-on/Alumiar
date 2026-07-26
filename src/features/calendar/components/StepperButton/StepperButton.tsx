import { Button, Icon } from './style';

type StepperButtonProps = {
    direction: 'prev' | 'next';
    onPress: () => void;
};

export default function StepperButton({
    direction,
    onPress,
}: StepperButtonProps) {
    return (
        <Button onPress={onPress}>
            <Icon>{direction == 'prev' ? '<' : '>'}</Icon>
        </Button>
    );
}
