import { Logos3 } from "@/components/ui/logos3";
import lpuLogo from "@/assets/logos/lpu.png";
import chandigarhLogo from "@/assets/logos/cu.png";
import graphicEraLogo from "@/assets/logos/graphic-era.png";
import cgcLogo from "@/assets/logos/cgc-jhanjera.png";
import ieeeLogo from "@/assets/logos/ieee.png";
import naacLogo from "@/assets/logos/naac.png";
import nirfLogo from "@/assets/logos/nirf.png";
import qsLogo from "@/assets/logos/qs.png";

const FeaturedOn = () => {
  const institutionLogos = [
    {
      id: "logo-1",
      description: "LPU - Lovely Professional University",
      image: lpuLogo,
      className: "h-16 sm:h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-2",
      description: "Chandigarh University",
      image: chandigarhLogo,
      className: "h-16 sm:h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-3",
      description: "Graphic Era Hill University",
      image: graphicEraLogo,
      className: "h-16 sm:h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-4",
      description: "CGC Jhanjeri",
      image: cgcLogo,
      className: "h-16 sm:h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-5",
      description: "IEEE",
      image: ieeeLogo,
      className: "h-16 sm:h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-6",
      description: "NAAC",
      image: naacLogo,
      className: "h-16 sm:h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-7",
      description: "NIRF",
      image: nirfLogo,
      className: "h-16 sm:h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300",
    },
    {
      id: "logo-8",
      description: "QS World University Rankings",
      image: qsLogo,
      className: "h-16 sm:h-20 md:h-24 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300",
    },
  ];

  return (
    <Logos3 
      heading="Featured On" 
      logos={institutionLogos}
      className="bg-light-bg py-12 sm:py-16 md:py-20"
    />
  );
};

export default FeaturedOn;
