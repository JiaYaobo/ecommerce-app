import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import styled from "styled-components";
import ShoeModel from "./ShoeModel";

const Container = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  width: 500px;
  height: 90vh;
`;

const TDShoe = () => {
  return (
    <Container>
      <Canvas>
        <Suspense fallback={null}>
          <ShoeModel />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default TDShoe;
