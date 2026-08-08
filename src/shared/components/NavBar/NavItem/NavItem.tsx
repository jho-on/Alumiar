import { ComponentType } from 'react';
import { SvgProps } from 'react-native-svg';
import { Container, Button, Label } from './style';

type NavItemProps = {
    label: string;
    active?: boolean;
    icon: ComponentType<SvgProps>;
    activeIcon: ComponentType<SvgProps>;
    onPress: () => void;
};

export default function NavItem({
    label,
    active = false,
    icon: Icon,
    activeIcon: ActiveIcon,
    onPress,
}: NavItemProps) {
    const CurrentIcon = active ? ActiveIcon : Icon;

    return (
        <Container>
            <Button $active={active} onPress={onPress}>
                <CurrentIcon width={24} height={24} />
            </Button>

            <Label>{label}</Label>
        </Container>
    );
}
