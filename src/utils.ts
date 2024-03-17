import { SALARY_SCALE_BY_CATEGORY, SENATOR_SALARY, URL_SENATOR_BY_ID } from "./constants";
import type { Senator, SenatorAssistant, SenatorOfficialRecord } from "./types";

const getSenatorCost = async (senatorId: string, senatorAssistants?: SenatorAssistant[] ) => {
	let cost = SENATOR_SALARY;
	let senatorAssistantsFetched = senatorAssistants;

	if (!senatorAssistants){
		senatorAssistantsFetched = await fetch(URL_SENATOR_BY_ID(senatorId))
			.then((r) => r.text())
			.then((html) => getSenatorAssistantsList(html))
			.catch(console.error);
	}

	senatorAssistantsFetched?.forEach((sa) => {
		cost += SALARY_SCALE_BY_CATEGORY[sa.category];
	});

	return cost;
};

// Adapted from https://gist.github.com/johannesjo/6b11ef072a0cb467cc93a885b5a1c19f
export const getSenatorAssistantsList = ( html: string ): SenatorAssistant[] | undefined => {
	const personalTableContainerRegex = /<div.*id="Personal"[^>]*([\s\S]*?)<\/div>/g;
	const rowRegex = /<td>([^<]*)<\/td>/g;

	const div = html.match(personalTableContainerRegex);
	
	if (div) {
		const rawRows = div[0].match(rowRegex)?.map(r => r.trim().replace('<td>', '').replace('</td>', '').replace(/\n/g, '').replace(/\t+/g, ' '));
		const rows: {name: string, category: string}[]  = [];
		let tmp: string[] = [];

		rawRows?.forEach(rr => {
			tmp.push(rr);

			if (tmp.length === 2) {
				rows.push({name: tmp[0], category: tmp[1]});
				tmp = [];
			}
		});

		return rows;
	}
	else return undefined;
};

export const getSenatorFullInfo = async (
	senator: SenatorOfficialRecord,
): Promise<Senator> => {
	const assistants = (await fetch(URL_SENATOR_BY_ID(senator.ID))
		.then((r) => r.text())
		.then((html) => getSenatorAssistantsList(html))
		.catch(console.error)) as SenatorAssistant[];
	const cost = (await getSenatorCost(senator.ID, assistants)).toFixed(2);

	return {
		fullName: senator.APELLIDO + ", " + senator.NOMBRE,
		cost,
		id: senator.ID,
		party: senator["PARTIDO O ALIANZA"],
		province: senator.PROVINCIA,
		assistants
	};
};