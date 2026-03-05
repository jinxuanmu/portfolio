import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="container-page py-20">
        <div className="card p-8">
          <div className="tag">Not found</div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight">Page not found</h1>
          <p className="mt-3 text-sm text-muted">The page you&apos;re looking for doesn&apos;t exist.</p>
          <div className="mt-6">
            <Link className="btn btn-secondary" href="/">
              Go home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

