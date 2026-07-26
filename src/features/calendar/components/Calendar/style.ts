import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';

export const Container = styled.View`
    align-items: center;
    background-color: ${colors.background};
    padding-bottom: ${spacing.lg}px;
`;

export const Week = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    gap: 8.5px;
`;

export const DaysContainer = styled.View`
    flex-direction: column;
    gap: ${spacing.sm}px;
`;

export const LabelsContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    gap: ${spacing.lg}px;
`;

export const Label = styled.Text<{ $highlight?: boolean }>`
    color: ${({ $highlight }) => ($highlight ? colors.accent : colors.text)};

    font-size: ${typography.title.fontSize}px;
    font-family: ${typography.subtitle.fontFamily};
`;
