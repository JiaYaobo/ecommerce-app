import styled from "styled-components";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ShoeModel = () => {
  const gltf = useLoader(GLTFLoader, "some.gltf");

  return (
    <div>
      <primitive object={gltf} scale={0.4} />
    </div>
  );
};

export default ShoeModel;
