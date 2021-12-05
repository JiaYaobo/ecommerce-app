import styled from "styled-components";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const ShoeModel = () => {
  const gltf = useLoader(GLTFLoader, "/scene.gltf");
  console.log(gltf);
  return (
    <>
      <primitive object={gltf.scene} scale={0.4} />
    </>
  );
};

export default ShoeModel;
