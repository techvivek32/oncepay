const logos = [
  { name: 'TechCorp', logo: 'TC' },
  { name: 'FinanceFlow', logo: 'FF' },
  { name: 'RetailPlus', logo: 'RP' },
  { name: 'StartupLab', logo: 'SL' },
];

export default function LogoSlider() {
  return (
    <section className="py-12 bg-white border-y">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-600 font-bold">Trusted by leading companies</p>
        </div>
        <div className="overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {[...logos, ...logos].map((company, index) => (
              <div key={index} className="flex items-center space-x-3 flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">{company.logo}</span>
                </div>
                <span className="text-gray-700 font-semibold text-lg whitespace-nowrap">{company.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}