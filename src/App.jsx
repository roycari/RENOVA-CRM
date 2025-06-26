import { useState } from "react";

const mockProspects = [
  { id: 1, name: "Carlos Ramírez", status: "Interesado", lastContact: "2025-06-22", notes: "Le gustó la oportunidad, pidió info del pack 7X." },
  { id: 2, name: "María Fernanda", status: "Seguimiento", lastContact: "2025-06-20", notes: "Tiene dudas sobre la compensación, agendar Zoom." }
];

export default function App() {
  const [selected, setSelected] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      <h1>RENÖVA+ CRM</h1>
      <div style={{ display: "flex", gap: 20 }}>
        <div style={{ flex: 1 }}>
          <h2>Prospectos</h2>
          <ul>
            {mockProspects.map((p) => (
              <li key={p.id} onClick={() => setSelected(p)} style={{ cursor: "pointer", marginBottom: 10 }}>
                {p.name} - {p.status}
              </li>
            ))}
          </ul>
        </div>
        <div style={{ flex: 1 }}>
          {selected ? (
            <>
              <h2>Detalles</h2>
              <p><strong>Nombre:</strong> {selected.name}</p>
              <p><strong>Estado:</strong> {selected.status}</p>
              <p><strong>Último contacto:</strong> {selected.lastContact}</p>
              <p><strong>Notas:</strong> {selected.notes}</p>
            </>
          ) : (
            <p>Selecciona un prospecto para ver detalles.</p>
          )}
        </div>
      </div>
    </div>
  );
}
