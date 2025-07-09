---
title: P B
sitio: Duke
lenguaje: C
elementoTecnico: Ninguno
URL: https://www.coursera.org/programs/mooc-unam-en-coursera-para-ti-uzeau/specializations/c-programming
date: 2025-07-06
---
### Programming Fundamentals

### Module 1 / Course 1

<!--end_excerpt-->

# Los primeros 4 pasos
## Trabajar en un caso particular
- Utilizar ejemplos particulares permite determinar si el proceso de solucion es adecuado
- Problemas con este punto se pueden reducir a dos tipos de eventualidades
    - El problema esta mal definido
    - Falta de conocimiento

## Escribir exactamente lo que se hizo
- Escribir todos los pasos de manera clara para que cualquier persona sin conocimiento previo pero con conocimiento de aritmetica basica pueda realizar

## Generalizar los pasos del paso 2
- Consiste en 2 pasos
    1. De los casos particulares, se deberan remplazar los valores aritmeticos por expresiones algebraicas parametrizadas
    2. Se debera determinar el numero exacto de repeticiones  

## Probar el algoritmo
- Se ejecuta el algoritmo de manera manual con diferentes valores especificos
    - En caso de presentar problemas se recomienda regresar al paso 1 y 2

# Examples
## A Pattern of Squares
- Algoritmo para llenar una cuadricula de una forma especifica
    - Paso 1
        - Realizar un caso particular
            - Rellenar la cuadricula tomando como base los ejemplos para N = 3
    - Paso 2
        - Escribir exactamente lo que se realizo paso a paso
            - Rellenar el cuadrado en la coordenada (0,0) de color azul
            - Rellenar el cuadrado en la coordenada (0,1) de color rojo
            - Rellenar el cuadrado en la coordenada (0,2) de color rojo
            - Rellenar el cuadrado en la coordenada (0,3) de color azul
            - Rellenar el cuadrado en la coordenada (1,1) de color rojo
            - Rellenar el cuadrado en la coordenada (1,2) de color azul
            - Rellenar el cuadrado en la coordenada (1,3) de color rojo
            - Rellenar el cuadrado en la coordenada (2,2) de color rojo
            - Rellenar el cuadrado en la coordenada (2,3) de color rojo
            - Rellenar el cuadrado en la coordenada (3,3) de color azul
    - Paso 3
        - Generalizar el procedimiento
            - Sea (x,y)
                - Max(x) = 5 = N
                - Max(y) = 5 = N
                - Inicial(x) = 0
                - Inicial (y) = 0
                    - Se puede observar que al inicio de cada columna x = y
            - Siempre que x <= N
                - Siempre que y <= N
                    - (x + y) % 3 = 0
                        - Rellenar cuadrado de color azul
                    - De otra forma 
                        - Rellenar el cuadrado de color rojo
                    - y = y + 1
                - x = x + 1
                - y = x
    - Paso 4
        - Probar el algoritmo con un caso que no se haya utilizado previamente
        - Las pruebas no son demostraciones, no aseguran que el algoritmo sea correcto