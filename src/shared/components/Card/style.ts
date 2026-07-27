import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { radius } from '@/shared/theme/radius';
import { typography } from '@/shared/theme/typography';
import { spacing } from '@/shared/theme/spacing';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background-color: ${colors.background};
    padding: ${spacing.lg}px 0px;
`;

export const HeaderContainer = styled.View`
    background-color: ${colors.accent};
    width: 90%;
    border-top-left-radius: ${radius.lg}px;
    border-top-right-radius: ${radius.lg}px;
`;

export const Title = styled.Text`
    color: ${colors.text};

    font-size: ${typography.title.fontSize}px;
    font-family: ${typography.title.fontFamily};

    padding: ${spacing.sm}px;
`;

export const BodyContainer = styled.View`
    width: 90%;
    align-items: center;
    border-right-width: 1px;
    border-bottom-width: 1px;
    border-left-width: 1px;

    border-color: ${colors.border};

    border-bottom-left-radius: ${radius.lg}px;
    border-bottom-right-radius: ${radius.lg}px;
`;

export const BodyEntry = styled.View<{ $isLast?: boolean }>`
    width: 98%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: ${spacing.xs}px ${spacing.md}px;
    border-bottom-width: ${({ $isLast }) => ($isLast ? 0 : 1)}px;
    border-bottom-color: ${colors.border};
`;

export const BodyTitle = styled.Text`
    color: ${colors.text};

    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.title.fontFamily};
`;
export const BodySubtitle = styled.Text`
    color: ${colors.border};

    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.subtitle.fontFamily};
`;

export const BodyInfo = styled.Text`
    color: ${colors.accent};

    font-size: ${typography.title.fontSize}px;
    font-family: ${typography.title.fontFamily};
`;
