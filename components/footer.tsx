export function Footer() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row px-4 md:px-8 max-w-screen-2xl">
        <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Built with Next.js, Tailwind CSS, and
          Shadcn UI.
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Ashunar0"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href="https://x.com/aka_dev_ex"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4"
          >
            X (Twitter)
          </a>
          <a
            href="https://zenn.dev/ashunar0"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium underline underline-offset-4"
          >
            Zenn
          </a>
        </div>
      </div>
    </footer>
  );
}
