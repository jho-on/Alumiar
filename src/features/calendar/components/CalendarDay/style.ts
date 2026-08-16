import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { radius } from '@/shared/theme/radius';

export const Glow = styled.View<{ $checked: boolean; $disabled?: boolean }>`
    opacity: ${({ $disabled }) => ($disabled ? 0 : 1)};
    width: 40px;
    height: 40px;

    align-items: center;
    justify-content: center;

    border-radius: ${radius.full}px;
    border-width: 1px;
    border-color: transparent;

    background-color: ${({ $checked }) =>
        $checked ? 'rgba(255, 215, 0, 0.15)' : 'transparent'};
`;

export const Day = styled.Pressable<{ $checked: boolean; $disabled?: boolean }>`
    opacity: ${({ $disabled }) => ($disabled ? 0 : 1)};
    width: 28px;
    height: 28px;

    border-radius: ${radius.full}px;

    border-width: ${({ $checked }) => ($checked ? 0 : 1)}px;
    border-color: ${colors.text};

    background-color: ${({ $checked }) =>
        $checked ? colors.accent : colors.background};
`;
