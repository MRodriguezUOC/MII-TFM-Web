export interface Control {
  mode: string;
  action: string;
  keys: string[];
  note?: string;
}

export interface ControlSection {
  title: string;
  icon: string;
  controls: Control[];
}

export const CONTROLS: ControlSection[] = [
  {
    title: 'Todas las intros',
    icon: '🎬',
    controls: [
      { mode: 'Intros', action: 'Siguiente pantalla', keys: ['N', 'Click'] },
      { mode: 'Intros', action: 'Salir de la intro', keys: ['Esc'] },
    ],
  },
  {
    title: 'General',
    icon: '⚙️',
    controls: [
      { mode: 'Todos los niveles', action: 'Música on/off', keys: ['M'] },
      { mode: 'Todos los niveles', action: 'Sonido on/off', keys: ['S'] },
    ],
  },
  {
    title: 'Nivel Puzzle',
    icon: '🧩',
    controls: [
      { mode: 'Puzzle', action: 'Seleccionar pieza', keys: ['Click'] },
      { mode: 'Puzzle', action: 'Deseleccionar pieza', keys: ['Click'] },
      {
        mode: 'Puzzle',
        action: 'Intercambiar piezas',
        keys: ['Click'],
        note: 'sobre otra pieza cuando hay una seleccionada',
      },
    ],
  },
  {
    title: 'Nivel Plataformas',
    icon: '🏃',
    controls: [
      {
        mode: 'Plataformas',
        action: 'Mover personaje',
        keys: ['⬅️', '➡️', '⬆️', '⬇️'],
      },
      { mode: 'Plataformas', action: 'Saltar', keys: ['Espacio'] },
    ],
  },
];
