import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { radius } from '@/shared/theme/radius';
import { spacing } from '@/shared/theme/spacing';
import { typography } from '@/shared/theme/typography';

export const Container = styled.View`
    background-color: ${colors.background};
    padding: ${spacing.sm}px;
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    color: ${colors.accent};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.subtitle.fontFamily};
`;

export const NewTaskButton = styled.Pressable`
    border-width: 1px;
    border-color: ${colors.accent};
    border-radius: ${radius.full}px;
`;

export const NewTaskButtonText = styled.Text`
    color: ${colors.accent};
    font-size: ${typography.body.fontSize}px;
    font-family: ${typography.body.fontFamily};
    padding: 0px ${spacing.sm}px;
`;
