import styled from 'styled-components/native';
import { colors } from '@/shared/theme/colors';
import { radius } from '@/shared/theme/radius';
import { typography } from '@/shared/theme/typography';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const Button = styled.Pressable<{ $active?: boolean }>`
    width: 50px;
    height: 50px;

    align-items: center;
    justify-content: center;

    border-width: 1px;
    border-color: ${colors.accent};
    border-radius: ${radius.full}px;

    background-color: ${({ $active }) =>
        $active ? colors.accent : colors.background};
`;

export const Label = styled.Text`
    color: ${colors.accent};

    font-size: ${typography.subtitle.fontSize}px;
    font-family: ${typography.subtitle.fontFamily};
`;
