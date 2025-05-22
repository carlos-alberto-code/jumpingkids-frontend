# Documento de Requisitos: Pantalla de Asignaciones de Ejercicios

## 1. Descripción General

La pantalla de "Asignaciones de Ejercicios" es un componente clave de la aplicación de entrenamiento. Funciona como un reproductor de ejercicios que permite a los usuarios ver, ejecutar y completar ejercicios de una rutina asignada. La pantalla se divide en dos áreas principales: un área de trabajo donde se muestra el ejercicio actual seleccionado en detalle, y una lista de ejercicios pendientes que el usuario puede seleccionar para trabajar.

> **Nota importante**: Este documento se enfoca exclusivamente en el contenido principal de la pantalla, asumiendo que esta se integrará en un layout más amplio que ya cuenta con un sidebar y un encabezado general. No incluimos estos elementos en el ámbito de este componente.

## 2. Estructura de Layout

El contenido principal se organiza en una estructura de dos columnas:

- **Columna Principal (65%)**: Muestra el área de trabajo con los detalles del ejercicio seleccionado.
- **Columna Secundaria (35%)**: Contiene un panel de progreso y la lista de ejercicios pendientes.

Para dispositivos móviles, estas columnas se apilarán verticalmente.

## 3. Componentes Necesarios

### 3.1 Componentes Principales

1. **ExerciseWorkArea** (Área de trabajo)
   - Cabecera de ejercicio (título y chips informativos)
   - Visualizador de GIF
   - Panel de descripción e instrucciones
   - Panel de control con temporizador y botones
   - Indicador de calorías quemadas

2. **ExerciseList** (Lista de ejercicios)
   - Componente de progreso general
   - Lista de tarjetas de ejercicios

3. **ProgressIndicator**
   - Barra de progreso visual
   - Contador numérico y porcentaje
   - Panel de calorías quemadas

### 3.2 Componentes Secundarios

1. **ExerciseCard**
   - Miniatura del ejercicio
   - Título
   - Categoría (chip)
   - Duración (chip)
   - Botón de play

2. **TimerController**
   - Display del tiempo
   - Botón de play/pausa
   - Botón de skip

## 4. Estados de la Aplicación

El componente debe administrar los siguientes estados:

1. **currentExercise**: El ejercicio actualmente seleccionado y mostrado en el área de trabajo.
2. **pendingExercises**: Lista de ejercicios pendientes por completar.
3. **completedExercises**: Lista de ejercicios ya completados.
4. **timerRunning**: Estado booleano que indica si el temporizador está en ejecución.
5. **currentTime**: Tiempo actual mostrado en el temporizador.

## 5. Flujo de Usuario

1. El usuario ve la lista de ejercicios pendientes en la columna derecha.
2. Selecciona un ejercicio haciendo clic en el botón de play en alguna ExerciseCard.
3. El ejercicio seleccionado se muestra en el área de trabajo (columna izquierda).
4. El usuario puede:
   - Iniciar/pausar el temporizador
   - Ver el GIF demostrativo y las instrucciones
   - Marcar el ejercicio como completado
5. Al marcar un ejercicio como completado:
   - Se elimina de la lista de pendientes
   - Se actualiza el progreso general
   - Se actualiza el contador de calorías quemadas
6. El usuario puede seleccionar el siguiente ejercicio y repetir el proceso.

## 6. Requisitos Funcionales

1. **Selección de Ejercicio**
   - Al hacer clic en el botón de play de una ExerciseCard, el ejercicio debe cargarse en el área de trabajo.

2. **Temporizador**
   - Debe poder iniciarse, pausarse y reiniciarse.
   - Debe mostrar correctamente el formato MM:SS.

3. **Completar Ejercicio**
   - Al marcar un ejercicio como completado, debe removerse de la lista de pendientes.
   - Debe actualizarse el progreso general y las calorías quemadas.
   - Opcionalmente, debe cargarse automáticamente el siguiente ejercicio en el área de trabajo.

4. **Indicadores de Progreso**
   - El panel de progreso debe mostrar el número de ejercicios completados vs. el total.
   - El indicador de calorías debe sumar correctamente las calorías de los ejercicios completados.

## 7. Requisitos de UI/UX

1. **Estilos y Tema**
   - Utilizar Material UI como biblioteca de componentes.
   - **Utilizar el sistema de temas global** - No hardcodear colores específicos en los componentes.
   - Acceder a los colores mediante el sistema de temas: `theme.palette.primary.main`, `theme.palette.success.main`, etc.
   - Permitir que los componentes hereden automáticamente la paleta de colores global.
   - Implementar bordes redondeados usando las variables del tema: `theme.shape.borderRadius` o múltiplos de ella.

2. **Responsividad**
   - La interfaz debe adaptarse a diferentes tamaños de pantalla.
   - En dispositivos móviles, las columnas deben apilarse.
   - Utilizar los breakpoints del tema: `theme.breakpoints.up('md')`, `theme.breakpoints.down('sm')`, etc.
   - Asegurar que los componentes mantengan su usabilidad en pantallas pequeñas.

