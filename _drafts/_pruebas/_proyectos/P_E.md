---
title: P E
sitio: Duke
lenguaje: C
elementoTecnico: Ninguno
URL: https://www.coursera.org/programs/mooc-unam-en-coursera-para-ti-uzeau/specializations/c-programming
date: 2025-07-09
---
### Programming Fundamentals

### Module 1 / Course 1

<!--end_excerpt-->

# Ejercicios
## Generar tabla con un parametro
- Una tabla es generada a traves de un algoritmo con parametro N no negativo, generando la siguiente tabla

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
    - Sea N la variable principal, se ocuparan como variables auxiliares
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

## Colorear cuadros de una cuadricula con un parametro
- Una cuadricula es coloreada a traves de un algoritmo con un parametro N no negativo, generando diversas cuadriculas
![Cuadricula Ejercicio 2](/assets/images/ejercicio2_Introductory_C_4.png)

- Paso 1: Caso particular
    - N = 1

- Paso 2: Desglosar con exactitud lo que se realizo
    - Ubicarse en la coordenada (0,0)
    - Colorear el cuadro (0,0) de color rojo
    - Colorear el cuadro (0,1) de color rojo
    - Ubicarse en la coordenada (1,1)
    - Colorear el cuadro (1,1) de color rojo
    - Colorear el cuadro (1,2) de color rojo
    - Ubicarse en la coordenada (3,1)
    - Colorear el cuadro (3,1) de color azul
    - Colorear el cuadro (3,3) de color azul

- Paso 3: Generalizar el procedimiento
    - Sea N la variable principal, se ocuparan como variables auxiliares
        - (x,y) = (0,0)
        - z = 0
    - Para $z \leq N \rightarrow 0 < leq 1$
        - Posicionarse en $(x,y)$
        - Colorear el cuadrado (x, y) de color rojo
        - Colorear el cuadrado (x, y + 1) de color rojo
        - (x,y) = (x + 1, y + 1)
    - Si N % 2 = 0
        - Colorear el cuadrado (x, y) de color verde
    - De otra manera
        - Colorear el cuadrado (x + 2, y + 1) de color azul
        - Colorear el cuadrado (x + 2, y - 1) de color azul

- Paso 4: Probar el algoritmo con un caso no utilizado anteriormente
    - N = 0
    - $z \leq 0 \rightarrow 0 \leq 0$
        - Posicionarse en $(0,0)$
            - Colorear el cuadrado (0,0) de color rojo
            - Colorear el cuadrado (0,1) de color rojo
            - $(x,y) = (x+1,y+1) \rightarrow (1,1)$
        - $z % z % 2 = 0$
            - Colorear el cuadrado (1, 1) de color verde

## Obtener una serie de numeros con un parametro
- Se genera la siguiente tabla
| N | Salida |
| 0 | |
| 1 | 0 1 |
| 2 | 0 2 2 3 |
| 3 | 0 2 4 3 4 5 |
| 4 | 0 2 4 6 4 5 6 7 |
| 5 | 0 2 4 6 8 5 6 7 8 9 |

- Paso 1: Caso particular
    - N = 3

- Paso 2: Desglosar con exactitud lo que se realizo
    - Sea x la salida
    - $x = 0$
    - $x = x + 2 = 2$
    - $x = x + 2 = 4$
    - $x = N = 3$
    - $x = x + 1 = 4$
    - $x = x + 1 = 5$

- Paso 3: Generalizar el procedimiento
    - Sea N la variable principal se ocuparan como variables auxiliares
        - $x = 0$
        - $y = 0$
        - $z = 0$
    - Para $y < N && z = 0$
        - Si $y = 0$
            - $x = 0$
        - De otra manera
            - $x = x + 2$
        - $y = y + 1$

    - Para $y \leq N && z < N$
        - Si $z = 0$
            - $x = N$
            - $z = z + 1$
        - De otra manera
            - $x = x + 1$
            - $z = z + 1$

- Paso 4: Probar el algoritmo con un caso no utilizado anteriormente
    - N = 2
        - x = 0
        - y = 0
        - z = z

    - $y < N && z = 0 \rightarrow 0 < 2 && 0 = 0$
        - $y = 0 \rightarrow 0 = 0$
            - $x = 0$
        - $y = y + 1 \rightarrow y = 0 + 1 = \rightarrow y = 1$

    - $y < N && z = 0 \rightarrow 1 < 2 && 0 = 0$
        - $y = 1$
            - $x = x + 2 \rightarrow x = 0 + 2 \rightarrow x = 2$
        - $y = y + 1 \rightarrow y = 1 + 1 = \rightarrow y = 2$

    - $y \leq N && z < N \rightarrow 2 \leq 2 && 0 < 2$
        - $z = 0 \rightarrow 0 = 0$
            - $x = N \rightarrow x = 2$
            - $z = z + 1 \rightarrow z = 0 + 1 \rightarrow z = 1$

    - $y \leq N && z < N \rightarrow 2 \leq 2 && 1 < 2$
        - $x = x + 1 \rightarrow x = 2 + 1 \rightarrow x = 3$
        - $z = z + 1 \rightarrow z = 1 + 1 \rigtharrow z = 2$
    
    - $y \leq N && z < N \rightarrow 2 \leq 2 && 2 < 2$

- Por tanto, para N = 2

| N | Salida |
| 2 | 0 2 2 3 |