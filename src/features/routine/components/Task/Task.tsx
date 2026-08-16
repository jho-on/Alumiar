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
    onCheck: () => void;
};

import BinIcon from '@/../assets/bin.svg';
import PenIcon from '@/../assets/pen.svg';

export default function Task({
    checked,
    title,
    createdAt,
    updatedAt,
    onEdit,
    onDelete,
    onCheck,
}: TaskProps) {
    return (
        <Container>
            <CheckBox $checked={checked} onPress={onCheck}></CheckBox>
            <InfoContainer>
                <Title>{title}</Title>
                {updatedAt && <Subtitle>{updatedAt}</Subtitle>}
                <Subtitle>{createdAt}</Subtitle>
            </InfoContainer>

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
