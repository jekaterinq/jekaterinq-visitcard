import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-medium text-gray-900">
          Website coming soon
        </h1>

        <p className="mt-4 leading-7 text-gray-500">
          This website is currently under development.
          <br />
          In the meantime, feel free to connect with me on LinkedIn.
        </p>

        <a
          href="https://www.linkedin.com/in/jekaterinq/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
        >
          View LinkedIn Profile
        </a>
      </div>
    </main>
  );
}