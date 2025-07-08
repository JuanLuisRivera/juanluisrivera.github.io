---
title: Introductory C Programming Specialization Parte 3
sitio: Duke
lenguaje: C
elementoTecnico: Ninguno
URL: https://www.coursera.org/programs/mooc-unam-en-coursera-para-ti-uzeau/specializations/c-programming
date: 2025-07-07
---
### Programming Fundamentals

### Module 1 / Course 1

<!--end_excerpt-->

# Examples
## Drawing a Rectangle
- Cuadricula de 16x16
- Dibujar un rectangulo con determinadas dimensiones empezandod desde un punto especifico

### Resolucion
- Paso 1: Caso particular
    - x = 7
    - y = 9
    - Width = 8
    - Height = 4

- Paso 2: Desglosar con exactitud lo que se realizo
    - Posicionarse en la posicion apropiada de x
    - Posicionarse en la posicion apropiada de y
    - Dibujar una linea de longitud 8 en (7, 9)
    - Dibujar una linea de longitud 8 en (7, 10)
    - Dibujar una linea de longitud 8 en (7, 11)
    - Dibujar una linea de longitud 8 en (7, 12)

- Paso 3: Generalizar el procedimiento
    - Sea (x,y)
        - Para Max(x) = x + Width
        - Para Max(y) = y + Height
    - Ubicarse en la posicion (x,y)
        - Para y < Max(y)
            - Para x < Max(x)
                - Rellenar el cuadro de color azul
                - x = x + 1
            - y = y + 1

## Practica
1. Una tabla es generada a traves de un algoritmo con parametro N no negativo, generando la siguiente tabla

| N | Salida |
| 0 | 0 2 |
| 1 | 3 5 7 9 |
| 2 | 6 8 10 12 14 16 |
| 3 | 9 11 13 15 17 19 21 23 |
| 4 | 12 14 16 18 20 22 24 26 28 30 |
| 5 | 15 17 19 21 23 25 27 29 31 33 35 37 |
