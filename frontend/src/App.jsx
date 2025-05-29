import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Carousel from './components/Carousel'
import Features from './components/Features'
import Footer from './components/Footer'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import AboutUsPage from './pages/AboutUsPage'
import AcademicsPage from './pages/AcademicsPage'
import EventsPage from './pages/EventsPage'
import ContactPage from './pages/ContactPage'
import StudentPanelPage from './pages/StudentPanelPage';
import TeacherPanelPage from './pages/TeacherPanelPage';
import ManagerPanelPage from './pages/ManagerPanelPage';
import EnhancedHomePage from './pages/EnhancedHomePage';
import AdmissionForm from './pages/AdmissionForm';
import AdmissionsPage from './pages/AdmissionsPage';

// Import student panel sections
import StudentAccount from './components/StudentPanel/StudentAccount';
import StudentDashboard from './components/StudentPanel/StudentDashboard';
import StudentExams from './components/StudentPanel/StudentExams';
import StudentAssignments from './components/StudentPanel/StudentAssignments';
import StudentCourseMaterials from './components/StudentPanel/StudentCourseMaterials';
import StudentParentTeacherMeeting from './components/StudentPanel/StudentParentTeacherMeeting';
import StudentProfile from './components/StudentPanel/StudentProfile';
import CommunicationCenter from './components/StudentPanel/CommunicationCenter';
import Fees from './components/StudentPanel/Fees';
import Attendance from './components/StudentPanel/Attendance';
import Marksheet from './components/StudentPanel/Marksheet';
import Complain from './components/StudentPanel/Complain';
import Notification from './components/StudentPanel/Notification';
import Group from './components/StudentPanel/Group';

// Import teacher panel sections
import TeacherAccount from './components/TeacherPanel/TeacherAccount';
import TeacherFees from './components/TeacherPanel/TeacherFees';
import TeacherAttendance from './components/TeacherPanel/TeacherAttendance';
import TeacherMarksheet from './components/TeacherPanel/TeacherMarksheet';
import TeacherComplain from './components/TeacherPanel/TeacherComplain';
import TeacherNotification from './components/TeacherPanel/TeacherNotification';
import TeacherGroup from './components/TeacherPanel/TeacherGroup';
import TeacherAdmissions from './components/TeacherPanel/TeacherAdmissions';
import TeacherSalary from './components/TeacherPanel/TeacherSalary';
import TeacherPaymentSettings from './components/TeacherPanel/TeacherPaymentSettings';
import TeacherExamSchedule from './components/TeacherPanel/TeacherExamSchedule';
import TeacherGradeBook from './components/TeacherPanel/TeacherGradeBook';
import TeacherLibrary from './components/TeacherPanel/TeacherLibrary';
import TeacherDocuments from './components/TeacherPanel/TeacherDocuments';
import TeacherInventory from './components/TeacherPanel/TeacherInventory';
import TeacherCalendar from './components/TeacherPanel/TeacherCalendar';
import TeacherCurriculum from './components/TeacherPanel/TeacherCurriculum';
import TeacherPTM from './components/TeacherPanel/TeacherPTM';

