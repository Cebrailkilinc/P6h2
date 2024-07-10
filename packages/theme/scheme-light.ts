import * as p from './palette';
import { buildDefaultScheme } from '../util/scheme';

export default buildDefaultScheme({
  outlineColor: {
    uikit: {
      input: {
        DEFAULT: p.grayDark['700'],
        focus: p.brandColors['300'],
      },
    },
  },
  borderColor: {
    uikit: {
     editor: p.grayDark['300']
    },
  },
  textColor: {
    uikit: {
      input: {
        DEFAULT: p.grayDark['400'],
        placeholder: p.grayDark['400'],
        disabled: p.grayDark['600'],
        error: p.extendedError['500'],
      },
    },
  },
  backgroundColor: {
    uikit: {
      link: {
        DEFAULT: p.grayDark["800"]
      },
      input: {
        DEFAULT: p.primary,
      },
      button: {
        DEFAULT: p.primary,
      }
    },
  },
});
