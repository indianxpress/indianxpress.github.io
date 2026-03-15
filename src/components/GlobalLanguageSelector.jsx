import { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { languages } from "../utils/languages";
import { Globe } from "lucide-react";

export default function GlobalLanguageSelector() {

  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {

    document.cookie = `googtrans=/en/${lang}`;
    document.cookie = `googtrans=/en/${lang};domain=${window.location.hostname};path=/`;

    localStorage.setItem("preferredLanguage", lang);

    window.location.reload();
  };

  useEffect(() => {

    const savedLang = localStorage.getItem("preferredLanguage");

    if (!savedLang) {

      const browserLang = navigator.language.substring(0,2);

      document.cookie = `googtrans=/en/${browserLang}`;
      document.cookie = `googtrans=/en/${browserLang};domain=${window.location.hostname};path=/`;

    }

  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50">

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-blue-700 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-800"
      >
        <Globe size={18}/>
        Language
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute bottom-14 right-0 w-56 bg-white border rounded-lg shadow-xl max-h-80 overflow-y-auto">

          {languages.map((lang) => (

            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className="flex items-center gap-3 w-full px-4 py-2 hover:bg-gray-100"
            >

              <ReactCountryFlag
                countryCode={lang.country}
                svg
                style={{ width: "1.3em", height: "1.3em" }}
              />

              {lang.label}

            </button>

          ))}

        </div>
      )}

    </div>
  );
}