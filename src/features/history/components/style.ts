import { colors } from '@/shared/theme/colors';
import { radius } from '@/shared/theme/radius';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 32px;
    align-items: center;
    align-self: stretch;
`;

export const Line = styled.View`
    position: absolute;
    top: 0;
    bottom: 0;

    width: 2px;

    background-color: ${colors.text};
`;

export const Dot = styled.View`
    position: absolute;

    top: 10px;
    bottom: 0;

    width: 16px;
    height: 16px;
    border-radius: ${radius.full}px;

    background-color: ${colors.accent};
`;

export const Arrow = styled.View`
    position: absolute;

    top: 12px;
    right: 0px;

    width: 0;
    height: 0;

    border-top-width: 6px;
    border-bottom-width: 6px;
    border-right-width: 6px;

    border-top-color: transparent;
    border-bottom-color: transparent;
    border-right-color: ${colors.border};
`;
