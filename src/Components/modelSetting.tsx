import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  use,
} from "react";
import { GoSettings } from "react-icons/go";

const google_language = {
  af: "afrikaans",
  sq: "albanian",
  am: "amharic",
  ar: "arabic",
  hy: "armenian",
  az: "azerbaijani",
  eu: "basque",
  be: "belarusian",
  bn: "bengali",
  bs: "bosnian",
  bg: "bulgarian",
  ca: "catalan",
  ceb: "cebuano",
  ny: "chichewa",
  "zh-cn": "chinese (simplified)",
  "zh-tw": "chinese (traditional)",
  co: "corsican",
  hr: "croatian",
  cs: "czech",
  da: "danish",
  nl: "dutch",
  en: "english",
  eo: "esperanto",
  et: "estonian",
  tl: "filipino",
  fi: "finnish",
  fr: "french",
  fy: "frisian",
  gl: "galician",
  ka: "georgian",
  de: "german",
  el: "greek",
  gu: "gujarati",
  ht: "haitian creole",
  ha: "hausa",
  haw: "hawaiian",
  iw: "hebrew",
  he: "hebrew",
  hi: "hindi",
  hmn: "hmong",
  hu: "hungarian",
  is: "icelandic",
  ig: "igbo",
  id: "indonesian",
  ga: "irish",
  it: "italian",
  ja: "japanese",
  jw: "javanese",
  kn: "kannada",
  kk: "kazakh",
  km: "khmer",
  ko: "korean",
  ku: "kurdish (kurmanji)",
  ky: "kyrgyz",
  lo: "lao",
  la: "latin",
  lv: "latvian",
  lt: "lithuanian",
  lb: "luxembourgish",
  mk: "macedonian",
  mg: "malagasy",
  ms: "malay",
  ml: "malayalam",
  mt: "maltese",
  mi: "maori",
  mr: "marathi",
  mn: "mongolian",
  my: "myanmar (burmese)",
  ne: "nepali",
  no: "norwegian",
  or: "odia",
  ps: "pashto",
  fa: "persian",
  pl: "polish",
  pt: "portuguese",
  pa: "punjabi",
  ro: "romanian",
  ru: "russian",
  sm: "samoan",
  gd: "scots gaelic",
  sr: "serbian",
  st: "sesotho",
  sn: "shona",
  sd: "sindhi",
  si: "sinhala",
  sk: "slovak",
  sl: "slovenian",
  so: "somali",
  es: "spanish",
  su: "sundanese",
  sw: "swahili",
  sv: "swedish",
  tg: "tajik",
  ta: "tamil",
  te: "telugu",
  th: "thai",
  tr: "turkish",
  uk: "ukrainian",
  ur: "urdu",
  ug: "uyghur",
  uz: "uzbek",
  vi: "vietnamese",
  cy: "welsh",
  xh: "xhosa",
  yi: "yiddish",
  yo: "yoruba",
  zu: "zulu",
};

const googleArray = Object.entries(google_language).map(([key, value]) => {
  return { modifiedKey: key.toUpperCase(), modifiedValue: value.toLowerCase() };
});

type ModelSettingType = {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
  model: string;
  setModel: React.Dispatch<React.SetStateAction<string>>;
};

export const ModalContext = createContext<ModelSettingType>({
  language: "none",
  setLanguage: () => {},
  model: "base",
  setModel: () => {},
});

export default function ModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguage] = useState<string>("none");
  const [model, setModel] = useState<string>("base");

  return (
    <ModalContext.Provider value={{ language, setLanguage, model, setModel }}>
      {children}
    </ModalContext.Provider>
  );
}

export const ModelSetting = () => {
  const { language, setLanguage, model, setModel } = useContext(ModalContext);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedLanguage: string = event.target.value;
    setLanguage(selectedLanguage);
  };

  const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectModel: string = event.target.value;
    setModel(selectModel);
  };

  return (
    <>
      <label htmlFor="my-modal-4" className="btn">
        <GoSettings className="text-3xl" />
      </label>
      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-center text-3xl">Set your configuration</h3>
          <p className="py-4">OpenAI Whisper model</p>
          <select
            className="select-bordered select w-full max-w-xs"
            value={model}
            onChange={handleModelChange}
          >
            <option value={"tiny"}>tiny</option>
            <option value={"base"}>base (reccommend)</option>
            <option value={"small"}>small</option>
            <option value={"medium"}>medium</option>
            <option value={"large"}>large</option>
          </select>
          <p className="py-4">Target language</p>
          <select
            className="select-bordered select w-full max-w-xs"
            value={language}
            onChange={handleLanguageChange}
          >
            <option value={"none"}>none</option>
            {googleArray.map((item, key) => {
              return (
                <option value={item.modifiedKey} key={key}>
                  {item.modifiedValue}
                </option>
              );
            })}
          </select>
        </label>
      </label>
    </>
  );
};
