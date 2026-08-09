import { colors } from '@/shared/theme/colors';
import { radius } from '@/shared/theme/radius';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';
import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-color: ${colors.accent}CC;
    z-index: 999;

    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Background = styled.View`
    background-color: ${colors.background};

    border-radius: ${radius.md}px;
    border-color: ${colors.border};
    border-width: 1px;
    padding: ${spacing.sm}px;
`;

export const Title = styled.Text`
    color: ${colors.accent};
    font-size: ${typography.title.fontSize}px;
    font-family: ${typography.title.fontFamily};
    text-align: center;
`;

export const InputContainer = styled.View`
    flex-direction: column;
    margin-top: ${spacing.md}px;
`;

export const InputLabel = styled.Text`
    color: ${colors.text};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.title.fontFamily};
`;

export const Input = styled.TextInput`
    border-width: 1px;
    border-color: ${colors.border};
    color: ${colors.text};
`;

export const ButtonContainer = styled.View`
    flex-direction: row;
    justify-content: space-around;
    gap: ${spacing.md}px;
    margin-top: ${spacing.sm}px;
`;

export const ConfirmButton = styled.Pressable`
    background-color: ${colors.accent};
    padding: ${spacing.sm}px ${spacing.md}px;

    border-radius: ${radius.md}px;
`;

export const ConfirmButtonText = styled.Text`
    color: ${colors.background};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.title.fontFamily};
`;

export const CancelButton = styled.Pressable`
    padding: ${spacing.sm}px ${spacing.md}px;

    border-radius: ${radius.md}px;
`;

export const CancelButtonText = styled.Text`
    color: ${colors.border};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.title.fontFamily};
`;
