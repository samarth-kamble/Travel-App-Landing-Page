import Camp from "@/components/Camp";
import Feature from "@/components/Feature";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Camp Section */}
      <Camp />
      {/* Guide Section */}
      <Guide />
      {/* Feature Section */}
      <Feature />
      {/* GetApp Section */}
      <GetApp />
    </>
  );
}
