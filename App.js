import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import styled from "styled-components/native";
import Counter from "./src/components/Coutner";
import Form from "./src/components/Form";
import Button from "./src/components/Button";
import Length from "./src/components/Length";
import Dog from "./src/components/Dog";

const Container = styled.View`
  flex: 1;
  background-color: #1abc9c;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Container>
      {/* <Button
        title={isVisible ? "Hide" : "Show"}
        onPress={() => setIsVisible((prev) => !prev)}
      />
      {isVisible && <Form />} */}
      {/* <Length /> */}
      <Dog />
    </Container>
  );
}

const styles = StyleSheet.create({});
