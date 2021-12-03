import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import styled from "styled-components";
import ShoeModel from "./ShoeModel";

const Container = styled.div``;

const TDShoe = () => {
  return (
    <Container>
      <Canvas>
        <Suspense fallback={null}>
          <ShoeModel />
          <OrbitControls />
          <Environment preset="dawn" background />
        </Suspense>
      </Canvas>
    </Container>
  );
};

export default TDShoe;
