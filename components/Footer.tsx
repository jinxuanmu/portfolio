export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="container-page flex flex-col gap-3 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Jinxuan Mu</div>
        <div className="flex items-center gap-4">
          <a className="hover:text-text" href="#home">
            Back to top
          </a>
          <a className="hover:text-text" href="/resume.pdf" download>
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}

