//Object detail page component
import { Link } from 'react-router-dom';
import { formatDate } from '../../TaskItem/TaskItem';
//Styles
import './TaskPage.sass';

const TaskPage = ({ taskItemDetail }) => {
	//Function transforms status
	const transformStatus = (status) => {
		switch (status) {
			case 'new':
				return 'Новое';
			case 'completed':
				return 'Выполнено';
			case 'assigned_to':
				return 'Назначено';
			case 'started':
				return 'Выполняется';
			case 'declined':
				return 'Отменено';
			default:
				return;
		}
	};

	return (
		<>
			<Link to={'/'} className="link-back">
				Назад к списку
			</Link>

			<div className="info-wrapper">
				<p>№{taskItemDetail.id}</p>
				<p>Дата: {formatDate(new Date(taskItemDetail.date))}</p>
				<p>Тип задания: {taskItemDetail.taskType}</p>
				<p>Автор: {taskItemDetail.author}</p>
				<p>Аккаунт: {taskItemDetail.account}</p>
				<p>Терминал: {taskItemDetail.terminal}</p>
				<p>Статус: {transformStatus(taskItemDetail.status)}</p>
			</div>
		</>
	);
};

export default TaskPage;
