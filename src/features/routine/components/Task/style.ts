import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { radius } from '@/shared/theme/radius';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';

export const Container = styled.View`
    background-color: ${colors.background};
    flex-direction: row;
    justify-content: space-between;
    border-width: 1px;
    border-color: ${colors.border};
    border-radius: ${radius.sm}px;
    padding: ${spacing.sm}px ${spacing.lg}px;
    width: 92%;
`;

export const CheckBox = styled.Pressable<{ $checked: boolean }>`
    width: 32px;
    height: 32px;
    border-width: 1px;
    border-color: ${colors.accent};
    border-radius: ${radius.full}px;
    background-color: ${({ $checked }) =>
        $checked ? colors.accent : colors.background};

    margin-right: ${spacing.md}px;
    align-self: center;
`;

export const InfoContainer = styled.View`
    flex-direction: column;
    justify-content: center;
`;
export const Title = styled.Text`
    color: ${colors.text};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.subtitle.fontFamily};
`;
export const Subtitle = styled.Text`
    color: ${colors.border};
    font-size: ${typography.body.fontSize}px;
    font-family: ${typography.body.fontFamily};
    line-height: ${typography.body.fontSize}px;
`;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    gap: ${spacing.md}px;
    align-self: center;
`;
export const EditButton = styled.Pressable``;
export const DeleteButton = styled.Pressable``;
