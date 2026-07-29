import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: ${spacing.sm}px;
    background-color: ${colors.background};
    padding: ${spacing.xxs}px ${spacing.md}px;
    min-height: 60px;
`;

export const Value = styled.Text`
    color: ${colors.text};
    font-size: ${typography.title.fontSize}px;
    font-family: ${typography.title.fontFamily};
`;
