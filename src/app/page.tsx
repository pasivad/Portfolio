import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans text-2xl font-bold">
      Vlad Pasichnyk's Portfolio, still in development. Please check back later.
      <Image
        src="/construction.avif"
        alt="Under Construction"
        width={700}
        height={500}
        className="mt-8"
      />
    </div>
  );
}
