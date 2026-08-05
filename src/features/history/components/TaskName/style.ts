import { colors } from '@/shared/theme/colors';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';
import styled from 'styled-components/native';

export const Name = styled.Text`
    color: ${colors.accent};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.subtitle.fontFamily};
`;

export const UpdateContainer = styled.View`
    border-width: 1px;
    border-color: ${colors.border};
    padding: ${spacing.xs}px;
    margin-right: ${spacing.sm}px;
`;

export const OldTaskName = styled.Text`
    color: ${colors.accent};
    font-size: ${typography.body.fontSize}px;
    font-family: ${typography.body.fontFamily};
`;

export const NewTaskName = styled.Text`
    color: ${colors.accent};
    font-size: ${typography.body.fontSize}px;
    font-family: ${typography.body.fontFamily};
`;

export const LabelTask = styled.Text`
    color: ${colors.text};
    font-size: ${typography.body.fontSize}px;
    font-family: ${typography.body.fontFamily};
`;

export const InfoLineContainer = styled.View`
    flex-direction: row;
`;
