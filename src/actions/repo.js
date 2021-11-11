import { APP_DATA_LIST } from '../constants/app';
const { Octokit } = require("@octokit/core");
import { setHistory, getHistory } from "../services/service"
export const setInfo = data => ({
	type: APP_DATA_LIST,
	payload: data,
});
const octokit = new Octokit({ auth: `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` });
export const loadQuery = (query) => async (dispatch) => {
	await setHistory(query);
	try {
		let result = await octokit.request('GET /orgs/{org}/repos?type=Code', {
			org: query
		})
		dispatch(setInfo({ data: result.data }))
	} catch (err) {
		// dispatch(setInfo({ data: null }))
	}
}