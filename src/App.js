import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
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


function App() {
  return (
    <div className="App">
      <Router>
        <NavbarComponent />
        <Routes>
          <Route exact path='/' element={<HomePage />} />
          <Route exact path='/super-heroes' element={<SampleDeveloper />} />
          <Route exact path='/developers' element={<Developers />} />
          <Route exact path='/developers/:developerId' element={<SingleDeveloper />} />
          <Route exact path='/parallel-query' element={<ParallelQuerys />} />
          <Route exact path='/dynamic-query' element={<DynamicParaller developerId={[1, 2, 3, 4]} />} />
          <Route exact path='/depended-query' element={<DependedQuery email={"mulanikeyur30@gmail.com"} />} />
          <Route exact path='/paginated-query' element={<PaginatedQuery />} />
          <Route exact path='/mutation' element={<Mutation />} />
        </Routes>
        <ToastContainer position="top-right" icon={FaRegGrinTongueWink} />
      </Router>
    </div>
  );
}

export default App;
