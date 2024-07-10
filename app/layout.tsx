import { FC, PropsWithChildren } from 'react';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import {
  RootBody,
  RootHtml,
  SchemeVariant,
  ThemeProvider,
} from '@/packages/provider';

import '@/packages/asset/style/global.scss';

type LayoutProps = PropsWithChildren & {};

const Layout: FC<LayoutProps> = (props) => {
  const { children } = props;

  const cookieStore = cookies();
  const scheme = cookieStore.get('scheme')?.value as SchemeVariant;

  return (
    <ThemeProvider initialScheme={scheme}>
      <RootHtml>
        <RootBody>
          {children}
        </RootBody>
      </RootHtml>
    </ThemeProvider>
  );
};

// export const generateMetadata = async (): Promise<Metadata> => {
//   return {
//     metadataBase: new URL(process.env.NEXT_PUBLIC_DEPLOY_URL),
//     title: 'TROY: Streamlining Restaurant and Cafe Operations',
//     description:
//       'TROY is an innovative AI-powered software solution designed to streamline the operations of restaurants and cafes. By integrating seamlessly with your existing point-of-sale (POS) systems.',
//     openGraph: {
//       type: 'website',
//       siteName: 'TROY',
//       title: 'TROY: Streamline Your Restaurant Operations',
//       description:
//         'Discover TROY, the AI-powered software solution designed to optimize restaurant and cafe operations by integrating seamlessly with your POS systems. Enhance efficiency and customer satisfaction.',
//     },
//     robots: {
//       index: process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production',
//       follow: process.env.NEXT_PUBLIC_DEPLOY_ENV === 'production',
//     },
//   };
// };

export default Layout;
