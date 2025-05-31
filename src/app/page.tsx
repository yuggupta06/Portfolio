import Hero from "@/components/Hero";
import AbouMe from "@/components/AbouMe";
import { BentoGridDemo } from "@/components/ui/Bento-Grid/bentoDemo";
import { CardHoverEffectDemo } from "@/components/ServiceSection";
import Footer from "@/components/footer";

export default function Home() {
  return (

      <div className="max-full mx-auto antialiased pt-4 relative">
        <section className="w-full  h-screen  flex items-center justify-center ">
          <Hero />
        </section>
        <section id="about" className="w-full h-screen  flex items-center justify-center -my-20 sm:my-0 ">
          <AbouMe />
          </section>
          <section id="projects" className="w-full px-10 py-50 sm:px-15 sm:py-30 lg:py-20   flex items-center justify-center">
            <BentoGridDemo/>
          </section>
          <section id="services" className="w-full h-screen   flex items-center justify-center mt-[40rem] md:mt-20">
            <CardHoverEffectDemo />
          </section>
          <section id="contact" className="w-full mt-[35rem] md:mt-20 lg:mt-40 xl:mt-30 px-10  " >
            <Footer />
          </section>
          
      </div>
    
  );
}
