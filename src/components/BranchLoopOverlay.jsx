import {
  Building2,
  CircuitBoard,
  Code2,
  Cpu,
  Factory,
  FlaskConical,
  Hammer,
  Microscope,
  PackageSearch,
  Settings2,
  Smartphone,
  Wrench,
} from "lucide-react";
import { LogoLoop } from "@/components/LogoLoop";
import { ScrollReveal } from "@/components/ScrollReveal";

const branchLogos = [
  { label: "Software", icon: Code2 },
  { label: "KI & Daten", icon: Cpu },
  { label: "Maschinenbau", icon: Wrench },
  { label: "Produktion", icon: Factory },
  { label: "Elektronik", icon: CircuitBoard },
  { label: "Medizintechnik", icon: Microscope },
  { label: "Chemie", icon: FlaskConical },
  { label: "Prototypen", icon: Hammer },
  { label: "Produktentwicklung", icon: PackageSearch },
  { label: "Mobile Apps", icon: Smartphone },
  { label: "Anlagenbau", icon: Building2 },
  { label: "Prozessentwicklung", icon: Settings2 },
];

export function BranchLoopOverlay() {
  return (
    <ScrollReveal
      className="pointer-events-none sticky top-28 z-30 -mx-6 pt-8 sm:-mx-10 lg:-mx-14"
    >
      <div className="grid gap-1.5 md:hidden">
        <LogoLoop items={branchLogos} duration={42} reverse />
        <LogoLoop items={[...branchLogos].reverse()} duration={42} />
      </div>
      <LogoLoop
        items={branchLogos}
        duration={42}
        className="hidden md:block"
      />
    </ScrollReveal>
  );
}
