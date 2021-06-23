import React, {ReactNode} from 'react';
import { theme } from 'src/theme';
import * as S from './styles';

type Props = {
    children: ReactNode;
}

export function Background({children}:Props){
  return <S.Container>{children}</S.Container>;
}
