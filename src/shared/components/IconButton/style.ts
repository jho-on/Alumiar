import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';

export const Button = styled.Pressable`
    align-items: center;
    justify-content: center;
    padding: ${spacing.xs}px;
`;

export const Icon = styled.Text`
    color: ${colors.accent};
    font-family: ${typography.title.fontFamily};
    font-size: ${typography.title.fontSize}px;
`;
