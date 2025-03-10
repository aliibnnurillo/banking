import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export const dynamic = "force-dynamic";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn={firstName: 'Nurillo' , lastName: 'JSM'}
  return (
    <main className="flex h-screen w-fll font-inter">
      <Sidebar user={loggedIn}  />
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
          <div>
            <MobileNav user={loggedIn}/>
          </div>
        </div>
      {children}
      </div>
    </main>
  );
}
