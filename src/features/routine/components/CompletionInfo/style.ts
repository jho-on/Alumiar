import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';

export const Container = styled.View`
    background-color: ${colors.background};
    width: 100%;
    padding-bottom: ${spacing.sm}px;
`;

export const Info = styled.Text`
    text-align: center;

    color: ${colors.text};
    font-size: ${typography.body.fontSize}px;
    font-family: ${typography.body.fontFamily};
`;
