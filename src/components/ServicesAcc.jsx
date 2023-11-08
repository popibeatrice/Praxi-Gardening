import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ServicesAcc({ services }) {
  return (
    <Accordion type="single" collapsible>
      {services.map((service, index) => {
        return (
          <AccordionItem key={index + 1} value={index + 1}>
            <AccordionTrigger className="text-left hover:no-underline">
              <div className="flex items-center gap-5">
                <img
                  src={service.image}
                  alt="service icon"
                  className="w-10 lg:w-12"
                />
                <h3 className="text-2xl lg:text-3xl">{service.serviceName}</h3>
              </div>
            </AccordionTrigger>
            <AccordionContent>{service.serviceDescription}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
