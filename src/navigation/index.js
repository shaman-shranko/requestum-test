import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../screens/Home';


const AppStack = createStackNavigator(
	{
		Home: HomeScreen,
	},
	{
		headerMode: 'none',
	}
);

const AppContainer = createAppContainer(AppStack);

export default AppContainer;
