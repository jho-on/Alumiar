import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';

export const Container = styled.View`
    background-color: ${colors.background};
    flex-direction: row;
    justify-content: space-between;
    border-width: 1px;
    border-color: ${colors.border};
    padding: ${spacing.sm}px ${spacing.sm}px;
    gap: ${spacing.sm}px;
    margin-bottom: ${spacing.lg}px;
`;

export const InfoText = styled.Text`
    color: ${colors.text};
    font-size: ${typography.body.fontSize}px;
    font-family: ${typography.body.fontFamily};
    flex: 1.5;
`;

export const HistoryButton = styled.Pressable`
    flex: 1;
    align-self: center;
`;

export const HistoryButtonText = styled.Text`
    color: ${colors.accent};
    font-size: ${typography.body.fontSize}px;
    font-family: ${typography.body.fontFamily};
`;
