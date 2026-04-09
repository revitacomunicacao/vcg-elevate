import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 24, suffix: "+", label: "Anos de Atuação" },
  { value: 500, suffix: "+", label: "Clientes Atendidos" },
  { value: 1200, suffix: "+", label: "Casos Resolvidos" },
  { value: 98, suffix: "%", label: "Satisfação dos Clientes" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center">
      <div className="font-serif text-4xl md:text-5xl font-bold text-secondary mb-2">
        {count.toLocaleString("pt-BR")}{suffix}
      </div>
    </div>
  );
};

const ProvaSocial = () => {
  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
            Números que Falam por Nós
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label}>
              <Counter target={stat.value} suffix={stat.suffix} />
              <p className="text-center text-sm text-primary-foreground/70 font-sans mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
