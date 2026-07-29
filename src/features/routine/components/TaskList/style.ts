import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { spacing } from '@/shared/theme/spacing';

export const Container = styled.View`
    flex-direction: column;
    background-color: ${colors.background};
    gap: ${spacing.sm}px;
    padding-bottom: ${spacing.lg}px;
    align-items: center;
`;
