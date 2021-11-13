import Table from 'react-bootstrap/Table';
import TaskItem from '../TaskItem/TaskItem';
import useService from '../../services/Service';
import { useState, useEffect } from 'react';

const TasksList = (props) => {
	const { offset, tasksDisplayCount, setTasksTotalCount, setTaskItemDetail } = props;
	const { getAllTasks } = useService();
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		getAllTasks().then((res) => {
			setTasks(res);
			setTasksTotalCount(res.length);
		});
	}, []);

	return (
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
