import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const PillsSectionWrapper = ({ children, className }: Props) => {
  return (
    <section
      className={cn(
        "relative right-1/2 left-1/2 -mx-[50dvw] w-screen overflow-x-hidden",
        className,
      )}
    >
      <div className="bg-primary w-full">{children}</div>
    </section>
  );
};
export default PillsSectionWrapper;
