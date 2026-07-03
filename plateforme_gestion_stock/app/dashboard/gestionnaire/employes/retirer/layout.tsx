import Link from "next/link";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-gray-50 px-4 py-6 md:px-8 lg:px-12">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-xl p-6 md:p-8">
        {children}
          <div className="mt-6">
                <Link
                    href="/dashboard/gestionnaire"
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                >
                    ← Retour au Dashboard
                </Link>
            </div>
      </div>
    </div>
  );
}
