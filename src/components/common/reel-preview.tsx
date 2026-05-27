"use client";

import Image from "next/image";
import Script from "next/script";
import { useEffect, useState } from "react";

const reelUrl =
  "https://www.instagram.com/reel/DFNlDrKuGTb/?utm_source=ig_embed&utm_campaign=loading";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export function ReelPreview() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      window.instgrm?.Embeds?.process();
    }
  }, [isOpen]);

  return (
    <>
      <button
        className="group relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-ink text-left shadow-brand outline-none transition duration-300 hover:-translate-y-2 focus-visible:ring-4 focus-visible:ring-orange/35"
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <Image
          className="object-cover object-top transition duration-500 group-hover:scale-105"
          src="/fotos/servicos/capa-reel-limpa.png"
          alt="Video de cuidados veterinarios da All Pet Center 24h"
          fill
          sizes="(min-width: 1024px) 440px, 100vw"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent" />
        <span className="absolute left-6 top-6 rounded-full bg-orange px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white">
          Reel
        </span>
        <span className="absolute left-6 right-6 bottom-6">
          <span className="grid size-16 place-items-center rounded-full bg-white text-xs font-black uppercase tracking-[0.08em] text-orange shadow-lg transition group-hover:scale-110">
            Play
          </span>
          <span className="mt-5 block text-3xl font-black leading-tight text-white">
            Veja um atendimento real da All Pet Center
          </span>
          <span className="mt-3 block text-sm font-semibold leading-6 text-white/72">
            Clique para assistir ao Reel no proprio site.
          </span>
        </span>
      </button>

      {isOpen ? (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-ink/86 px-4 py-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Video do Instagram"
        >
          <div className="relative w-full max-w-[430px]">
            <button
              className="absolute -right-1 -top-14 rounded-full bg-white px-4 py-2 text-sm font-black text-ink shadow-lg"
              onClick={() => setIsOpen(false)}
              type="button"
            >
              Fechar
            </button>
            <div className="max-h-[78vh] overflow-auto rounded-[1.5rem] bg-white p-1 shadow-2xl">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={reelUrl}
                data-instgrm-version="14"
                style={{
                  background: "#fff",
                  border: 0,
                  borderRadius: 3,
                  boxShadow:
                    "0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)",
                  margin: 1,
                  maxWidth: 540,
                  minWidth: 326,
                  padding: 0,
                  width: "calc(100% - 2px)",
                }}
              >
                <a href={reelUrl} target="_blank" rel="noreferrer">
                  Ver essa publicacao no Instagram
                </a>
              </blockquote>
            </div>
            <a
              className="mt-4 block text-center text-sm font-bold text-white/78 underline-offset-4 hover:underline"
              href={reelUrl}
              target="_blank"
              rel="noreferrer"
            >
              Abrir no Instagram
            </a>
          </div>
          <Script
            async
            src="https://www.instagram.com/embed.js"
            strategy="afterInteractive"
            onLoad={() => window.instgrm?.Embeds?.process()}
            onReady={() => window.instgrm?.Embeds?.process()}
          />
        </div>
      ) : null}
    </>
  );
}
