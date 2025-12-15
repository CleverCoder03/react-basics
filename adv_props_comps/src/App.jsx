import "./App.css";
import BasicProps from "./components/BasicProps";
import ChildrenProps from "./components/ChildrenProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";
import ThemeToggler from "./components/ThemeToggler";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  return <nav className={`sticky top-0 z-50 shadow-md`}>
    <div>
      <div>
        {sections.map((section) => (
          <button className={`px-4 py-2 rounded-lg font-medium bg-blue-600 hover:bg-blue-800 text-white mr-2 mt-2`} key={section.id}>
            <span className="mr-2">{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </div>
  </nav>;
}

function AppContent() {
  return <div className={`min-h-screen bg-gray-800`}>
    <Navigation />
    <div className="mx-auto px-4 py-8 text-white">
      <header>
        <h1>React props explained</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, vero perferendis ipsum similique pariatur iste quae rem eligendi aliquid omnis?</p>
      </header>
      <div className="space-y-8">
        <div id="basic" className="scroll-mt-200">
          <BasicProps />
        </div>
        <div id="children" className="scroll-mt-200">
          <ChildrenProps />
        </div>
        <div id="complex" className="scroll-mt-200">
          <ComplexProps />
        </div>
        <div id="ref" className="scroll-mt-200">
          <RefProps />
        </div>
        <div id="theme" className="scroll-mt-200">
          <ThemeToggler />
        </div>
      </div>
      <footer>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae id iste dolores.</h2>
      </footer>
    </div>
  </div>;
}

function App() {
  return <AppContent />;
}

export default App;
