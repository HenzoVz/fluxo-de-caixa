import styled from "styled-components/native";

export const TextTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  background-color: transparent;
  color: #000;
  padding-top: 60px;
`;

export const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #a303c3;
`;

export const AreaButton = styled.View`
  flex: 1;
  margin-top: 30px;
`;

export const Button = styled.TouchableHighlight`
  margin: 10px;
  height: 40px;
  width: 300px;
  background-color: #ddd;
  justify-content: center;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-weight: bold;
  text-align: center;
  font-size: 18px;
`;

export const Logo = styled.Image`
  height: 100px;
  width: 100px;
  background-color: #a303c3;
`;

export const ContainerLogo = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #a303c3;
`;