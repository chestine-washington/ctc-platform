import type { Metadata } from "next";
import { NotFoundView } from "@/components/shared/not-found-view";

// Standalone, with no site header or footer: nothing competes with getting the visitor
// somewhere useful. Next also marks every 404 response noindex.
export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <main className="min-h-screen">
      <NotFoundView area="site" />
    </main>
  );
}
