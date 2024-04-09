import { Canvas } from "@react-three/fiber";
import { ARButton, Controllers, Hands, XR } from "@react-three/xr";
import Gallery from "./Gallery";

const GalleryContainer = () => {

  return (
    <>
      <ARButton sessionInit={{
        requiredFeatures: ["hit-test"],
      }} />
      <Canvas >
        <XR>
            <Gallery/>
        </XR>
      </Canvas>
    </>
  )
}

export default GalleryContainer