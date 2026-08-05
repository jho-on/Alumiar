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
    position: absolute;

    left: 0;
    right: 0;

    text-align: center;

    color: ${colors.text};
    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.title.fontFamily};
`;
