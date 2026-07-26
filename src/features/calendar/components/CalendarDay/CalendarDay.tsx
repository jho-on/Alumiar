import { Glow, Day } from './style';

type CalendarDayProps = {
    checked: boolean;
    disabled?: boolean;
    onPress?: () => void;
};

export default function CalendarDay({
    checked,
    disabled,
    onPress,
}: CalendarDayProps) {
    return (
        <Glow $checked={checked} $disabled={disabled}>
            <Day $checked={checked} $disabled={disabled} onPress={onPress} />
        </Glow>
    );
}
