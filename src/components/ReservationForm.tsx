import React, { useState } from 'react';

const ReservationForm = () => {
  const [step, setStep] = useState(1);
  const [reservation, setReservation] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    seating: '',
    specialRequests: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReservation((prev) => ({ ...prev, [name]: value }));
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return reservation.name.trim() !== '' && reservation.email.trim() !== '' && reservation.guests !== '';
      case 2:
        return reservation.date !== '';
      case 3:
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (isStepValid()) {
      setStep((prev) => prev + 1);
    } else {
      alert('Por favor, complete todos los campos requeridos.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isStepValid()) {
      // Aquí iría la lógica para enviar la reserva al servidor
      console.log('Reserva enviada:', reservation);
    } else {
    }
  };

  return (
    <div className="sm:max-w-4xl mx-auto p-12 m-8 bg-white rounded-lg shadow-lg sm:w-[90%] w-scree">
      <form onSubmit={handleSubmit}>
        {step === 1 && (
          <div>
            <label htmlFor="name" className="block mb-1">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={reservation.name}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border rounded"
            />
            <label htmlFor="email" className="block mb-1">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={reservation.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border rounded"
            />
            <label htmlFor="guests" className="block mb-1">Número de Personas:</label>
            <label className="block mb-1 text-sm">Establecemos un máximo de 5 personas para poder asegurar la calidad de la experiencia y una personalización a la altura</label>
            <select
              id="guests"
              name="guests"
              value={reservation.guests}
              onChange={handleInputChange}
              required
              className="w-full p-2 mb-4 border rounded"
            >
              <option value="">Seleccione</option>
              {[1, 2, 3, 4, 5].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Día de la reserva</h2>
            <label htmlFor="date" className="block mb-1">Fecha:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={reservation.date}
              onChange={handleInputChange}
              required
              min={new Date().toISOString().split('T')[0]} // Only allow dates after today
              className="w-full p-2 mb-4 border rounded"
            />
            <label htmlFor="time" className="block mb-1">El servicio comienza a las 8:00 PM con una duración estimada de 3 horas</label>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Preguntas personales</h2>
            <label htmlFor="specialRequests1" className="block mb-1">¿Dónde creciste?</label>
            <textarea
              id="specialRequests1"
              name="specialRequests"
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded h-24"
              placeholder='Escribe sobre la ciudad que creciste, tus lugares favoritos, tus recuerdos más preciados allí.'
            ></textarea>
            <label htmlFor="specialRequests2" className="block mb-1">¿Actividad favorita de pequeño?</label>
            <textarea
              id="specialRequests2"
              name="specialRequests"
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded h-24"
              placeholder='Puede ser ir al cine, al parque, jugar en aquella plaza con tus amigos, visitar a tus abuelos'
            ></textarea>
            <label htmlFor="specialRequests3" className="block mb-1">¿Tienes algún animal favorito?</label>
            <textarea
              id="specialRequests3"
              name="specialRequests"
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded h-16"
            ></textarea>
            <label htmlFor="specialRequests4" className="block mb-1">Color favorito, o que te recuerde a algo o alguien</label>
            <textarea
              id="specialRequests4"
              name="specialRequests"
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded h-8"
            ></textarea>
            <label htmlFor="specialRequests5" className="block mb-1">¿Canción favorita?</label>
            <textarea
              id="specialRequests5"
              name="specialRequests"
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded h-8"
            ></textarea>
            <label htmlFor="specialRequests6" className="block mb-1">¿Algún olor que te recuerde a alguien, o a algún momento?</label>
            <textarea
              id="specialRequests6"
              name="specialRequests"
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded h-8"
            ></textarea>
            <label htmlFor="specialRequests7" className="block mb-1">¿Había algún juguete que te acompañara durante tu infancia? ¿Varios según las distintas etapas?</label>
            <textarea
              id="specialRequests7"
              name="specialRequests"
              onChange={handleInputChange}
              className="w-full p-2 mb-4 border rounded h-8"
            ></textarea>
          </div>
        )}
        {step === 4 && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Resumen de la reserva</h2>
            <p>
              <strong>Nombre:</strong> {reservation.name}
            </p>
            <p>
              <strong>Correo Electrónico:</strong> {reservation.email}
            </p>
            <p>
              <strong>Fecha:</strong> {reservation.date}
            </p>
            Reserva para {reservation.guests} personas
          </div>
        )}

        <div className="mt-6">
          {step > 1 && step < 4 && (
            <button
              type="button"
              onClick={() => setStep((prev) => prev - 1)}
              className="px-4 py-2 bg-gray-400 text-white rounded mr-4"
            >
              Anterior
            </button>
          )}
          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Siguiente
            </button>
          ) : (
            <div>
            <h3 className='text-center text-white bg-green-500 text-2xl font-bold py-4 px-12 rounded-sm'>
              RESERVA CONFIRMADA
            </h3>
            <p>Te enviaremos un correo electrónico con más información sobre la reserva</p>
          </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
