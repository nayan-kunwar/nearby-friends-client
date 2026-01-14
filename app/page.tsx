import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          {/* Simple Map Pin Logo Icon */}
          <div className="bg-indigo-600 p-2 rounded-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900 tracking-tight">NearFriend</span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/register"
            className="text-sm font-semibold bg-gray-900 text-white px-4 py-2.5 rounded-full hover:bg-gray-800 transition-colors"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center px-4 pt-10 pb-20 sm:pt-20 text-center max-w-5xl mx-auto">

        {/* Radar Animation Visual */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-8">
          <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-200 opacity-75 animate-ping"></span>
          <span className="relative inline-flex rounded-full h-12 w-12 bg-indigo-500 items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </span>
        </div>

        {/* Hero Section */}
        <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          Find your squad, <br className="hidden sm:block" />
          <span className="text-indigo-600">wherever you are.</span>
        </h1>

        <p className="max-w-2xl text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed">
          See which friends are hanging out nearby in real-time.
          Spontaneous meetups made simple, private, and fun.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Get Started
            <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-gray-700 bg-white border border-gray-200 rounded-full hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
          >
            Sign In
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-24 w-full text-left">
          <FeatureCard
            title="Real-time Location"
            desc="See live locations of friends who have shared their status with you."
            icon={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            }
          />
          <FeatureCard
            title="Privacy First"
            desc="You control who sees you. Toggle 'Ghost Mode' whenever you need space."
            icon={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            }
          />
          <FeatureCard
            title="Instant Alerts"
            desc="Get notified when a close friend enters your neighborhood."
            icon={
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            }
          />
        </div>
      </main>
    </div>
  );
}

// Helper component for features
function FeatureCard({ title, desc, icon }: { title: string, desc: string, icon: any }) {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 text-indigo-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {icon}
        </svg>
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}