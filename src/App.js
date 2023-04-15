import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import Developers from './components/Developers';
import SingleDeveloper from './components/SingleDeveloper';
import ParallelQuerys from './components/ParallelQuerys';
import { DynamicParaller } from './components/DynamicParaller';
import DependedQuery from './components/DependedQuery';
import PaginatedQuery from './components/PaginatedQuery';
import { ToastContainer } from 'react-toastify';
import { FaRegGrinTongueWink } from 'react-icons/fa'
import SampleDeveloper from './components/SampleDeveloper';
import 'react-toastify/dist/ReactToastify.css';
import Mutation from './components/Mutation';
import { useCallback } from "react";
import { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import NewHook from './components/NewHook';
import Test from './components/Test';
import HomePage from './components/HomePage';

function App() {

  const particlesInit = useCallback(async (Engine) => {
    console.log(Engine);
    await loadFull(Engine);
  }, []);
  const particlesLoaded = useCallback(async (Container) => {
    await console.log(Container);
  }, []);


  return (
    <div className="App">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#002242",
            },
            links: {
              color: "#002242",
              distance: 150,
              enable: true,
              opacity: 0.7,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 1100,
              },
              value: 80,
            },
            opacity: {
              value: 0.7,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      <Router>
        <NavbarComponent />
        <Routes>
          <Route exact path='/' element={<HomePage data={"new data"} newData={"123"} />} />
          <Route exact path='/test' element={<Test />} />
          <Route exact path='/super-heroes' element={<SampleDeveloper />} />
          <Route exact path='/developers' element={<Developers />} />
          <Route exact path='/developers/:developerId' element={<SingleDeveloper />} />
          <Route exact path='/parallel-query' element={<ParallelQuerys />} />
          <Route exact path='/dynamic-query' element={<DynamicParaller developerId={[1, 2, 3, 4]} />} />
          <Route exact path='/depended-query' element={<DependedQuery email={"mulanikeyur30@gmail.com"} />} />
          <Route exact path='/paginated-query' element={<PaginatedQuery />} />
          <Route exact path='/mutation' element={<Mutation />} />
          <Route exact path='/newHook' element={<NewHook />} />
        </Routes>
        <ToastContainer position="top-right" icon={FaRegGrinTongueWink} />
      </Router>
    </div >
  );
}

export default App;
