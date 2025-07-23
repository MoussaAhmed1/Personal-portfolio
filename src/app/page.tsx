import HomeHero from "@/components/home/hero-home";
import Header from "@/components/layout/Header";

export default function Home() {

  return (
    <>
      <Header />
      <main className="relative flex pt-20 flex-col items-center justify-center bg-[#edfcd5]">
        <HomeHero/>
      </main>
    </>
  );
}
