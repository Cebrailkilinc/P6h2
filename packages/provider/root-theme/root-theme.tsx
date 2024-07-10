'use client';
import { useCallback, useMemo, useState } from 'react';
import nookies, { setCookie } from 'cookies-next';
import {
  ThemeContextProps,
  DefaultScheme,
  SchemeVariant,
} from './root-theme.type';
import * as schemeCollection from '../../theme/scheme';
import { $context } from '../../util/context';

export const {
  Provider: ThemeProvider,
  Consumer: ThemeConsumer,
  useContext: useThemeProvider,
} = $context.buildContext((props: ThemeContextProps) => {
  const { initialScheme = 'default' } = props;

  const [variant, setVariant] = useState<SchemeVariant>(
    schemeCollection[initialScheme] ? initialScheme : 'default',
  );

  const scheme = useMemo(() => {
    return schemeCollection[variant] as DefaultScheme;
  }, [variant]);

  const changeScheme = useCallback((value: SchemeVariant) => {
    setVariant(value);
    setCookie('scheme', value);
  }, []);

  return {
    variant,
    scheme,
    changeScheme,
  };
});
