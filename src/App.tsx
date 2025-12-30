import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import EventGrid from "./Components/EventGrid";
import EventTypePanel from "./Components/EventTypePanel";
import LocationSelector from "./Components/LocationSelector";
import SearchEvent from "./Components/SeacrhEvent";
import { Menu } from "lucide-react";

function App() {
  const [selectedtype, setSelectedType] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#0B1120]">
        <div className="grid grid-rows-[60px_1fr] lg:grid-rows-[60px] lg:grid-cols-[250px_1fr] min-h-screen">
          <div className="bg-[#0B1120] row-start-1 lg:col-span-2 flex items-center px-4 border border-slate-700">
            <Navbar />
          </div>

          <div className="bg-[#0B1120] hidden lg:block lg:row-start-2 lg:col-start-1 p-4">
            <EventTypePanel
              selectedType={selectedtype}
              onSelectType={setSelectedType}
            />
          </div>

          <div className="bg-[#0B1120] row-start-2 lg:row-start-2 lg:col-start-2 p-4">
            <div className="flex items-center space-x-2">
              <button
                className="lg:hidden p-2 bg-slate-700 rounded-md"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="text-white" />
              </button>

              <LocationSelector
                clickEvent={(location) => setSelectedLocation(location)}
                location={selectedLocation}
              />

              <SearchEvent onSearch={(search) => setSearchTerm(search)} />
            </div>
            {mobileMenuOpen && (
              <div className="lg:hidden mt-2 p-4 bg-[#0B1120] border border-slate-700 rounded-md">
                <EventTypePanel
                  selectedType={selectedtype}
                  onSelectType={(type) => {
                    setSelectedType(type);
                    setMobileMenuOpen(false);
                  }}
                />
              </div>
            )}

            <EventGrid
              selectedType={selectedtype}
              selectedLocation={selectedLocation}
              searchTerm={searchTerm}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
