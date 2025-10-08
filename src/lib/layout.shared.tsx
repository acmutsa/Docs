import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Darker_Grotesque } from 'next/font/google';
import Image from 'next/image';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */

export const logo = (
  <>
    <Image
      alt="ACM Projects"
      src="/img/ACMProjectsLogo.webp"
      width={24}
      height={24}
      className="w-6"
      aira-label="ACM Projects"
    />
  </>
)

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          {logo}
          ACM OSS
        </>
      ),
    },
    themeSwitch: {
      enabled: true
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
    githubUrl: 'https://github.com/',
  };
}
