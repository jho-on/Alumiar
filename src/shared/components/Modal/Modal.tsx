import { colors } from '@/shared/theme/colors';
import {
    Background,
    ButtonContainer,
    CancelButton,
    CancelButtonText,
    ConfirmButton,
    ConfirmButtonText,
    Container,
    Input,
    InputContainer,
    InputLabel,
    Title,
} from './style';

type ModalProps = {
    title: string;
    inputLabel?: string;
    inputPlaceholder?: string;
    onCancel: () => void;
    onConfirm: () => void;
};

export default function Modal({
    title,
    inputLabel,
    inputPlaceholder,
    onCancel,
    onConfirm,
}: ModalProps) {
    return (
        <Container>
            <Background>
                <Title>{title}</Title>

                {inputLabel && inputPlaceholder && (
                    <InputContainer>
                        <InputLabel>{inputLabel}</InputLabel>
                        <Input
                            placeholder={inputPlaceholder}
                            placeholderTextColor={colors.border}
                        ></Input>
                    </InputContainer>
                )}

                <ButtonContainer>
                    <CancelButton onPress={onCancel}>
                        <CancelButtonText>Cancelar</CancelButtonText>
                    </CancelButton>
                    <ConfirmButton onPress={onConfirm}>
                        <ConfirmButtonText>Confirmar</ConfirmButtonText>
                    </ConfirmButton>
                </ButtonContainer>
            </Background>
        </Container>
    );
}
