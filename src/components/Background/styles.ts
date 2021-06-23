import styled from 'styled-components/native';
import {LinearGradient} from 'expo-linear-gradient';

export const Container = styled(LinearGradient).attrs(({theme}) => ({
    colors: [theme.colors.secondary80, theme.colors.secondary100]
}))`
  flex: 1;
`;
