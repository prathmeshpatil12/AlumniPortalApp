import './App.css';
import {React} from 'react';
import { AppWrapper } from './components/AppWrapper';
import Login from './components/Login/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminDashboard from './components/Admin/AdminDashboard/AdminDashboard';
import StudentDashboard from './components/Student/StudentDashboard/StudentDashboard';
import AlumniDashboard from './components/Alumni/AlumniDashboard/AlumniDashboard';
import CoordinatorDashboard from './components/Coordinator/CoordinatorDashboard/CoordinatorDashboard';
import AddStudent from './components/Student/StudentCRUD/AddStudent';
import ViewStudent from './components/Student/StudentCRUD/ViewStudent';
import RemoveStudent from './components/Student/StudentCRUD/RemoveStudent';
import TransferStudentToAlumni from './components/Student/StudentCRUD/TransferStudentToAlumni';
import AddAlumni from './components/Alumni/AlumniCRUD/AddAlumni';
import ViewAlumni from './components/Alumni/AlumniCRUD/ViewAlumni';
import RemoveAlumni from './components/Alumni/AlumniCRUD/RemoveAlumni';
import AddCoordinator from './components/Coordinator/CoordinatorCRUD/AddCoordinator';
import ViewCoordinator from './components/Coordinator/CoordinatorCRUD/ViewCoordinator';
import RemoveCoordinator from './components/Coordinator/CoordinatorCRUD/RemoveCoordinator';
import ViewInternships from './components/Internship/InternshipCRUD/ViewInternships';
import ViewJobs from './components/JobOpportunities/JobOpportunitiesCRUD/ViewJobs';
import ViewEvents from './components/EventAndWorkshops/EventCRUD/ViewEvents';
import AddInternship from './components/Internship/InternshipCRUD/AddInternship';
import AddJob from './components/JobOpportunities/JobOpportunitiesCRUD/AddJob';
import AddEvent from './components/EventAndWorkshops/EventCRUD/AddEvent';
import ChangePassword from './components/Profiles/PasswordChange/ChangePassword';
import UpdateStudentProfile from './components/Profiles/ProfileChange/UpdateStudentProfile';
import UpdateAlumniProfile from './components/Profiles/ProfileChange/UpdateAlumniProfile';
import UpdateCoordinatorProfile from './components/Profiles/ProfileChange/UpdateCoordinatorProfile';
import AskDoubt from './components/Doubt/AskDoubt';


function App() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<AppWrapper />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/changePassword" element={<ChangePassword />} />

          <Route exact path="/adminDashboard" element={<AdminDashboard />}></Route>
          <Route exact path="/studentDashboard" element={<StudentDashboard />}></Route>
          <Route exact path="/alumniDashboard" element={<AlumniDashboard />}></Route>
          <Route exact path="/coordinatorDashboard" element={<CoordinatorDashboard />}></Route>
          <Route exact path="/addStudent" element={<AddStudent/>}></Route>
          <Route exact path="/viewStudents" element={<ViewStudent/>}></Route>
          <Route exact path="/removeStudent" element={<RemoveStudent/>}></Route>
          <Route exact path="/transferStudent" element={<TransferStudentToAlumni/>}></Route>
          <Route exact path="/addAlumni" element={<AddAlumni/>}></Route>
          <Route exact path="/viewAlumni" element={<ViewAlumni/>}></Route>
          <Route exact path="/removeAlumni" element={<RemoveAlumni/>}></Route>
          <Route exact path="/addCoordinator" element={<AddCoordinator/>}></Route>
          <Route exact path="/viewCoordinators" element={<ViewCoordinator/>}></Route>
          <Route exact path="/removeCoordinator" element={<RemoveCoordinator/>}></Route>
          <Route exact path="/viewInternships" element={<ViewInternships />}></Route>
          <Route exact path="/viewJobs" element={<ViewJobs />}></Route>
          <Route exact path="/viewEvents" element={<ViewEvents />}></Route>
          <Route exact path='/addInternship' element={<AddInternship />}></Route>
          <Route exact path='/addJob' element={<AddJob />}></Route>
          <Route exact path='/addEvent' element={<AddEvent />}></Route>
          <Route exact path='/updateStudentProfile' element={<UpdateStudentProfile />}></Route>
          <Route exact path='/updateAlumniProfile' element={<UpdateAlumniProfile />}></Route>
          <Route exact path='/updateCoordinatorProfile' element={<UpdateCoordinatorProfile />}></Route>
          <Route exact path='/askDoubt' element={<AskDoubt />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
