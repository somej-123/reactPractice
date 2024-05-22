import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chpter_06/NotificationList';
import Pratice1 from './pratice/Practice1';
import Accommodate from './chapter_07/Accmmodae';
import ConfrimButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AAttendanceBook';
import NameForm from './pratice/Practice2';
import Reservation from './pratice/practice3';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';
import MainPage from './pratice/practice7';
import Sample from './pratice/Practice8';
import Sample2 from './pratice/Practice9';
import Blocks from './chapter_15/Blocks';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Blocks />
  </React.StrictMode>
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
