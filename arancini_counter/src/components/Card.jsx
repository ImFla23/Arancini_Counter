import { useState } from "react";
import { databases } from "../../database/appwrite.js";
import { useEffect } from "react";
import Arancino from "../assets/Arancino.jsx";

export default function Card() {
  let [arancino, setArancino] = useState(0);
  const [add, setAdd] = useState(false);
  const [remove, setRemove] = useState(false);

  const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
  const ARANCINI_TABLE = import.meta.env.VITE_ARANCINI_TABLE_ID;
  const DOCUMENT_ARANCINI_ID = import.meta.env.VITE_DOCUMENT_MANGIATI_ID;

  useEffect(() => {
    async function checkArancini() {
      try {
        if (arancino > 0) return;
        const docs = await databases.listDocuments(DATABASE_ID, ARANCINI_TABLE);
        const giaMangiati = docs.documents[0];
        setArancino(giaMangiati.mangiati);
        console.log("ho chiamato la lista ", giaMangiati);
      } catch (e) {
        console.error("error in listing arancini: ", e);
        alert("C'è stato un errore durante il caricamento della pagina");
      }
    }
    checkArancini();
  }, []);

  useEffect(() => {
    async function arancinoUpdate() {
      try {
        await databases.updateDocument(
          DATABASE_ID,
          ARANCINI_TABLE,
          DOCUMENT_ARANCINI_ID,
          { mangiati: parseInt(arancino) },
        );
        console.log("ho chiamato");
      } catch (e) {
        console.error("error in updating arancino: ", e);
        alert("C'è stato un errore");
      }
    }

    arancinoUpdate();
  }, [arancino]);

  return (
    <>
      <div className="flex items-center justify-center gap-4 md:gap-8 border-2 border-orange-300 rounded-3xl bg-linear-to-br from-orange-100 to-amber-50 backdrop-blur-lg shadow-2xl w-full max-w-md md:max-w-lg px-6 py-8 md:px-8 md:py-10">
        <button
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border-2 border-amber-600 rounded-2xl bg-amber-100 hover:bg-amber-200 cursor-pointer transition-all duration-200 font-bold text-xl md:text-2xl text-amber-800 hover:shadow-lg active:scale-90"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            if (arancino === 0) {
              alert("Non puoi togliere meno di 0 arancini, dai SVEGLIA");
              return;
            }
            setRemove(true);
            setTimeout(() => {
              setRemove(false);
            }, 1000);
            setArancino((arancino -= 1));
          }}
        >
          −
        </button>
        <div className="flex items-center justify-center flex-col gap-3">
          <div className="bg-linear-to-br from-orange-300 to-amber-400 border-2 border-orange-600 rounded-full p-3 flex items-center justify-center w-40 h-40 md:w-20 md:h-20 shadow-lg">
            <div
              className={`${add ? "animate-shooth-add" : remove ? "animate-shooth-minus" : ""} `}
            >
              <Arancino />
            </div>
          </div>
          <p className="text-5xl md:text-6xl font-bold text-orange-700 drop-shadow-md">
            {arancino}
          </p>
        </div>
        <button
          className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border-2 border-orange-600 rounded-2xl bg-orange-100 hover:bg-orange-200 cursor-pointer transition-all duration-200 font-bold text-xl md:text-2xl text-orange-800 hover:shadow-lg active:scale-90"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setAdd(true);
            setTimeout(() => {
              setAdd(false);
            }, 1000);
            setArancino((arancino += 1));
          }}
        >
          +
        </button>
      </div>
      <div>
        <p></p>
      </div>
    </>
  );
}
