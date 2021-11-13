import './TaskItem.sass';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { useNavigate } from 'react-router-dom';

const TaskItem = ({ item, setTaskItemDetail }) => {
	const { id, date, taskType, author, account, terminal, status } = item;

	let navigate = useNavigate();
	function handleClick() {
		navigate(`/tasks/${id}`);
		setTaskItemDetail(item);
	}

	return (
		<tr onClick={handleClick}>
			{/* <Link className="link" to={`/tasks/${item.id}`}> */}
			<td>
				<div style={{ fontWeight: 'bold', flexWrap: 'wrap' }}>№{id}</div>
				<div>{formatDate(new Date(date))}</div>
			</td>
			<td style={{ maxWidth: '100px' }}>
				<div style={{ fontWeight: 'bold', flexWrap: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{taskType}</div>
				<div>{author}</div>
			</td>
			<td style={{ maxWidth: '100px' }}>
				<div style={{ fontWeight: 'bold', flexWrap: 'wrap', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{account}</div>
				<div>{terminal}</div>
			</td>
			<td>
				<div className={`status ${status}`}></div>
			</td>
			{/* </Link> */}
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

export default TaskItem;
