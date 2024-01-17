# React state
En esta lección hemos aprendido a usar el estado de un componente para poder modificarlo y que se refleje en la vista.

Cada vez que el estado de un componente cambia, React vuelve a ejecutar el método render para actualizar la vista. (Desmonta el componente y vuelve a montarlo).

El estado es privado para cada componente.

El estado solo se puede modificar usando el método setState (setCount, setName, etc).

Recordemos cómo importar el hook useState e inicializar el estado:
```jsx
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
 ...
```