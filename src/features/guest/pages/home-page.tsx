import Link from "next/link";

export const HomePage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          State <span className="text-[hsl(280,100%,70%)]">and</span> Lifecycle
        </h1>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href={'/count'}
          >
            <h3 className="text-2xl font-bold">Count</h3>
            <div className="text-lg">
              Ini halaman Count
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href={'/days'}
          >
            <h3 className="text-2xl font-bold">Days</h3>
            <div className="text-lg">
              Ini halaman Days
            </div>
          </Link>
          <Link
            className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20"
            href={'/product'}
          >
            <h3 className="text-2xl font-bold">Product</h3>
            <div className="text-lg">
              Ini halaman Products
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}
