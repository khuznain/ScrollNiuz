import {ParamListBase, RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

export interface StackNavigationProps<
  ParamList extends ParamListBase,
  RouteName extends keyof ParamList = string
> {
  navigation: StackNavigationProp<ParamList, RouteName>;
  route: RouteProp<ParamList, RouteName>;
}

export type Routes = {
  Login: undefined;
  Register: undefined;
  CreateProfile: undefined;
  ChooseInterest: undefined;
  SelectLeague: undefined;
  SelectTeam: undefined;
  SelectChannel: undefined;
};
