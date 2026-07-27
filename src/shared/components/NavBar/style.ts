import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { spacing } from '@/shared/theme/spacing';

export const Container = styled.View`
    background-color: ${colors.background};
    flex-direction: row;
    justify-content: center;
    padding: ${spacing.sm}px 0px;
    gap: ${spacing.sm}px;
    border-top-width: 1px;
    border-top-color: ${colors.border};
`;

export const NavSeparator = styled.View`
    width: 1px;
    align-self: stretch;
    height: 90%;

    background-color: ${colors.border};
`;
