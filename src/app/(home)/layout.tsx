import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <HomeLayout 
      {...baseOptions()}
      links={[
        {
          text: 'Hackkit',
          url: '/hackkit',
          active: 'url'
        },
        {
          text: 'Clubkit',
          url: '/clubkit',
          active: 'url'
        },
        {
          text: 'O Tools',
          url: '/otools',
          active: 'url'
        },
        {
          text: 'Critiq',
          url: '/critiq',
          active: 'url'
        },
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
