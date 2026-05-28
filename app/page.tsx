export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            GitOps Thesis — BookStore
          </h1>
          <p className="text-gray-500 text-sm">
            Deployed via GitOps pipeline with Argo CD + k3s
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="text-2xl font-bold text-blue-600 mb-1">Argo CD</div>
            <div className="text-sm text-gray-500">GitOps Engine</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="text-2xl font-bold text-green-600 mb-1">k3s</div>
            <div className="text-sm text-gray-500">Kubernetes Cluster</div>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="text-2xl font-bold text-purple-600 mb-1">FastAPI</div>
            <div className="text-sm text-gray-500">Backend API</div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            API Endpoints
          </h2>
          <div className="space-y-2 font-mono text-sm">
            <div className="flex items-center gap-3">
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">GET</span>
              <span className="text-gray-600">/health — health check</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold">GET</span>
              <span className="text-gray-600">/books — list all books</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-semibold">POST</span>
              <span className="text-gray-600">/books — create a book</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs font-semibold">PUT</span>
              <span className="text-gray-600">/books/&#123;id&#125; — update a book</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs font-semibold">DEL</span>
              <span className="text-gray-600">/books/&#123;id&#125; — delete a book</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
