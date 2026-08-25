import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { typography } from '@/shared/theme/typography';

export const Container = styled.View`
    background-color: ${colors.background};

    flex-direction: row;
    align-items: center;

    position: relative;
`;

export const Title = styled.Text`
    color: ${colors.text};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.title.fontFamily};
`;

export const TitleContainer = styled.View`
    position: absolute;

    left: 0;
    right: 0;

    align-items: center;
`;
