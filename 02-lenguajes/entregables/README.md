# Módulo 2 - Lenguajes

## 1. Array operations

    Ejecutar el conmando:

    `npm run start:1`

### Ejercicio 1.1 - Head

    Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. U􀦞liza destructuring.

### Ejercicio 1.2 - Tail

    Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

### Ejercicio 1.3 - Init

    Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

### Ejercicio 1.4 - Last

    Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

## 2. Concat

    Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada,
    devuelva la concatenación de ambos. Utiliza rest / spread operators.

    Ejecutar el conmando:

    `npm run start:2`

## 3. Clone Merge

    Implementa una función clone que, a par􀦞r de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source.

    `npm run start:3`

## 4. Read Books

    Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.

    Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false

    TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

    Ejecutar el conmando:

    `npm run start:4`

## 5. Slot Machine

    El obje􀦞vo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automá􀦞camente se irá incrementando conforme vayamos jugando.

    Cuando se llame al método play el número de monedas se debe incrementar de forma automá􀦞ca y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true , y por tanto deberá mostrarse por consola el mensaje: "Congratulations!!!. You won <número de monedas> coins!!" y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje: "Good luck next time!!".

    Ejecutar el conmando:

    `npm run start:5`
