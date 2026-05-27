import Image from "next/image";
import { contact, navLinks } from "@/data/site-content";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          className="relative block h-12 w-32 overflow-hidden rounded-md bg-ink"
          href="#inicio"
          aria-label="All Pet Center 24h"
        >
          <Image
            className="object-contain"
            src="/fotos/marca/logo-allpet.png"
            alt="Logo All Pet Center 24h"
            fill
            priority
            sizes="128px"
          />
        </a>

        <div className="hidden items-center gap-7 text-sm font-bold text-foreground/70 md:flex">
          {navLinks.map((link) => (
            <a className="transition hover:text-orange" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            className="social-nav"
            href={contact.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir WhatsApp da All Pet Center 24h"
          >
            <Image
              className="object-contain"
              src="/fotos/marca/whatsapp.png"
              alt=""
              fill
              sizes="20px"
            />
          </a>
          <a
            className="social-nav"
            href={contact.instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Abrir Instagram da All Pet Center 24h"
          >
            <Image
              className="object-contain"
              src="/fotos/marca/instagram.png"
              alt=""
              fill
              sizes="20px"
            />
          </a>
          <a className="nav-cta" href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            Agendar
          </a>
        </div>
      </nav>
    </header>
  );
}
