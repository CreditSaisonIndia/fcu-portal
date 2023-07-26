// import logo from './logo.svg';
// import './App.css';

// function App() {

//   console.log(logo, 'logo');
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={`${process.env.REACT_APP_CONTENT_HOST}${logo}`} className="App-logo" alt="logo" />
//         <p>
//           FCU Portal
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// // import { Routes, Route, Navigate } from "react-router-dom";
// // // import ProtectedRoute from './components/Authentication/ProtectedRoute';

// // function App() {

// //   return (
// //     <div className="App">
// //       <Routes>
// //         <Route index path="/" element={<Home/>} />
// //         <Route index path="/signin" element={<Signin />} />
// //         <Route
// //           path="/dashboard"
// //           element={
// //             <ProtectedRoute>
// //               <DashBoardHome />
// //             </ProtectedRoute>
// //           }
// //         />

// //         <Route
// //           path="/DsaAppForm"
// //           element={
// //             <ProtectedRoute>
// //               <DsaBaseAppForm/>
// //             </ProtectedRoute>
// //           }
// //         />
// //       </Routes>

// //     </div>
// //   );
// // }

// // export default App




import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Account } from './contexts/Account'
import { CustomAxios } from './contexts/CustomAxios';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import {Amplify} from 'aws-amplify';
import Home from './Home';
import ProtectedRoute from './ProtectedRoute';
import ForbiddenPage from './ForbiddenPage';
import Dashboard from './Dashboard';


Amplify.configure({
    aws_cognito_region: 'us-east-1',
    aws_user_pools_id: 'us-east-1_qY0eJKuWO',
    aws_user_pools_web_client_id: 'ulab4268c8852f8bgsfbf5jgl',
  });


const App = () => {

  return(
  <BrowserRouter>
  <Account>
    <React.Fragment>
    <ReactNotifications />
      <Routes>
      <Route path='fcuPortal' element={<ProtectedRoute><Home/></ProtectedRoute>}/>
        <Route
          path="fcuPortal/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute>
          }
        />
        <Route path="fcuPortal/forbidden" element={<ForbiddenPage/>}
        />
        {/* <Route exact path="/about" element={<About/>} /> */}
        {/* <Route exact path="/fcuPortal" element={<FcuPortal/>} /> */}
      </Routes>
    </React.Fragment>
    </Account>
  </BrowserRouter>
  )
}

export default App;