// Import manager panel sections
import ManagerAccount from './components/ManagerPanel/ManagerAccount';
import ManagerFees from './components/ManagerPanel/ManagerFees';
import ManagerMarksheet from './components/ManagerPanel/ManagerMarksheet';
import ManagerComplain from './components/ManagerPanel/ManagerComplain';
import ManagerNotification from './components/ManagerPanel/ManagerNotification';
import ManagerGroup from './components/ManagerPanel/ManagerGroup';
import ManagerFeeStructure from './components/ManagerPanel/ManagerFeeStructure';
import ManagerAttendance from './components/ManagerPanel/ManagerAttendance';
import ManagerAddTeacher from './components/ManagerPanel/ManagerAddTeacher';
import ManagerSalary from './components/ManagerPanel/ManagerSalary';
import ManagerAllStudents from './components/ManagerPanel/ManagerAllStudents';
import ManagerMoneyManagement from './components/ManagerPanel/ManagerMoneyManagement';
import ManagerClassRoutine from './components/ManagerPanel/ManagerClassRoutine';
import ManagerBus from './components/ManagerPanel/ManagerBus';
import ManagerAdmissions from './components/ManagerPanel/ManagerAdmissions';
import ManagerInquiries from './components/ManagerPanel/ManagerInquiries';
import ManagerLeaveManagement from './components/ManagerPanel/ManagerLeaveManagement';
import ManagerNotifications from './components/ManagerPanel/ManagerNotifications';
import ManagerBudget from './components/ManagerPanel/ManagerBudget';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/about" element={<AboutUsPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* Student Panel Routes */}
            <Route path="/student-panel" element={<StudentPanelPage />}>
              <Route index element={<StudentDashboard />} /> {/* Default route for /student-panel */}
              <Route path="account" element={<StudentAccount />} />
              <Route path="exams" element={<StudentExams />} />
              <Route path="assignments" element={<StudentAssignments />} />
              <Route path="course-materials" element={<StudentCourseMaterials />} />
              <Route path="ptm" element={<StudentParentTeacherMeeting />} />
              <Route path="profile" element={<StudentProfile />} />
              <Route path="communication" element={<CommunicationCenter />} />
              <Route path="fees" element={<Fees />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="marksheet" element={<Marksheet />} />
              <Route path="complain" element={<Complain />} />
              <Route path="notification" element={<Notification />} />
              <Route path="group" element={<Group />} />
            </Route>

            {/* Teacher Panel Routes */}
            <Route path="/teacher-panel" element={<TeacherPanelPage />}>
              <Route index element={<TeacherAccount />} /> {/* Default route for /teacher-panel */}
              <Route path="account" element={<TeacherAccount />} />
              <Route path="fees" element={<TeacherFees />} />
              <Route path="attendance" element={<TeacherAttendance />} />
              <Route path="marksheet" element={<TeacherMarksheet />} />
              <Route path="exam-schedule" element={<TeacherExamSchedule />} />
              <Route path="grade-book" element={<TeacherGradeBook />} />
              <Route path="library" element={<TeacherLibrary />} />
              <Route path="documents" element={<TeacherDocuments />} />
              <Route path="inventory" element={<TeacherInventory />} />
              <Route path="calendar" element={<TeacherCalendar />} />
              <Route path="curriculum" element={<TeacherCurriculum />} />
              <Route path="ptm" element={<TeacherPTM />} />
              <Route path="complaints" element={<TeacherComplain />} />
              <Route path="notifications" element={<TeacherNotification />} />
              <Route path="groups" element={<TeacherGroup />} />
              <Route path="admissions" element={<TeacherAdmissions />} />
              <Route path="salary" element={<TeacherSalary />} />
              <Route path="payment-settings" element={<TeacherPaymentSettings />} />
            </Route>

            {/* Manager Panel Routes */}
            <Route path="/manager-panel" element={<ManagerPanelPage />}>
              <Route index element={<ManagerAccount />} /> {/* Default route for /manager-panel */}
              <Route path="account" element={<ManagerAccount />} />
              <Route path="fees" element={<ManagerFees />} />
              <Route path="fee-structure" element={<ManagerFeeStructure />} />
              <Route path="attendance" element={<ManagerAttendance />} />
              <Route path="marksheet" element={<ManagerMarksheet />} />
              <Route path="complaints" element={<ManagerComplain />} />
              <Route path="notifications" element={<ManagerNotifications />} />
              <Route path="groups" element={<ManagerGroup />} />
              <Route path="add-teacher" element={<ManagerAddTeacher />} />
              <Route path="leave-management" element={<ManagerLeaveManagement />} />
              <Route path="budget" element={<ManagerBudget />} />
              <Route path="salaries" element={<ManagerSalary />} />
              <Route path="all-students" element={<ManagerAllStudents />} />
              <Route path="money-management" element={<ManagerMoneyManagement />} />
              <Route path="class-routine" element={<ManagerClassRoutine />} />
              <Route path="buses" element={<ManagerBus />} />
              <Route path="admissions" element={<ManagerAdmissions />} />
              <Route path="inquiries" element={<ManagerInquiries />} />
            </Route>

            <Route path="/" element={<EnhancedHomePage />} />
            <Route path="/admissions" element={<AdmissionForm/>} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
