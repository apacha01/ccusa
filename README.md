# ¿Cuánto Cuesta Un Senador Argentino? (de verdad)

Esta página toma los datos oficiales de la página el Honorable Senado de la Nación Argentina para calcular cuánta plata nos cuesta un senador. Básicamente toma los datos de los asesores de todos los senadores y para cada uno de ellos, de acuerdo a su categoría, suma al valor final su salario.

## Datos actuales (18/03/24)

Los últimos datos que encontre para el salario de los empleados por categoría está [acá](https://www.senado.gob.ar/prensa/adjunto/descargarArchivo/tipo/EscalaSalarial) pero para que se vea directamente, estos son los valores en pesos argentinos que usé:
```javascript
export const SALARY_SCALE_BY_CATEGORY = {
	'A-1': 1085254.69,
	'A-2': 919576.76,
	'A-3': 778301.00,
	'A-4': 679407.97,
	'A-5': 592073.86,
	'A-6': 516298.68,
	'A-7': 449513.78,
	'A-8': 393003.47,
	'A-9': 326218.57,
	'A-10': 287688.82,
	'A-11': 255580.69,
	'A-12': 226041.21,
	'A-13': 199070.39,
	'A-14': 177236.86,
};
```

Y para el salario de cada senador, el último valor que encontré es `ARS$ 3.265.941,58` (Tres millones doscientos sesenta y cinco mil novecientos cuarenta y uno con cincuenta y ocho centavos).

## Actualizaciones
Ya que no cambia muy seguido hice que la página sea estática y los datos no se actualizan por sí solos. Tendría que volver a desplegar la página para que se actualicen los valores, pero la página del senado es muy lenta, asique hacer que se haga todo automática hubiese tomado mucho tiempo (porque los datos vienen de la página oficial).

Por lo tanto, si ven que está desactualiazdo, hagan una issue.