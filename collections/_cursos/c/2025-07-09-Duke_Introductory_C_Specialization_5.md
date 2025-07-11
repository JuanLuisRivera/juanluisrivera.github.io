---
title: Introductory C Programming Specialization Parte 5
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
## Colorear cuadros de una cuadricula con un parametro
- Una cuadricula es coloreada a traves de un algoritmo con un parametro N no negativo, generando diversas cuadriculas
![Cuadricula Ejercicio 1](/assets/images/ejercicio1_Introductory_C_5.png)

- Paso 1: Caso particular
    - N = 1

- Paso 2: Desglosar con exactitud lo que se realizo
    - Analisis de variables
        - No puede haber mas cuadros rojos que N
            - Sea i = 0 entonces $i \leq N$, por cada cuadro rojo $i = i + 1$
        - Despues de colorear un cuadrado rojo, el movimiento se realiza en diagonal
            - Sea (x,y) la coordenada del primer cuadro rojo, la siguiente sera (x - 1,y + 1)
        - Los cuadrados verde y azul no pueden ser mas que N + 2
            - Sea j = 0, entonces $j \leq N$, por cada cuadro de color $j = j + 1$
        - El primer cuadrado sera verde y alternara con azul
            - Sea c = 0, si $c \space \% \space 2 = 0 \rightarrow \text{Verde}$, de otra manera Azul
        - Despues de colorear el primer cuadrado verde, el movimiento se realizara en diagonal
            - Sea (x,y) la coordenada del primer cuadro verde, la siguiente sera (x - 1,y + 1)

- Paso 3: Generalizar el procedimiento
    - Sea N la variable principal, se ocuparan como variables auxiliares
        - $(x,y) = (N,0)$
        - $i = 0$
        - $j = 0$
    - Para $i \leq N$
        - Posicionarse en $(x,y)$
        - Colorear el cuadrado (x,y) de color rojo
        - i = i + 1
        - (x,y) = (x - 1,y + 1)
        - Si $x < 0$
            - $(x,y) = (N + 1,0)$
    - Para $j \leq N + 1$
        - Posicionarse en (x,y)
        - Si $j \space \% \space 2 = 0$
            - Colorear el cuadro (x,y) de color verde
        - De otra manera
            - Colorear el cuadro (x,y) de color azul
        - $j = j + 1$
        - $(x,y) = (x - 1,y + 1)$
        - Si $x < 0$
            - $(x,y) = (0,0)$

- Paso 4: Probar el algoritmo con un caso no utilizado anteriormente
    - N = 2
        - $(x,y) = (N,0) \rightarrow (2,0)$
        - $i = 0$
        - $j = 0$
    - Para $i \leq N \rightarrow 0 \leq 2$
        - Posicionarse en $(2,0)$
        - Colorear el cuadrado $(2,0)$ de color rojo
        - $i = i + 1 \rightarrow i = 0 + 1 \rightarrow i = 1$
        - $(x,y) = (x - 1,y + 1) \rightarrow (2 - 1,0 + 1) = (1,1)$
    - Para $i \leq N \rightarrow 1 \leq 2$
        - Posicionarse en $(1,1)$
        - Colorear el cuadrado $(1,1)$ de color rojo
        - $i = i + 1 \rightarrow i = 1 + 1 \rightarrow i = 2$
        - $(x,y) = (x - 1,y + 1) \rightarrow (1 - 1,1 + 1) = (0,2)$
    - Para $i \leq N \rightarrow 2 \leq 2$
        - Posicionarse en $(0,2)$
        - Colorear el cuadrado $(0,2)$ de color rojo
        - $i = i + 1 \rightarrow i = 2 + 1 \rightarrow i = 3$
        - $(x,y) = (x - 1,y + 1) \rightarrow (0 - 1,2 + 1) = (-1,3)$
            - $x < 0 \rightarrow -1 < 0$
                - $(x,y) = (N + 1,0) \rightarrow (2 + 1,0) \rightarrow (3,0)$
    - Para $i \leq N \rightarrow 3 \leq 2$
    - Para $j \leq N + 1 \rightarrow 0 \leq 3$
        - Posicionarse en $(x,y) \rightarrow (3,0)$
        - Si $j \space \% \space 2 = 0 \rightarrow 0 \space \% \space 2 = 0$
            - Colorear el cuadro $(3,0)$ de color verde
        - $j = j + 1 \rightarrow j = 0 + 1 \rightarrow j = 1$
        - $(x,y) = (x - 1,y + 1) \rightarrow (3 - 1,0 + 1) \rightarrow (2,1)$
    - Para $j \leq N + 1 \rightarrow 1 \leq 3$
        - Posicionarse en $(x,y) \rightarrow (2,1)$
        - Si $j \space \% \space 2 = 0 \rightarrow 1 \space \% \space 2 = 1$
            - Colorear el cuadro $(2,1)$ de color azul
        - $j = j + 1 \rightarrow j = 1 + 1 \rightarrow j = 2$
        - $(x,y) = (x - 1,y + 1) \rightarrow (2 - 1,1 + 1) \rightarrow (1,2)$
    - Para $j \leq N + 1 \rightarrow 2 \leq 3$
        - Posicionarse en $(x,y) \rightarrow (1,2)$
        - Si $j \space \% \space 2 = 0 \rightarrow 2 \space \% \space 2 = 0$
            - Colorear el cuadro $(1,2)$ de color verde
        - $j = j + 1 \rightarrow j = 2 + 1 \rightarrow j = 3$
        - $(x,y) = (x - 1,y + 1) \rightarrow (1 - 1,2 + 1) \rightarrow (0,3)$
    - Para $j \leq N + 1 \rightarrow 3 \leq 3$
        - Posicionarse en $(x,y) \rightarrow (0,3)$
        - Si $j \space \% \space 2 = 0 \rightarrow 3 \space \% \space 2 = 1$
            - Colorear el cuadro $(0,3)$ de color azul
        - $j = j + 1 \rightarrow j = 3 + 1 \rightarrow j = 4$
        - $(x,y) = (x - 1,y + 1) \rightarrow (0 - 1,3 + 1) \rightarrow (-1,4)$
        - Si $x < 0 \rigtharrow -1 < 0$
            - $(x,y) = (0,0)$
    - Para $j \leq N + 1 \rightarrow 4 \leq 3$

