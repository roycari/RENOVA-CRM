
import { useState } from "react";

const mockProspects = [
  {
    id: 1,
    name: "Carlos Ramírez",
    status: "Interesado",
    lastContact: "2025-06-22",
    notes: "Le gustó la oportunidad, pidió info del pack 7X."
  },
  {
    id: 2,
    name: "María Fernanda",
    status: "Seguimiento",
    lastContact: "2025-06-20",
    notes: "Tiene dudas sobre la compensación, agendar Zoom."
  }
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-neutral-800 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Panel de Seguimiento RENÖVA+</h1>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
          <h2 className="text-xl font-semibold mb-2">Prospectos</h2>
          <ul className="space-y-2">
            {mockProspects.map((p) => (
              <li
                key={p.id}
                onClick={() => setSelected(p)}
                className="cursor-pointer p-3 rounded-xl bg-white/5 hover:bg-white/20"
              >
                <div className="font-bold text-lg">{p.name}</div>
                <div className="text-sm text-gray-300">{p.status} - Último contacto: {p.lastContact}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 shadow-xl">
          {selected ? (
            <>
              <h2 className="text-xl font-semibold mb-2">Detalle de seguimiento</h2>
              <p><strong>Nombre:</strong> {selected.name}</p>
              <p><strong>Estado:</strong> {selected.status}</p>
              <p><strong>Último contacto:</strong> {selected.lastContact}</p>
              <p className="mt-2"><strong>Notas:</strong></p>
              <p className="text-sm text-gray-300">{selected.notes}</p>
            </>
          ) : (
            <p className="text-gray-400">Selecciona un prospecto para ver detalles.</p>
          )}
        </div>
      </div>
    </div>
  );
}
