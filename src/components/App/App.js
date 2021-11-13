//Main App Component

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//Hooks
import { useState } from 'react';
//Components
import MainPage from '../pages/MainPage';
import TaskPage from '../pages/TaskPage/TaskPage';
import Page404 from '../pages/404';
//Styles
import './App.sass';

function App() {
	const [taskItemDetail, setTaskItemDetail] = useState(null);

	return (
		<>
			<Router>
				<div className="App">
					<Routes>
						<Route exact path="/" element={<MainPage setTaskItemDetail={setTaskItemDetail} />}></Route>
						<Route exact path="/tasks/:taskId" element={<TaskPage taskItemDetail={taskItemDetail} />}></Route>
						<Route path="*" element={<Page404 />}></Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
