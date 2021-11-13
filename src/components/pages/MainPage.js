//Hooks
import { useState } from 'react';
//Components
import TasksList from '../TasksList/TasksList';
import PaginationControl from '../PaginationControl/PaginationControl';

const MainPage = ({ setTaskItemDetail }) => {
	//Total number of tasks
	const [tasksTotalCount, setTasksTotalCount] = useState(0);
	//Number of currently displayed tasks
	const [tasksDisplayCount, setTasksDisplayCount] = useState(0);
	//Offset pages in pagination
	const [offset, setMainOffset] = useState(0);
	return (
		<>
			<TasksList
				setTasksTotalCount={setTasksTotalCount}
				tasksDisplayCount={tasksDisplayCount}
				offset={offset}
				setTaskItemDetail={setTaskItemDetail}
			/>
			{tasksTotalCount === 0 ? null : (
				<PaginationControl tasksTotalCount={tasksTotalCount} setTasksDisplayCount={setTasksDisplayCount} setMainOffset={setMainOffset} />
			)}
		</>
	);
};

export default MainPage;
