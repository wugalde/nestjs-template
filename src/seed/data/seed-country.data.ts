interface CountryInterface {
	provincias: ProvinciasInterface[];
}

interface ProvinciasInterface {
	code: string;
	nombre: string;
	cantones: CantonesInterface;
}

interface CantonesInterface {
	code: string;
	nombre: string;
	distritos: any;
}


interface CountryInteface{
  countries: any[];

}

export const country:CountryInteface = {
	countries: [
		{
			"code": "CR",
			"codeBco": "188",
			"codeCom": "188",
			"areaCode": "506",
			"name": "Costa Rica",
			"status": "ACT",
			"createDate":  "08/29/2023"
		}
	]
}

export const geos = {
	provincias: [
		 {
			code: "1",
			"nombre": "San José",
			"cantones": [
				{
					"nombre": "Central",
					"distritos": {
						"01": "Carmen",
						"02": "Merced",
						"03": "Hospital",
						"04": "Catedral",
						"05": "Zapote",
						"06": "San Francisco De Dos Rios",
						"07": "Uruca",
						"08": "Mata Redonda",
						"09": "Pavas",
						"10": "Hatillo",
						"11": "San Sebastián"
					}
				},
				 {
					
					"nombre": "Escazú",
					"distritos": {
						"01": "Escazú",
						"02": "San Antonio",
						"03": "San Rafael"
					}
				},
				 {
					"nombre": "Desamparados",
					"distritos": {
						"01": "Desamparados",
						"02": "San Miguel",
						"03": "San Juan De Dios",
						"04": "San Rafael Arriba",
						"05": "San Rafael Abajo",
						"06": "San Antonio",
						"07": "Frailes",
						"08": "Patarra",
						"09": "San Cristobal",
						"10": "Rosario",
						"11": "Damas",
						"12": "Gravilias",
						"13": "Los Guido"
					}
				},
				 {
					"nombre": "Puriscal",
					"distritos": {
						"01": "Santiago",
						"02": "Mercedes Sur",
						"03": "Barbacoas",
						"04": "Grifo Alto",
						"05": "San Rafael",
						"06": "Candelarita",
						"07": "Desamparaditos",
						"08": "San Antonio",
						"09": "Chires"
					}
				},
				{
					"nombre": "Tarrazú",
					"distritos": {
						"01": "San Marcos",
						"02": "San Lorenzo",
						"03": "San Carlos"
					}
				},
				{
					"nombre": "Aserrí",
					"distritos": {
						"01": "Aserrí",
						"02": "Tarbaca",
						"03": "Vuelta De Jorco",
						"04": "San Gabriel",
						"05": "Legua",
						"06": "Monterrey",
						"07": "Salitrillos"
					}
				},
				{
					"nombre": "Mora",
					"distritos": {
						"01": "Colón",
						"02": "Guayabo",
						"03": "Tabarcia",
						"04": "Piedras Negras",
						"05": "Picagres",
						"06": "Jaris"
					}
				},
				 {
					"nombre": "Goicoechea",
					"distritos": {
						"01": "Guadalupe",
						"02": "San Francisco",
						"03": "Calle Blancos",
						"04": "Mata De Platano",
						"05": "Ipís",
						"06": "Rancho Redondo",
						"07": "Purral"
					}
				},
				{
					"nombre": "Santa Ana",
					"distritos": {
						"01": "Santa Ana",
						"02": "Salitral",
						"03": "Pozos",
						"04": "Uruca",
						"05": "Piedades",
						"06": "Brasil"
					}
				},
				 {
					"nombre": "Alajuelita",
					"distritos": {
						"01": "Alajuelita",
						"02": "San Josecito",
						"03": "San Antonio",
						"04": "Concepción",
						"05": "San Felipe"
					}
				},
				 {
					"nombre": "Vázquez De Coronado",
					"distritos": {
						"01": "San Isidro",
						"02": "San Rafael",
						"03": "Dulce Nombre De Jesus",
						"04": "Patalillo",
						"05": "Cascajal"
					}
				},
				 {
					"nombre": "Acosta",
					"distritos": {
						"01": "San Ignacio",
						"02": "Guaitil",
						"03": "Palmichal",
						"04": "Cangrejal",
						"05": "Sabanillas"
					}
				},
				 {
					"nombre": "Tibás",
					"distritos": {
						"01": "San Juan",
						"02": "Cinco Esquinas",
						"03": "Anselmo Llorente",
						"04": "Leon XII",
						"05": "Colima"
					}
				},
				 {
					"nombre": "Moravia",
					"distritos": {
						"01": "San Vicente",
						"02": "San Jeronimo",
						"03": "La Trinidad"
					}
				},
				 {
					"nombre": "Montes De Oca",
					"distritos": {
						"01": "San Pedro",
						"02": "Sabanilla",
						"03": "Mercedes",
						"04": "San Rafael"
					}
				},
				 {
					"nombre": "Turrubares",
					"distritos": {
						"01": "San Pablo",
						"02": "San Pedro",
						"03": "San Juan De Mata",
						"04": "San Luis",
						"05": "Carara"
					}
				},
				{
					"nombre": "Dota",
					"distritos": {
						"01": "Santa María",
						"02": "Jardin",
						"03": "Copey"
					}
				},
				 {
					"nombre": "Curridabat",
					"distritos": {
						"01": "Curridabat",
						"02": "Granadilla",
						"03": "Sanchez",
						"04": "Tirrases"
					}
				},
				 {
					"nombre": "Pérez Zeledón",
					"distritos": {
						"01": "San Isidro De El General",
						"02": "El General",
						"03": "Daniel Flores",
						"04": "Rivas",
						"05": "San Pedro",
						"06": "Platanares",
						"07": "Pejibaye",
						"08": "Cajon",
						"09": "Baru",
						"10": "Rio Nuevo",
						"11": "Páramo"
					}
				},
				{
					"nombre": "León Cortés Castro",
					"distritos": {
						"01": "San Pablo",
						"02": "San Andres",
						"03": "Llano Bonito",
						"04": "San Isidro",
						"05": "Santa Cruz",
						"06": "San Antonio"
					}
				}
			]
		},
		 {
			code: "2",
			"nombre": "Alajuela",
			"cantones": [
				 {
					"nombre": "Central",
					"distritos": {
						"01": "Alajuela",
						"02": "San José",
						"03": "Carrizal",
						"04": "San Antonio",
						"05": "Guácima",
						"06": "San Isidro",
						"07": "Sabanilla",
						"08": "San Rafael",
						"09": "Rio Segundo",
						"10": "Desamparados",
						"11": "Turrucares",
						"12": "Tambor",
						"13": "Garita",
						"14": "Sarapiquí"
					}
				},
				 {
					"nombre": "San Ramón",
					"distritos": {
						"01": "San Ramón",
						"02": "Santiago",
						"03": "San Juan",
						"04": "Piedades Norte",
						"05": "Piedades Sur",
						"06": "San Rafael",
						"07": "San Isidro",
						"08": "Angeles",
						"09": "Alfaro",
						"10": "Volio",
						"11": "Concepción",
						"12": "Zapotal",
						"13": "Peñas Blancas"
					}
				},
				 {
					"nombre": "Grecia",
					"distritos": {
						"01": "Grecia",
						"02": "San Isidro",
						"03": "San José",
						"04": "San Roque",
						"05": "Tacares",
						"06": "Rio Cuarto",
						"07": "Puente De Piedra",
						"08": "Bolivar"
					}
				},
				 {
					"nombre": "San Mateo",
					"distritos": {
						"01": "San Mateo",
						"02": "Desmonte",
						"03": "Jesús María",
						"04": "Labrador"
					}
				},
				 {
					"nombre": "Atenas",
					"distritos": {
						"01": "Atenas",
						"02": "Jesús",
						"03": "Mercedes",
						"04": "San Isidro",
						"05": "Concepción",
						"06": "San José",
						"07": "Santa Eulalia",
						"08": "Escobal"
					}
				},
				{
					"nombre": "Naranjo",
					"distritos": {
						"01": "Naranjo",
						"02": "San Miguel",
						"03": "San José",
						"04": "Cirrí Sur",
						"05": "San Jerónimo",
						"06": "San Juan",
						"07": "El Rosario",
						"08": "Palmitos"
					}
				},
				 {
					"nombre": "Palmares",
					"distritos": {
						"01": "Palmares",
						"02": "Zaragoza",
						"03": "Buenos Aires",
						"04": "Santiago",
						"05": "Candelaria",
						"06": "Esquipulas",
						"07": "La Granja"
					}
				},
				 {
					"nombre": "Poás",
					"distritos": {
						"01": "San Pedro",
						"02": "San Juan",
						"03": "San Rafael",
						"04": "Carrillos",
						"05": "Sabana Redonda"
					}
				},
				 {
					"nombre": "Orotina",
					"distritos": {
						"01": "Orotina",
						"02": "El Mastate",
						"03": "Hacienda Vieja",
						"04": "Coyolar",
						"05": "La Ceiba"
					}
				},
				 {
					"nombre": "San Carlos",
					"distritos": {
						"01": "Quesada",
						"02": "Florencia",
						"03": "Buenavista",
						"04": "Aguas Zarcas",
						"05": "Venecia",
						"06": "Pital",
						"07": "La Fortuna",
						"08": "La Tigra",
						"09": "La Palmera",
						"10": "Venado",
						"11": "Cutris",
						"12": "Monterrey",
						"13": "Pocosol"
					}
				},
				 {
					"nombre": "Zarcero",
					"distritos": {
						"01": "Zarcero",
						"02": "Laguna",
						"03": "Tapesco",
						"04": "Guadalupe",
						"05": "Palmira",
						"06": "Zapote",
						"07": "Brisas"
					}
				},
				{
					"nombre": "Sarchí",
					"distritos": {
						"01": "Sarchí Norte",
						"02": "Sarchí Sur",
						"03": "Toro Amarillo",
						"04": "San Pedro",
						"05": "Rodriguez"
					}
				},
				 {
					"nombre": "Upala",
					"distritos": {
						"01": "Upala",
						"02": "Aguas Claras",
						"03": "San José o Pizote",
						"04": "Bijagua",
						"05": "Delicias",
						"06": "Dos Rios",
						"07": "Yolillal",
						"08": "Canalete"
					}
				},
				 {
					"nombre": "Los Chiles",
					"distritos": {
						"01": "Los Chiles",
						"02": "Caño Negro",
						"03": "El Amparo",
						"04": "San Jorge"
					}
				},
				 {
					"nombre": "Guatuso",
					"distritos": {
						"01": "San Rafael",
						"02": "Buenavista",
						"03": "Cote",
						"04": "Katira"
					}
				},
				 {
					"nombre": "Río Cuarto",
					"distritos": {
						"01": "Río Cuarto"
					}
				}
			]
		},
		 {
			code: "3",
			"nombre": "Cartago",
			"cantones": [
				 {
					"nombre": "Central",
					"distritos": {
						"01": "Oriental",
						"02": "Occidental",
						"03": "Carmen",
						"04": "San Nicolás",
						"05": "Aguacaliente o San Francisco",
						"06": "Guadalupe o Arenilla",
						"07": "Corralillo",
						"08": "Tierra Blanca",
						"09": "Dulce Nombre",
						"10": "Llano Grande",
						"11": "Quebradilla"
					}
				},
				{
					"nombre": "Paraíso",
					"distritos": {
						"01": "Paraiso",
						"02": "Santiago",
						"03": "Orosi",
						"04": "Cachí",
						"05": "Llanos de Santa Lucía"
					}
				},
				{
					"nombre": "La Unión",
					"distritos": {
						"01": "Tres Rios",
						"02": "San Diego",
						"03": "San Juan",
						"04": "San Rafael",
						"05": "Concepción",
						"06": "Dulce Nombre",
						"07": "San Ramón",
						"08": "Rio Azul"
					}
				},
				 {
					"nombre": "Jiménez",
					"distritos": {
						"01": "Juan Viñas",
						"02": "Tucurrique",
						"03": "Pejibaye"
					}
				},
				 {
					"nombre": "Turrialba",
					"distritos": {
						"01": "Turrialba",
						"02": "La Suiza",
						"03": "Peralta",
						"04": "Santa Cruz",
						"05": "Santa Teresita",
						"06": "Pavones",
						"07": "Tuis",
						"08": "Tayutic",
						"09": "Santa Rosa",
						"10": "Tres Equis",
						"11": "La Isabel",
						"12": "Chirripó"
					}
				},
				 {
					"nombre": "Alvarado",
					"distritos": {
						"01": "Pacayas",
						"02": "Cervantes",
						"03": "Capellades"
					}
				},
				{
					"nombre": "Oreamuno",
					"distritos": {
						"01": "San Rafael",
						"02": "Cot",
						"03": "Potrero Cerrado",
						"04": "Cipreses",
						"05": "Santa Rosa"
					}
				},
				 {
					"nombre": "El Guarco",
					"distritos": {
						"01": "El Tejar",
						"02": "San Isidro",
						"03": "Tobosi",
						"04": "Patio De Agua"
					}
				}
			]
		},
		{
			code: "4",
			"nombre": "Heredia",
			"cantones": [
				 {
					"nombre": "Central",
					"distritos": {
						"01": "Heredia",
						"02": "Mercedes",
						"03": "San Francisco",
						"04": "Ulloa",
						"05": "Varablanca"
					}
				},
				 {
					"nombre": "Barva",
					"distritos": {
						"01": "Barva",
						"02": "San Pedro",
						"03": "San Pablo",
						"04": "San Roque",
						"05": "Santa Lucía",
						"06": "San José de la Montaña"
					}
				},
				 { 
					"nombre": "Santo Domingo",
					"distritos": {
						"01": "Santo Domingo",
						"02": "San Vicente",
						"03": "San Miguel",
						"04": "Paracito",
						"05": "Santo Tomás",
						"06": "Santa Rosa",
						"07": "Tures",
						"08": "Para"
					}
				},
				{ 
					"nombre": "Santa Barbara",
					"distritos": {
						"01": "Santa Bárbara",
						"02": "San Pedro",
						"03": "San Juan",
						"04": "Jesús",
						"05": "Santo Domingo",
						"06": "Puraba"
					}
				},
				{ 
					"nombre": "San Rafael",
					"distritos": {
						"01": "San Rafael",
						"02": "San Josecito",
						"03": "Santiago",
						"04": "Los Ángeles",
						"05": "Concepción"
					}
				},
				 { 
					"nombre": "San Isidro",
					"distritos": {
						"01": "San Isidro",
						"02": "San José",
						"03": "Concepción",
						"04": "San Francisco"
					}
				},
				 { 
					"nombre": "Belén",
					"distritos": {
						"01": "San Antonio",
						"02": "La Ribera",
						"03": "La Asuncion"
					}
				},
				 { 
					"nombre": "Flores",
					"distritos": {
						"01": "San Joaquín",
						"02": "Barrantes",
						"03": "Llorente"
					}
				},
				{ 
					"nombre": "San Pablo",
					"distritos": {
						"01": "San Pablo",
						"02": "Rincon De Sabanilla"
					}
				},
				 { 
					"nombre": "Sarapiquí",
					"distritos": {
						"01": "Puerto Viejo",
						"02": "La Virgen",
						"03": "Las Horquetas",
						"04": "Llanuras Del Gaspar",
						"05": "Cureña"
					}
				}
			]
		},
		 {
			code: '5',
			"nombre": "Guanacaste",
			"cantones": [
				 {
					"nombre": "Liberia",
					"distritos": {
						"01": "Liberia",
						"02": "Cañas Dulces",
						"03": "Mayorga",
						"04": "Nacascolo",
						"05": "Curubande"
					}
				},
				{
					"nombre": "Nicoya",
					"distritos": {
						"01": "Nicoya",
						"02": "Mansión",
						"03": "San Antonio",
						"04": "Quebrada Honda",
						"05": "Sámara",
						"06": "Nosara",
						"07": "Belén De Nosarita"
					}
				},
				 {
					"nombre": "Santa Cruz",
					"distritos": {
						"01": "Santa Cruz",
						"02": "Bolson",
						"03": "Veintisiete de Abril",
						"04": "Tempate",
						"05": "Cartagena",
						"06": "Cuajiniquil",
						"07": "Diria",
						"08": "Cabo Velas",
						"09": "Tamarindo"
					}
				},
				{
					"nombre": "Bagaces",
					"distritos": {
						"01": "Bagaces",
						"02": "La Fortuna",
						"03": "Mogote",
						"04": "Rio Naranjo"
					}
				},
				 {
					"nombre": "Carrillo",
					"distritos": {
						"01": "Filadelfia",
						"02": "Palmira",
						"03": "Sardinal",
						"04": "Belen"
					}
				},
				 {
					"nombre": "Cañas",
					"distritos": {
						"01": "Cañas",
						"02": "Palmira",
						"03": "San Miguel",
						"04": "Bebedero",
						"05": "Porozal"
					}
				},
				{
					"nombre": "Abangares",
					"distritos": {
						"01": "Las Juntas",
						"02": "Sierra",
						"03": "San Juan",
						"04": "Colorado"
					}
				},
				{
					"nombre": "Tilarán",
					"distritos": {
						"01": "Tilarán",
						"02": "Quebrada Grande",
						"03": "Tronadora",
						"04": "Santa Rosa",
						"05": "Líbano",
						"06": "Tierras Morenas",
						"07": "Arenal"
					}
				},
				{
					"nombre": "Nandayure",
					"distritos": {
						"01": "Carmona",
						"02": "Santa Rita",
						"03": "Zapotal",
						"04": "San Pablo",
						"05": "Porvenir",
						"06": "Bejuco"
					}
				},
				{
					"nombre": "La Cruz",
					"distritos": {
						"01": "La Cruz",
						"02": "Santa Cecilia",
						"03": "La Garita",
						"04": "Santa Elena"
					}
				},
				{
					"nombre": "Hojancha",
					"distritos": {
						"01": "Hojancha",
						"02": "Monte Romo",
						"03": "Puerto Carrillo",
						"04": "Huacas"
					}
				}
			]
		},
		 {
			code: "6",
			"nombre": "Puntarenas",
			"cantones": [
				 {
					"nombre": "Central",
					"distritos": {
						"01": "Puntarenas",
						"02": "Pitahaya",
						"03": "Chomes",
						"04": "Lepanto",
						"05": "Paquera",
						"06": "Manzanillo",
						"07": "Guacimal",
						"08": "Barranca",
						"09": "Monte Verde",
						"10": "Isla Del Coco",
						"11": "Cóbano",
						"12": "Chacarita",
						"13": "Chira",
						"14": "Acapulco",
						"15": "El Roble",
						"16": "Arancibia"
					}
				},
				{
					"nombre": "Esparza",
					"distritos": {
						"01": "Espíritu Santo",
						"02": "San Juan Grande",
						"03": "Macacona",
						"04": "San Rafael",
						"05": "San Jerónimo"
					}
				},
				{
					"nombre": "Buenos Aires",
					"distritos": {
						"01": "Buenos Aires",
						"02": "Volcán",
						"03": "Potrero Grande",
						"04": "Boruca",
						"05": "Pilas",
						"06": "Colinas",
						"07": "Changuena",
						"08": "Biolley",
						"09": "Brunka"
					}
				},
				{
					"nombre": "Montes De Oro",
					"distritos": {
						"01": "Miramar",
						"02": "La Unión",
						"03": "San Isidro"
					}
				},
				 {
					"nombre": "Osa",
					"distritos": {
						"01": "Puerto Cortés",
						"02": "Palmar",
						"03": "Sierpe",
						"04": "Bahía Ballena",
						"05": "Piedras Blancas",
						"06": "Bahía Drake"
					}
				},
				{
					"nombre": "Quepos",
					"distritos": {
						"01": "Quepos",
						"02": "Savegre",
						"03": "Naranjito"
					}
				},
				 {
					"nombre": "Golfito",
					"distritos": {
						"01": "Golfito",
						"02": "Puerto Jiménez",
						"03": "Guaycara",
						"04": "Pavón"
					}
				},
				{
					"nombre": "Coto Brus",
					"distritos": {
						"01": "San Vito",
						"02": "Sabalito",
						"03": "Aguabuena",
						"04": "Limoncito",
						"05": "Pittier"
					}
				},
				 {
					"nombre": "Parrita",
					"distritos": {
						"01": "Parrita"
					}
				},
				{
					"nombre": "Corredores",
					"distritos": {
						"01": "Corredor",
						"02": "La Cuesta",
						"03": "Canoas",
						"04": "Laurel"
					}
				},
				 {
					"nombre": "Garabito",
					"distritos": {
						"01": "Jacó",
						"02": "Tárcoles"
					}
				}
			]
		},
		{
			code: '7',
			"nombre": "Limón",
			"cantones": [
				{
					"nombre": "Central",
					"distritos": {
						"01": "Limón",
						"02": "Valle La Estrella",
						"03": "Rio Blanco",
						"04": "Matama"
					}
				},
				 {
					"nombre": "Pococí",
					"distritos": {
						"01": "Guapiles",
						"02": "Jiménez",
						"03": "Rita",
						"04": "Roxana",
						"05": "Cariari",
						"06": "Colorado",
						"07": "La Colonia"
					}
				},
				 {
					"nombre": "Siquirres",
					"distritos": {
						"01": "Siquirres",
						"02": "Pacuarito",
						"03": "Florida",
						"04": "Germania",
						"05": "El Cairo",
						"06": "Alegría"
					}
				},
				 { 
					"nombre": "Talamanca",
					"distritos": {
						"01": "Bratsi",
						"02": "Sixaola",
						"03": "Cahuita",
						"04": "Telire"
					}
				},
				 {
					"nombre": "Matina",
					"distritos": {
						"01": "Matina",
						"02": "Batán",
						"03": "Carrandi"
					}
				},
				 {
					"nombre": "Guácimo",
					"distritos": {
						"01": "Guácimo",
						"02": "Mercedes",
						"03": "Pocora",
						"04": "Rio Jiménez",
						"05": "Duacari"
					}
				}
			]
		}
	]
	
}