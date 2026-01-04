interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function Section({ children, id, className = '' }: SectionProps) {
  return (
    <section id={id} className={className}>
      <div className="w-[64rem] mx-auto">
        {children}
      </div>
    </section>
  );
}