## Obtencion de una tabla a partir de un parametro
- Se obtiene la tabla siguiente a partir de un parametro N no negativo

| N | Salida |
| 0 | |
| 1 | -1 0 3 |
| 2 | Por resolver |
| 3 | -9 -8 -5 0 7 16 27 40 55 |
| 4 | -16 -15 -12 -7 0 9 20 33 48 65 84 105 |
| 5 | -25 -24 -21 -16 -9 0 11 24 39 56 75 96 119 144 171 |
| 6 | -36 -35 -32 -27 -20 -11 0 13 28 45 64 85 108 133 160 189 220 253 |

- Paso 1: Caso particular
    - N = 3

- Paso 2: Desglosar con exactitud lo que se realizo
    - Analisis de variables
        - El primer numero sera $N * -N$
        - No puede haber mas de $N * 3$ numeros de salida
            - Despues del primer numero, se sumara un numero que variara $y = 0 | y < N * 3$
                - $N * -N + (1 * 2y)$
                - $y = y + 1$

- Paso 3: Generalizar el procedimiento
    - Sea N la variable principal se ocupara las variables auxiliares
        - x = 0
        - y = 0
    - Para $y < N * 3$
        - Si $y = 0$
            - $x = N * -N$
            - $y = y + 1$
        - De otra manera
            - $x = x + 1 + (2(y - 1))$
            - $y = y + 1$

- Paso 4: Probar el algoritmo para un caso no utilizado anteriormente
    - N = 1
        - x = 0
        - y = 0
    - Para $y < N * 3 \rightarrow 0 < 1 * 3 \rightarrow 0 < 3$
        - Si $y = 0 \rightarrow 0 = 0$
            - $x = N * -N \rightarrow x = 1 * -1 \rightarrow x = -1$
            - $y = y + 1 \rightarrow y = 0 + 1 \rightarrow y = 1$
    - Para $y < N * 3 \rightarrow 1 < 1 * 3 \rightarrow 1 < 3$
        - Si $y = 0 \rightarrow 1 \neq 0$
            - $x = x + 1 + (2(y - 1)) \rightarrow x = -1 + 1 + ((2(1 - 1))) \rightarrow x = -1 + 1 + (2(0)) \rightarrow x = -1 + 1 + (0) \rightarrow x = -1 + 1 + 0 \rightarrow x = 0$
            - $y = y + 1 \rightarrow y = 1 + 1 \rightarrow y = 2$
    - Para $y < N * 3 \rightarrow 2 < 1 * 3 \rightarrow 2 < 3$
        - Si $y = 0 \rightarrow 2 \neq 0$
            - $x = x + 1 + (2(y - 1)) \rightarrow x = 0 + 1 + ((2(2 - 1))) \rightarrow x = 0 + 1 + (2(1)) \rightarrow x = 0 + 1 + (2) \rightarrow x = 0 + 1 + 2 \rightarrow x = 3$
            - $y = y + 1 \rightarrow y = 2 + 1 \rightarrow y = 3$
    - Para $y < N * 3 \rightarrow 3 < 1 * 3 \rightarrow 3 < 3$

- Por tanto, para N = 1

| N | Salida |
| 1 | -1 0 3 |

- Obtencion de valor para N = 2

| N | Salida |
| 2 | -4 -3 0 5 12 21 |