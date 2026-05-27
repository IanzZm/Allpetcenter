import Image from "next/image";
import { services } from "@/data/site-content";

export function ServicesSection() {
  return (
    <section id="servicos" className="section-brown">
      <div className="paw-soft absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="text-center">
          <p className="section-badge light">Servicos</p>
          <h2 className="mx-auto mt-4 max-w-2xl text-4xl font-black leading-tight text-white sm:text-5xl">
            Nossos servicos veterinarios
          </h2>
        </div>

        <div className="mt-11 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <article className="service-photo-card" key={service.title}>
              <div className="relative h-[228px] overflow-hidden rounded-lg">
                <Image
                  className="object-cover transition duration-500 hover:scale-105"
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 290px, (min-width: 768px) 50vw, 100vw"
                  style={{ objectPosition: service.imagePosition ?? "top" }}
                />
              </div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
