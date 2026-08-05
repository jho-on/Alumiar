import { Button, Icon } from './style';

type IconButtonProps = {
    icon: React.ReactNode;
    onPress: () => void;
};

export default function IconButton({ icon, onPress }: IconButtonProps) {
    return (
        <Button onPress={onPress}>
            <Icon>{icon}</Icon>
        </Button>
    );
}
