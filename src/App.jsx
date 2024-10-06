import "animate.css"; // Importar Animate.css
import ReservationForm from "./components/ReservationForm";
import { useEffect } from "react";

function App() {
  return (
    <>
      {/* Sección de introducción */}

      <div className="flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat bg-center bg-toystory">
        <h1 className="animate__animated animate__fadeInDown text-8xl font-bold p-4 text-white text-center font-[Winter]">
          Sabores de Ayer
        </h1>
        <p className="animate__animated animate__fadeInUp text-4xl text-white mt-6 text-center font-[Lato] font-bold uppercase">
          Comete tu infancia
        </p>
      </div>

      {/* Sección 1: Historia del Restaurante */}
      <div className="flex flex-col items-center justify-center h-[40vh] bg-blue-900 font-[Lato]">
        <h2 className="animate__delay-3s animate__animated animate__fadeInLeft text-6xl font-bold text-white text-center">
          Volver
        </h2>
        <p className="animate__delay-3s animate__animated animate__fadeInRight wow text-3xl text-white mt-6 text-center w-3/4">
          En Sabores de Ayer conseguirás una experiencia culinaria única
          completamente personalizada
        </p>
      </div>

      {/* Sección 2: Especialidades */}
      <div className="flex flex-col items-center justify-center h-[40vh] bg-blue-800/85 font-[Lato]">
        <h2 className="animate__delay-5s animate__animated animate__fadeInUp text-6xl font-bold text-white text-center">
          ¿Cómo lo hacemos?
        </h2>
        <p className="animate__delay-5s animate__animated animate__fadeIn text-3xl text-center text-white mt-6 w-3/4">
          Para realizar tu reserva, debes responder una serie de preguntas que
          te definen como persona para poder confeccionarte un menú a medida
        </p>
      </div>
      {/* Sección de reserva */}
      <div
        className="flex flex-col items-center justify-center h-full min-h-screen  w-screen bg-blue-600 font-[Lato] p-20"
        id="reservation"
      >
        <h2 className="animate__animated animate__fadeInUp text-6xl font-bold text-white text-center">
          Reserva tu experiencia
        </h2>
        <ReservationForm />
      </div>
    </>
  );
}

export default App;
