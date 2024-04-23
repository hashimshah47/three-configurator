import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import {Interface} from "./components/Interface";
import GalleryContainer from "./components/Gallery/GalleryContainer";
import { ARButton, XR } from "@react-three/xr";
import ProjectName from "./pages/projectName/ProjectName";
// import { Popup } from "./components/Popup";
// import AlertDialogSlide from "./components/Dialog/Dialog";

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
      {/* <Popup/> */}
    </>
  );
}

export default App;
