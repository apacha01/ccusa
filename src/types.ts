export interface SenatorOfficialRecord {
    ID:                  string;
    BLOQUE:              string;
    APELLIDO:            string;
    NOMBRE:              string;
    PROVINCIA:           string;
    "PARTIDO O ALIANZA": string;
    D_LEGAL:             Date;
    C_LEGAL:             Date;
    D_REAL:              Date;
    C_REAL:              string;
    EMAIL:               string;
    TELEFONO:            string;
    FOTO:                string;
    FACEBOOK:            string;
    TWITTER:             string;
    INSTAGRAM:           string;
    YOUTUBE:             string;
}

export interface Senator {
	fullName: string;
	id: string;
	party: string;
	province: string;
	cost: string;
	assistants: SenatorAssistant[];
}

export interface SenatorAssistant { 
	name: string;
	category: string; 
}