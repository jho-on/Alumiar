import { colors } from '@/shared/theme/colors';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
    position: absolute;

    bottom: 128px;
    right: 16px;

    background-color: ${colors.accent};

    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    padding: ${spacing.xs}px ${spacing.md}px;
    gap: ${spacing.lg}px;
`;

export const Text = styled.Text`
    flex: 1;
    flex-shrink: 1;
    max-width: 200px;

    color: ${colors.background};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.subtitle.fontFamily};
`;
