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
          <h1 className="mt-4 text-2xl font-bold tracking-tight">Case study not found</h1>
          <p className="mt-3 text-sm text-muted">
            The case study you&apos;re looking for doesn&apos;t exist (or hasn&apos;t been added yet).
          </p>
          <div className="mt-6">
            <Link className="btn btn-secondary" href="/#case-studies">
              Back to case studies
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

