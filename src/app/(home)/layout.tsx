import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout {...baseOptions()}
    links={[
      {
        text: 'HackKit',
        url: '/hackkit',
        active: 'url'
      },
      {
        text: 'ClubKit',
        url: '/clubkit',
        active: 'url'        
      },
      // {
      //   text: 'OTools',
      //   url: '/otools',
      //   active: 'url'
      // },
      // {
      //   text: 'Critiq',
      //   url: '/critiq',
      //   active: 'url'
      // },
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url'
      },
    ]}
    >
      {children}
    </HomeLayout>
  );
}
