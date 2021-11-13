//Tasks List Component

//Hooks
import { useState, useEffect } from 'react';
import useService from '../../services/Service';
//Table from bootstrap-react
import Table from 'react-bootstrap/Table';
//Components
import TaskItem from '../TaskItem/TaskItem';
import LoadingMessage from '../LoadingMessage/LoadingMessage';

const TasksList = (props) => {
	const { offset, tasksDisplayCount, setTasksTotalCount, setTaskItemDetail } = props;
	const { getAllTasks, loading } = useService();
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getAllTasks().then((res) => {
			setTasks(res);
			setTasksTotalCount(res.length);
		});
	}, []);

	return loading ? (
		<LoadingMessage />
	) : (
		<Table bordered hover>
			<thead>
				<tr>
					<th>Номер / Дата</th>
					<th>Тип задания / Автор</th>
					<th>Аккаунт / Терминал</th>
					<th>Статус</th>
				</tr>
			</thead>
			<tbody>
				{tasks.map((item, i) => {
					if (i >= tasksDisplayCount * offset && i < tasksDisplayCount * offset + tasksDisplayCount) {
						return <TaskItem key={item.oguid} item={item} setTaskItemDetail={setTaskItemDetail} />;
					} else return null;
				})}
			</tbody>
		</Table>
	);
};

export default TasksList;
