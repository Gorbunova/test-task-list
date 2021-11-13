//Task list item Component
//Hooks
import { useNavigate } from 'react-router-dom';
//Styles
import './TaskItem.sass';

const TaskItem = ({ item, setTaskItemDetail }) => {
	const { id, date, taskType, author, account, terminal, status } = item;

	let navigate = useNavigate();

	function onSeeDetails() {
		navigate(`/tasks/${id}`);
		setTaskItemDetail(item);
	}

	return (
		<tr onClick={onSeeDetails}>
			<td className="cell">
				<div className="cell-title">№{id}</div>
				<div>{formatDate(new Date(date))}</div>
			</td>
			<td className="cell">
				<div className="cell-title shortened">{taskType}</div>
				<div className="shortened">{formatAuthor(author)}</div>
			</td>
			<td className="cell">
				<div className="cell-title shortened">{account}</div>
				<div className="shortened">{terminal}</div>
			</td>
			<td className="cell">
				<div className={`status ${status}`}></div>
			</td>
		</tr>
	);
};

export const formatDate = (date) => {
	const formatLen = (str) => {
		return str.length < 2 ? `0${str}` : str;
	};
	const day = formatLen(date.getDate().toString()),
		month = formatLen((date.getMonth() + 1).toString()),
		year = date.getFullYear().toString().slice(-2);

	return `${day}.${month}.${year}`;
};

const formatAuthor = (author) => {
	const words = author.split(' ');
	return `${words[0]} ${words[1].slice(0, 1)}. ${words[2].slice(0, 1)}.`;
};

export default TaskItem;
