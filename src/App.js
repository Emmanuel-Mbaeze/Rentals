// /*import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import BestMemories from "./component/BestMemories";
// import MainView from "./component/MainView";
// import CreateMemories from "./component/CreateMemories";
// import EditMemories from "./component/EditMemory";
// import Header from "./component/Header";
// import HomeScreen from "./component/HomeScreen";
// import MainCreate from "./component/MainCreate";
// import Private from "./component/Private";
// import SignIn from "./component/SignIn";
// import SignUp from "./component/SignUp";

// const App = () => {
// 	return (
// 		<BrowserRouter>
// 			<Header />
// 			<Routes>
// 				<Route
// 					path="/"
// 					element={
// 						<Private>
// 							<HomeScreen />
// 						</Private>
// 					}
// 				/>
// 				<Route path="/best" element={<BestMemories />} />
// 				<Route path="/signup" element={<SignUp />} />
// 				<Route path="/signup/signin" element={<SignIn />} />

// 				<Route
// 					path="/createMemories"
// 					element={
// 						<Private>
// 							<CreateMemories />
// 						</Private>
// 					}
// 				/>

// 				<Route
// 					path="/mainView"
// 					element={
// 						<Private>
// 							<MainView />
// 						</Private>
// 					}
// 				/>

// 				<Route
// 					path="/bestCreate"
// 					element={
// 						<Private>
// 							<MainCreate />
// 						</Private>
// 					}
// 				/>
// 				<Route
// 					path="/updateMemories"
// 					element={
// 						<Private>
// 							<EditMemories />
// 						</Private>
// 					}
// 				/>
// 			</Routes>
// 		</BrowserRouter>
// 	);
// };

// export default App;*/

// import React from 'react'
// import Header from './Components/Header.js/Header'
// import Home from './Components/Homescreen/Home'

// const App = () => {
//   return (
// 	<div>
// 	  <Header/>
// 	  <Home/>
// 	</div>
//   )
// }

// export default App

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./RentalComp/Booking/Booking";
import Detail from "./RentalComp/Detail/Detail";
import Header from "./RentalComp/Header/Header";
import Home from "./RentalComp/Homescreen/Home";
import Contentupload from "./RentalComp/Pages/Contentupload";
import Signin from "./RentalComp/Pages/Signin";
import SIgnUp from "./RentalComp/Pages/SIgnUp";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/signup" element={<SIgnUp />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/content-upload" element={<Contentupload />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

// import React from "react";
// import DictaPhone from "./VoiceComp/DictaPhone";

// const App = () => {
//   return (
//     <div>
//       <DictaPhone />
//     </div>
//   );
// };

// export default App;
