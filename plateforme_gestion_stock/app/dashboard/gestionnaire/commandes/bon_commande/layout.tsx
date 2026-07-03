import { ReactNode } from "react";
import Link from "next/link";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="p-6 bg-white min-h-screen">
      {children}

           <div className="space-y-6">
           {/* Bouton Retour */}
          <Link
            href="/dashboard/gestionnaire"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
          >
            ← Retour au Dashboard
          </Link>
        </div>
    </div>
  );
}