3. **Retroalimentación Visual**
   - Proporcionar feedback visual para las acciones (hover en botones, animaciones de transición).
   - Animar la barra de progreso al actualizarse.
   - Utilizar los tiempos de transición definidos en el tema: `theme.transitions.duration.standard`.

## 8. Estructura de Datos

### 8.1 Modelo de Ejercicio
```typescript
interface Exercise {
  id: number;
  title: string;
  category: string;
  duration: string;
  calories: number;
  gifUrl: string;
  description?: string;
  instructions?: string[];
}
```

### 8.2 Estado del Componente
```typescript
interface WorkoutState {
  currentExercise: Exercise | null;
  pendingExercises: Exercise[];
  completedExercises: Exercise[];
  timerRunning: boolean;
  currentTime: string;
}
```

## 9. Diagrama de Componentes

```
WorkoutContainer
│
├── MainContent
│   │
│   ├── ExerciseWorkArea (65%)
│   │   ├── ExerciseHeader
│   │   │   ├── Title
│   │   │   └── InfoChips (calories, duration, category)
│   │   │
│   │   ├── ExerciseViewer
│   │   │   ├── GifDisplay
│   │   │   └── InstructionsPanel
│   │   │
│   │   └── ControlPanel
│   │       ├── TimerController
│   │       └── CompleteButton
│   │
│   └── RightPanel (35%)
│       ├── ProgressIndicator
│       │   ├── ProgressBar
│       │   ├── CompletionCounter
│       │   └── CaloriesIndicator
│       │
│       └── ExerciseList
│           └── ExerciseCard (multiple)
│               ├── Thumbnail
│               ├── Info (title, category, duration)
│               └── PlayButton
```

## 10. Funciones Principales a Implementar

```typescript
// Seleccionar un ejercicio para el área de trabajo
const handleSelectExercise = (exercise: Exercise) => {
  setCurrentExercise(exercise);
};

// Controlar el temporizador
const toggleTimer = () => {
  setTimerRunning(!timerRunning);
  // Lógica adicional para manejar el temporizador
};

// Marcar ejercicio como completado
const handleCompleteExercise = () => {
  if (currentExercise) {
    // Remover de pendientes
    setPendingExercises(
      pendingExercises.filter(ex => ex.id !== currentExercise.id)
    );
    
    // Añadir a completados
    setCompletedExercises([...completedExercises, currentExercise]);
    
    // Seleccionar siguiente ejercicio si existe
    if (pendingExercises.length > 1) {
      const nextExercise = pendingExercises.find(
        ex => ex.id !== currentExercise.id
      );
      setCurrentExercise(nextExercise || null);
    } else {
      setCurrentExercise(null);
    }
  }
};

// Calcular el progreso general
const calculateProgress = () => {
  const total = pendingExercises.length + completedExercises.length;
  const completed = completedExercises.length;
  return (completed / total) * 100;
};

// Calcular calorías quemadas
const calculateBurnedCalories = () => {
  return completedExercises.reduce((total, ex) => total + ex.calories, 0);
};
```

## 11. Consideraciones Adicionales

1. **Accesibilidad**
   - Asegurar contraste adecuado de colores
   - Proporcionar texto alternativo para imágenes
   - Asegurar navegabilidad por teclado

2. **Optimización de Rendimiento**
   - Considerar memoización de componentes pesados
   - Optimizar el renderizado de listas largas con virtualización
   - Precarga de GIFs para transiciones fluidas entre ejercicios

3. **Estado de Vacío**
   - Manejar adecuadamente el estado cuando no hay ejercicios seleccionados
   - Mostrar mensaje de felicitación cuando todos los ejercicios están completados

4. **Persistencia**
   - Considerar guardar el progreso del usuario para recuperación en caso de recarga de página

## 12. Recursos Necesarios

1. **Bibliotecas**
   - Material UI (componentes base)
   - Lucide React o similar (iconos)
   - React Hooks para manejo de estado

2. **Recursos Gráficos**
   - GIFs de ejercicios
   - Iconos para acciones (play, pause, skip, etc.)

3. **APIs o Endpoints**
   - Endpoint para obtener la lista de ejercicios asignados
   - Endpoint para guardar progreso del usuario

## 13. Criterios de Aceptación

1. El componente debe mostrar correctamente la lista de ejercicios pendientes.
2. El usuario debe poder seleccionar un ejercicio y verlo en el área de trabajo.
3. El temporizador debe funcionar correctamente.
4. Al marcar un ejercicio como completado, debe desaparecer de la lista.
5. Los indicadores de progreso deben actualizarse correctamente.
6. La interfaz debe ser responsiva y funcionar en diferentes dispositivos.
7. La navegación debe ser intuitiva y fluida.
8. El componente debe integrarse correctamente en el layout general sin depender del AppBar o Sidebar.

