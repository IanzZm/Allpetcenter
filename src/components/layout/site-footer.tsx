import Image from "next/image";
import { contact } from "@/data/site-content";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footerSection}>
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center">
        <div>
          <div className="relative h-16 w-40 overflow-hidden rounded-md">
            <Image
              className="object-contain"
              src="/fotos/marca/logo-allpet-transparent.png"
              alt="Logo All Pet Center 24h"
              fill
              sizes="160px"
            />
          </div>
          <p className="mt-3 max-w-sm text-sm text-white/62">
            Clinica veterinaria, pet shop, banho e tosa em Parnamirim - RN.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm font-semibold text-white/72 sm:flex-row sm:gap-5">
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer">
            {contact.phoneDisplay}
          </a>
          <a href={contact.instagramUrl} target="_blank" rel="noreferrer">
            @allpetcenter_24h
          </a>
        </div>
      </div>
    </footer>
  );
}
