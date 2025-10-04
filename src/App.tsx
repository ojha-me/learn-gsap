import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const examples = [
    { path: '/gsap-to', title: 'GSAP To', description: 'Basic animations with .to() method' },
    { path: '/gsap-from', title: 'GSAP From', description: 'Animate elements from specific states' },
    { path: '/gsap-from-to', title: 'GSAP FromTo', description: 'Control both start and end states' },
    { path: '/gsap-target-with-refs', title: 'GSAP with Refs', description: 'Using React refs for better performance' },
    { path: '/gsap-stagger', title: 'GSAP Stagger', description: 'Create sequential animations' },
    { path: '/gsap-timelines', title: 'GSAP Timelines', description: 'Complex animation sequences' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">GSAP Animation Examples</h1>
          <p className="text-gray-600">
            A collection of examples showcasing different GSAP animation techniques
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {examples.map((example) => (
            <button
              key={example.path}
              onClick={() => navigate(example.path)}
              className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 text-left"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {example.title}
              </h2>
              <p className="text-gray-600 text-sm">
                {example.description}
              </p>
              <div className="mt-4 text-indigo-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                View Example →
              </div>
            </button>
          ))}
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>Click on any example to see GSAP animations in action</p>
        </footer>
      </div>
    </div>
  );
};

export default App;