import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import fountain from "../assets/fountain.png";

export default function ServicesAcc({ services }) {
  return (
    <Accordion collapsible>
      {services.map((service) => {
        return (
          <AccordionItem key={service.title} value={service.title}>
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center gap-5">
                <img src={service.icon.src} alt="fountain" className="w-10" />
                <h3 className="text-2xl">{service.title}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>{service.parag}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
