---
title: Introductory C Programming Specialization Parte 4
sitio: Duke
lenguaje: C
elementoTecnico: Ninguno
URL: https://www.coursera.org/programs/mooc-unam-en-coursera-para-ti-uzeau/specializations/c-programming
date: 2025-07-08
---
### Programming Fundamentals

### Module 1 / Course 1

<!--end_excerpt-->

# Ejercicios
1. Una tabla es generada a traves de un algoritmo con parametro N no negativo, generando la siguiente tabla

| N | Salida |
| 0 | 0 2 |
| 1 | 3 5 7 9 |
| 2 | 6 8 10 12 14 16 |
| 3 | 9 11 13 15 17 19 21 23 |
| 4 | 12 14 16 18 20 22 24 26 28 30 |
| 5 | 15 17 19 21 23 25 27 29 31 33 35 37 |

## Pasos para obtener el algoritmo
- Paso 1: Caso particular
    - N = 3

- Paso 2: Deglosar con exactitud lo que se realizo
    - Multiplicar N * 3 = 9
    - Al resultado anterior sumar 2 = 11
    - Al resultado anterior sumar 2 = 13
    - Al resultado anterior sumar 2 = 15
    - Al resultado anterior sumar 2 = 17
    - Al resultado anterior sumar 2 = 19
    - Al resultado anterior sumar 2 = 21
    - Al resultado anterior sumar 2 = 23

- Paso 3: Generalizar el procedimiento
    - Sea N la variable principal, definimos las variables
        - $x$
        - $y = 0$
    - Para $y \leq 2N + 1$
        - Si $y = 0$
            - $x = N * 3$
        - De otra forma
            - $x = x + 2$
    - $y = y + 1$

- Paso 4: Probar el algoritmo con un caso no utilizado anteriormente
    - $N = 1$
        - $y = 0$
    - $y \leq 2N + 1 \rightarrow 0 \leq 3$
        - $y = 0$
            - $x = N * 3 \rightarrow x = 3$
        - $y = y + 1 \rightarrow y = 0 + 1$

    - $y \leq 2N + 1 \rightarrow 1 \leq 3$
        - $y = 1$
            - $x = x + 2 \rightarrow x = 5$
        - $y = y + 1 \rightarrow y = 2$

    - $y \leq 2N + 1 \rightarrow 2 \leq 3$
        - $y = 2$
            - $x = x + 2 \rightarrow x = 7$
        - $y = y + 1 \rightarrow y = 3$

    - $y \leq 2N + 1 \rightarrow 3 \leq 3$
        - $y = 3$
            - $x = x + 2 \rightarrow x = 9$
        - $y = y + 1 \rightarrow y = 4$

    - $y \leq 2N + 1 \rightarrow 4 \leq 3$

- Por tanto, para N = 1

| N | Salida |
| 1 | 3 5 7 9 |