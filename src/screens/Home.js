import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import { getHistory } from "../services/service"
import { loadQuery } from "../actions/repo"
import List from "../components/List"
import { CenteredText, Clickable,Container, Input } from "../components/CustomComponents"


const HomeScreen = (props) => {
	const [query, setQuery] = useState("");
	const [loading, setLoading] = useState(false);

	const [history, setHistory] = useState([]);

	useEffect(() => {
		checkHistory()
	}, [query]);

	const checkHistory = async () => {
		let h = await getHistory();
		if (h != history) {
			setHistory(h);
		}
	}

	const finishEditing = () => {
		setLoading(true);
		setTimeout(() => {
			setLoading(true)
			props.goLoadQuery(query);
			setLoading(false);
		}, 300)
	}

	return (
		<Container>
			<Input
				placeholder="Please enter the organisation"
				value={query}
				onChangeText={(val) => setQuery(val)}
				onEndEditing={finishEditing}
			/>
			<View>
			<Clickable>Search history:</Clickable>
				{history && history.map((element, index) =>
					<TouchableOpacity key={`index_` + index} onPress={() => {setQuery(element);finishEditing()}}>
						<Clickable>{element}</Clickable>
					</TouchableOpacity>)}
			</View>
			{!loading ?
				<List data={props.data} /> :
				<CenteredText>Loading...</CenteredText>}
		</Container>
	)
}
const mapStateToProps = (state) => {
	return {
		data: state.repo.data,
	};
};
const mapDispatchToProps = dispatch => ({
	goLoadQuery: async (query) => {
		await dispatch(loadQuery(query))
	},
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HomeScreen);
