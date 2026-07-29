import {
    ButtonsContainer,
    CheckBox,
    Container,
    DeleteButton,
    EditButton,
    InfoContainer,
    Subtitle,
    Title,
} from './style';

type TaskProps = {
    checked: boolean;
    title: string;
    createdAt: string;
    updatedAt?: string;
    onEdit: () => void;
    onDelete: () => void;
};

import BinIcon from '@/features/routine/assets/bin.svg';
import PenIcon from '@/features/routine/assets/pen.svg';
import { View } from 'react-native';

export default function Task({
    checked,
    title,
    createdAt,
    updatedAt,
    onEdit,
    onDelete,
}: TaskProps) {
    return (
        <Container>
            <View
                style={{
                    flexDirection: 'row',
                }}
            >
                <CheckBox $checked={checked}></CheckBox>
                <InfoContainer>
                    <Title>{title}</Title>
                    {updatedAt && <Subtitle>{updatedAt}</Subtitle>}
                    <Subtitle>{createdAt}</Subtitle>
                </InfoContainer>
            </View>

            <ButtonsContainer>
                <EditButton onPress={onEdit}>
                    <PenIcon width={24} height={24}></PenIcon>
                </EditButton>
                <DeleteButton onPress={onDelete}>
                    <BinIcon width={24} height={24}></BinIcon>
                </DeleteButton>
            </ButtonsContainer>
        </Container>
    );
}
