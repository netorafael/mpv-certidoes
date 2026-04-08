import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface HelpItem {
  question: string;
  answer: React.ReactNode;
}

interface HelpAccordionProps {
  items: HelpItem[];
  title?: string;
}

const HelpAccordion = ({ items, title = "Dúvidas frequentes" }: HelpAccordionProps) => {
  return (
    <section aria-labelledby="help-section-title">
      <h2
        id="help-section-title"
        className="text-lg font-semibold text-foreground mb-4"
      >
        {title}
      </h2>
      <Accordion type="single" collapsible className="space-y-0 divide-y divide-border border-t border-b border-border">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b-0"
          >
            <AccordionTrigger className="py-4 text-base font-bold text-foreground hover:no-underline text-left [&[data-state=open]]:text-primary">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-4 pt-0 text-sm text-muted-foreground leading-relaxed">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default HelpAccordion;
