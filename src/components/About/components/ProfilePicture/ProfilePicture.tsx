'use client';

import dynamic from 'next/dynamic';

const AvatarCanvas = dynamic(() => import('./AvatarCanvas'), {
  ssr: false,
  loading: () => (
    <div className="flex h-full min-h-80 w-full items-center justify-center text-sm text-text-muted">Loading…</div>
  ),
});

interface ProfilePictureProps {
  expanded?: boolean;
}

const ProfilePicture = ({ expanded = false }: ProfilePictureProps) => {
  return (
    <div
      className="relative cut-corners cut-corners-lg aspect-3/4 shrink-0 overflow-hidden border border-solid border-border-primary max-lg:hidden"
      style={{
        width: expanded ? '0px' : '100%',
        minWidth: expanded ? '0px' : '15rem',
        maxWidth: expanded ? '0px' : '18.75rem',
        opacity: expanded ? 0 : 1,
        transition:
          'width 500ms cubic-bezier(0.4,0,0.2,1), min-width 500ms cubic-bezier(0.4,0,0.2,1), max-width 500ms cubic-bezier(0.4,0,0.2,1), opacity 500ms cubic-bezier(0.4,0,0.2,1)',
        background: `
          radial-gradient(ellipse 90% 55% at 50% 25%, rgba(230,195,106,0.13) 0%, transparent 65%),
          radial-gradient(ellipse 55% 70% at 15% 85%, rgba(102,179,255,0.07) 0%, transparent 55%),
          radial-gradient(ellipse 40% 40% at 85% 10%, rgba(230,195,106,0.06) 0%, transparent 50%),
          linear-gradient(165deg, #13181f 0%, #0c1014 100%)
        `,
      }}
      role="img"
    >
      <AvatarCanvas />
    </div>
  );
};

export default ProfilePicture;
