import Accordion from "@/components/Accordion";
import Hero from "@/components/Hero";
import Future  from "@/components/Future";
import Pricing from "@/components/Pricing";
import Sales from "@/components/Sales";
import Statistic from "@/components/Statistic";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {

  return (
    <div>
        <Hero/>
        <WhatsAppButton/>
        <Pricing/>
        <Future/>
        <Sales/>
        <Accordion/>
        <Statistic/>
       
    </div>
  );
}
