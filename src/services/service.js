import AsyncStorage from '@react-native-community/async-storage';

export const getHistory = async () => {
	history = await AsyncStorage.getItem('history');
	if (history) {
		return JSON.parse(history)
	}
	return null
};

export const setHistory = async (query) => {
	let history = await getHistory()
	if (history) {
		if (history.length == 5 && !history.includes(query)) {
			history = history.slice(1);
		}
	} else {
		history = []
	}
	if (!history.includes(query)) {
		history.push(query)
	}
	await AsyncStorage.removeItem('history');
	await AsyncStorage.setItem('history', JSON.stringify(history))
}