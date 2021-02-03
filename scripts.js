console.log('Utilizando JS externo!')

/* || TIPOS DE DADOS || 

	|| STRING ||

    "" //aspas dupas
	'' //aspas simples
	`` // template literals ou template strings  | Permite pular linha e utilizar  ${ }

*/
console.log("String ${1+3}")
console.log('String ${1+3}')
console.log(`string ${1+3}`)

/*
	|| NUMBER ||
		* números

	33 // inteiros
	12.5 // reais - float
	NaN // Not a Number
	Infinity // infinito  - díficil de aparecer

*/
console.log(33)
console.log(12.5)
console.log(12.5 / "abc")
console.log(Infinity)

/*
	|| BOOLEAN ||
		* somente dois valores // bínario

	true // verdadeiro
	false // falso
*/
console.log(true)
console.log(false)
console.log(1 > 3)
console.log(5 < 10)

/* || UNDEFINED ||
		* indefinido

   || NULL ||
		* nulo
		* objeto não possui nada dentro
		* diferente de indefinido

*/

/*  
	|| OBJECT ||
		* objeto
		possuem:
		* propriedades / atributos
		* funcionalidades / métodos

		{propriedades : "valor"}
*/
console.log( {
	nome: "Leonardo", //propriedades
	idade: 18,        //propriedades
	andar: function(){  //funcionalidade
		console.log('andar') 
	}
} )

/*
	||ARRAY (vetores)||
		*uma lista
		*agrupamento de dados

		["Array", 123]
*/
console.log([
	"Leite",
	"Ovos",
	2,
	3
])