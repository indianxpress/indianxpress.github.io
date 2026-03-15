import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { ChevronDown } from "lucide-react";

const languages = [
  { code: "en", country: "GB", label: "English" },
  { code: "fr", country: "FR", label: "Français" },
  { code: "de", country: "DE", label: "Deutsch" },
  { code: "es", country: "ES", label: "Español" },
  { code: "it", country: "IT", label: "Italiano" },
  { code: "nl", country: "NL", label: "Nederlands" },
  { code: "pt", country: "PT", label: "Português" },
  { code: "pl", country: "PL", label: "Polski" },
  { code: "sk", country: "SK", label: "Slovenčina" },
  { code: "cs", country: "CZ", label: "Čeština" },
  { code: "ru", country: "RU", label: "Русский" },
  { code: "ar", country: "SA", label: "العربية" },
  { code: "zh-CN", country: "CN", label: "中文" },
  { code: "ja", country: "JP", label: "日本語" },
  { code: "ko", country: "KR", label: "한국어" },
  { code: "hi", country: "IN", label: "हिन्दी" },
  { code: "tr", country: "TR", label: "Türkçe" }
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang) => {

    document.cookie = `googtrans=/en/${lang}`;
    document.cookie = `googtrans=/en/${lang};domain=${window.location.hostname};path=/`;

    window.location.reload();
  };

  return (
    <div className="relative">

      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 border px-3 py-2 rounded-lg hover:bg-gray-50"
      >
        🌐 Language
        <ChevronDown size={16} />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50 max-h-72 overflow-y-auto">

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