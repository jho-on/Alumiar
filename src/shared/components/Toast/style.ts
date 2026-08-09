import { colors } from '@/shared/theme/colors';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';
import styled from 'styled-components/native';

export const Container = styled.View`
    position: absolute;

    bottom: 128px;
    right: 16px;

    background-color: ${colors.accent};

    flex-direction: row;
    justify-content: space-around;
    padding: ${spacing.xs}px ${spacing.md}px;
    gap: ${spacing.lg}px;
`;

export const Text = styled.Text`
    color: ${colors.background};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.subtitle.fontFamily};
`;
