# Zhaveish

Zhaveish es un idioma inventado para el [Curso de Fundamentos de Javascript](https://platzi.com/js) de [Platzi](https://platzi.com), el mejor lugar de eduación online

## Descripción del idioma
- Si la palabra termina en 'AR', se le quitan esos dos caracteres.
- Si la palabra empieza con 'z', se le añade 'pe' al final.
- Si la palabra es más larga de 10 caracteres, se parte en dos y se une con un guión medio.
- Si la palabra original es un palíndromo ninguna regla anterior aplica y se devuelve la misma palabra intercalando mayusculas y minusculas.

## Instalación 

```
npm install zhaveish

```

## Uso 

```
import zhaveish from 'zhaveish'

console.log(platzom("ProGramar")); // ProGram
console.log(platzom("ZorRo")); // ZorRope
console.log(platzom("zaRpaR")); // zaRppe
console.log(platzom("Abecedario")); // Abece-dario
console.log(platzom("sometemos")); // SoMeTeMoS
```

## Creditos
- [Zhava Hernández](https:/twitter.com/ZhavaMan)

## Licencia

[MIT](https://opensource.org/licenses/MIT)
