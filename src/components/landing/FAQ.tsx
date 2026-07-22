import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/mock-data";

export function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <div className="inline-flex rounded-full glass px-3 py-1 text-xs text-muted-foreground">Questions</div>
          <h2 className="mt-4 text-4xl tracking-tight md:text-5xl">Frequently <span className="font-display italic text-gradient">asked</span></h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 glass rounded-2xl px-4">
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left text-base font-medium">{f.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}