export default function Home() {
  return (
    <div className="relative flex flex-1 items-center justify-center overflow-hidden bg-background px-6 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.22),transparent_60%)] blur-2xl" />
        <div className="absolute -bottom-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[48px_48px] opacity-40 dark:opacity-20" />
      </div>

      <main className="relative w-full max-w-2xl">
        <div className="rounded-2xl border border-black/10 bg-white/70 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.12)] backdrop-blur-sm dark:border-white/10 dark:bg-black/30">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/3 px-3 py-1 text-xs font-medium text-foreground dark:border-white/10 dark:bg-white/6">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-2 animate-ping rounded-full bg-foreground/60" />
              <span className="relative inline-flex size-2 rounded-full bg-foreground" />
            </span>
            En construcción
          </div>

          <h1 className="mt-6 font-heading text-balance text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
            Estamos construyendo algo que vale tu tiempo.
          </h1>

          <p className="mt-4 text-pretty text-base leading-7 text-foreground/75 sm:text-lg">
            Este sitio está en desarrollo. Muy pronto vas a poder explorar una experiencia más rápida, clara y útil.
          </p>

          <div className="mt-8 grid gap-3 rounded-xl border border-black/10 bg-white/60 p-4 dark:border-white/10 dark:bg-black/20">
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex size-2 rounded-full bg-foreground/70" />
              <div className="min-w-0">
                <p className="font-medium text-foreground">Estamos afinando la base</p>
                <p className="text-sm leading-6 text-foreground/70">
                  Diseño, rendimiento y estructura.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="mt-1 inline-flex size-2 rounded-full bg-foreground/40" />
              <div className="min-w-0">
                <p className="font-medium text-foreground">Luego, lo bueno</p>
                <p className="text-sm leading-6 text-foreground/70">
                  Funcionalidades y contenido.
                </p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-xs text-foreground/60">
            Gracias por tu paciencia. Estamos preparando una primera versión.
          </p>
        </div>
      </main>
    </div>
  );
}
