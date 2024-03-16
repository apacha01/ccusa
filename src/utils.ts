// Adapted from https://gist.github.com/johannesjo/6b11ef072a0cb467cc93a885b5a1c19f
export const getSenatorAssistantsList = ( html: string ): { headers: string[] | undefined; rows: {name: string, category: string}[]; } | undefined => {
	const personalTableContainerRegex = /<div.*id="Personal"[^>]*([\s\S]*?)<\/div>/g;
	const headerRegex = /<th>([^<]*)<\/th>/g;
	const rowRegex = /<td>([^<]*)<\/td>/g;

	const div = html.match(personalTableContainerRegex);
	
	if (div) {
		const headers = div[0].match(headerRegex)?.map(h => h.trim().replace('<th>', '').replace('</th>', ''));
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

		return {headers, rows}
	}
	else return undefined;
}