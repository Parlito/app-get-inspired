import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background-color: white;
  padding: 24px;
`;

export const Content = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingBottom: getBottomSpace() + 48
  },
})`
  width: 100%;
`;

export const SubTitle = styled.Text`
  font-size: 13px;
  color: black;
  text-align: center;
  margin: 12px 0 24px;
`;

export const Footer = styled.View`    
  flex-direction: row;
  justify-content: space-around;
  align-items: center; 
  margin-top: 50px; 
`;

export const BackText = styled.Text`
  font-size: 14px;
  color: #318ce7;
  margin-left: 5px;
`;

export const BackButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;