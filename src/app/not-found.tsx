// src/app/not-found.tsx

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold text-dreamyPink mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-softWhite">Oops! The page you’re looking for doesn’t exist.</p>
      <a href="/" className="mt-6 text-pastelBlue underline">
        Go back home
      </a>
    </div>
  );
}
