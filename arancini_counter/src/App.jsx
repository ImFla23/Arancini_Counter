import Card from "./components/Card.jsx";
import { functions } from "../database/appwrite.js";
import { Send } from "lucide-react";
import { useState } from "react";
import Arancino from "./assets/Arancino.jsx";

const idSendEmailFunction = import.meta.env.VITE_SEND_EMAIL_FUNCTION_ID;

function App() {
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    try {
      const promise = await functions.createExecution(
        idSendEmailFunction,
        "",
        false,
        "/",
        "POST",
      );
      console.log("Risposta funzione: ", promise.responseBody);
      setLoading(false);
      alert("Allarme inviato, teo stai attento");
    } catch (e) {
      console.error("Errore durante l'esecuzione:", e);
      setLoading(false);
      alert("Errore durante l'invio della mail!");
    }
  };

  return (
    <>
      <div className="min-h-screen flex flex-col gap-6 items-center justify-center overflow-auto bg-linear-to-b from-amber-600 to-orange-800 px-4 py-8">
        <h1 className="text-4xl m-0 md:text-5xl font-bold text-white text-center drop-shadow-lg">
          🍊 Contatore Arancini
        </h1>
        <h3 className="text-xl m-0 text-white/60 font-medium text-center md:text-3xl drop-shadow-md">
          Dai teo ci puoi stupire
        </h3>
        <Card />
        <div className="flex items-center justify-center gap-4 md:gap-8  w-full max-w-md md:max-w-lg px-4 py-3 md:px-8 md:py-10">
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setLoading(true);
              sendEmail();
            }}
            className="border-2 border-orange-300 rounded-full bg-linear-to-br from-orange-100 to-amber-50 backdrop-blur-lg shadow-2xl px-10 py-5 active:scale-85 transition-all duration-300"
          >
            <p className="text-orange-700 text-2xl font-bold">
              {loading ? "Caricamento..." : "🚨 Manda Allarme 🚨"}
            </p>
          </button>
        </div>
      </div>

      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-md transition-all duration-300">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin w-24 h-24 md:w-32 md:h-32">
              <Arancino />
            </div>
            <p className="text-white font-bold text-md animate-pulse text-center">
              Teo... piccolo wolf enjoyer...ti conviene mangiare l'arancino...
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
