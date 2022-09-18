import React, { Fragment, useState } from "react";
import styled from "styled-components/native";
import Button from "./Button";

const StyledText = styled.Text`
  font-size: 50px;
  color: #ffffff;
  margin: 10px;
`;

const Control = styled.View`
  flex-direction: row;
  width: 45%;
  justify-content: space-between;
  align-items: center;
`;

const Counter = () => {
  const [count, setCount] = useState(0);
  const onPressPlus = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };
  return (
    <Fragment>
      <StyledText>{count}</StyledText>
      <Control>
        <Button title="+" onPress={onPressPlus} />
        <Button title="-" onPress={() => setCount(count - 1)} />
      </Control>
    </Fragment>
  );
};

export default Counter;
