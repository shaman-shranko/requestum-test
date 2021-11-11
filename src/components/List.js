import React from "react";
import { FlatList, Linking, TouchableOpacity } from "react-native";
import { StyledTitle, RoundedView, BoldText, OtherText, Container } from "./CustomComponents"
const List = (props) => {
	const renderItem = ({ item, index }) => {
		return (
			<TouchableOpacity
				key={`item_${index}`}
				onPress={() => { Linking.openURL(item.html_url).catch(err => console.error('An error occurred', err)); }}
			>
				<RoundedView>
					<StyledTitle>{item.name}</StyledTitle>
					<OtherText><BoldText>Language: </BoldText>{item.language}</OtherText>
					<OtherText><BoldText>Description: </BoldText> {item.description}</OtherText>
				</RoundedView>
			</TouchableOpacity>
		);
	};
	return (
		<Container>
			{props.data && props.data.length > 0 &&
				<FlatList
					data={props.data}
					renderItem={renderItem}
					keyExtractor={(item) => item.id}
				/>}
		</Container>
	);
};

export default List;