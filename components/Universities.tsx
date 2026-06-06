'use client'

export function Universities() {
  const universities = [
    { name: 'JNTUH', color: 'bg-blue-100 text-blue-700 border-blue-300' },
    { name: 'JNTUK', color: 'bg-purple-100 text-purple-700 border-purple-300' },
    { name: 'OU', color: 'bg-green-100 text-green-700 border-green-300' },
    { name: 'KU', color: 'bg-orange-100 text-orange-700 border-orange-300' },
    { name: 'ANU', color: 'bg-pink-100 text-pink-700 border-pink-300' },
    { name: 'VTU', color: 'bg-indigo-100 text-indigo-700 border-indigo-300' },
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-slate-600 font-semibold mb-8 text-sm uppercase tracking-wide">
          Students from top universities
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          {universities.map((uni, index) => (
            <div
              key={index}
              className={`px-6 py-3 rounded-full border-2 font-bold text-sm transition-all hover:shadow-lg ${uni.color}`}
            >
              {uni.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
