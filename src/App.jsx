import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {Interface} from "./components/Interface";
import GalleryContainer from "./components/Gallery/GalleryContainer";
import { ARButton, XR } from "@react-three/xr";
import ProjectName from "./pages/projectName/ProjectName";

function App() {
  return (
    <>
    <ProjectName/>
      {/* <Canvas shadow camera = {{ position: [4, 0, -12], fov: 35}}>
        <XR>
        <Experience />
        </XR>
      </Canvas> */}
      <Interface/>
    </>
  );
}

export default App;
