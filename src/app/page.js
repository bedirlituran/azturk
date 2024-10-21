import Accordion from "@/components/Accordion";
import Hero from "@/components/Hero";
import Future  from "@/components/Future";
import Pricing from "@/components/Pricing";
import Sales from "@/components/Sales";
import Statistic from "@/components/Statistic";
import ChatBot from "@/components/ChatBot";

export default function Home() {

  return (
    <div>
        <Hero/>
        <ChatBot/>
        <Pricing/>
        <Future/>
        <Sales/>
        <Accordion/>
        <Statistic/>
    </div>
  );
}
