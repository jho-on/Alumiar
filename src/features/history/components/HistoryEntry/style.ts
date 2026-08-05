import { colors } from '@/shared/theme/colors';
import { radius } from '@/shared/theme/radius';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';
import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${colors.background};
    flex-direction: column;
`;

export const Icon = styled.View`
    width: 40px;
    height: 40px;

    align-items: center;
    justify-content: center;

    border-width: 1px;
    border-color: ${colors.accent};
    border-radius: ${radius.full}px;
    margin: ${spacing.sm}px;
`;

export const EntryContainer = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;

    border-width: 1px;
    border-color: ${colors.border};
    margin-right: ${spacing.md}px;
    margin-bottom: ${spacing.md}px;
`;

export const Time = styled.Text`
    padding-top: ${spacing.xs}px;
    color: ${colors.border};
    font-size: ${typography.body.fontSize}px;
    font-family: ${typography.body.fontFamily};
`;

export const Title = styled.Text`
    color: ${colors.text};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.subtitle.fontFamily};
`;

export const Date = styled.Text`
    color: ${colors.text};
    font-size: ${typography.body.fontSize}px;
    font-family: ${typography.body.fontFamily};
    margin-left: ${spacing.xs}px;
`;

export const InfoContainer = styled.View`
    flex-direction: row;
    align-items: stretch;
`;

export const CardContainer = styled.View`
    flex: 1;
    padding-bottom: ${spacing.xs}px;
`;
