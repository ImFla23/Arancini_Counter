import { useState } from "react";
import { databases } from "../../database/appwrite";
import { useEffect } from "react";

export default function Card() {
  let [arancino, setArancino] = useState(0);

  const DATABASE_ID = import.meta.env.VITE_DATABASE_ID;
  const ARANCINI_TABLE = import.meta.env.VITE_ARANCINI_TABLE_ID;
  const DOCUMENT_ARANCINI_ID = import.meta.env.VITE_DOCUMENT_MANGIATI_ID;

   useEffect(() => {
    async function checkArancini() {
        try {
            if (arancino > 0) return;
            const docs = await databases.listDocuments(DATABASE_ID, ARANCINI_TABLE)
            const giaMangiati = docs.documents[0]
            setArancino(giaMangiati.mangiati)
            console.log("ho chiamato la lista ", giaMangiati)
        } catch (e) {
            console.error("error in listing arancini: ", e)
            alert("C'è stato un errore durante il caricamento della pagina")
        }
    }
    checkArancini()
  }, [])

  useEffect(() => {
      async function arancinoUpdate() {
        try {
            if (arancino === 0) return;
            await databases.updateDocument(
              DATABASE_ID,
              ARANCINI_TABLE,
              DOCUMENT_ARANCINI_ID,
              {"mangiati" : parseInt(arancino)},
            );
            console.log("ho chiamato")
        } catch (e) {
            console.error("error in updating arancino: ", e)
            alert("C'è stato un errore")
        } 
      }

      arancinoUpdate()

  }, [arancino])

 

  return (
    <div className="flex items-center justify-center border border-gray-300 rounded-2xl bg-white/90 backdrop-blur-xl shadow-sm w-[65%] h-[50%]">
      <button
        className="border border-slate-300 rounded-2xl cursor-pointer p-3 hover:bg-slate-400 transition-all duration-300"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setArancino((arancino += 1));
        }}
      >
        <p>{arancino}</p>
      </button>
    </div>
  );
}
