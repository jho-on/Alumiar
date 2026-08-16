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
import { useState } from 'react';

type ModalProps = {
    title: string;
    inputLabel?: string;
    inputPlaceholder?: string;
    onCancel: () => void;
    onConfirm: (value: string) => void;
};

export default function Modal({
    title,
    inputLabel,
    inputPlaceholder,
    onCancel,
    onConfirm,
}: ModalProps) {
    const [value, setValue] = useState('');
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
                            value={value}
                            onChangeText={setValue}
                        ></Input>
                    </InputContainer>
                )}

                <ButtonContainer>
                    <CancelButton onPress={onCancel}>
                        <CancelButtonText>Cancelar</CancelButtonText>
                    </CancelButton>
                    <ConfirmButton onPress={() => onConfirm(value)}>
                        <ConfirmButtonText>Confirmar</ConfirmButtonText>
                    </ConfirmButton>
                </ButtonContainer>
            </Background>
        </Container>
    );
}
