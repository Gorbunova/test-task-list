//Pagination controls Component

//Hooks
import { useEffect, useState } from 'react';
//Components
import Pagination from 'react-bootstrap/Pagination';
//Styles
import './PaginationControl.sass';

const PaginationControl = (props) => {
	//The number of displayed objects when viewed for the first time
	const startTasksCount = 25;

	//States
	const [tasksCount, setTasksCount] = useState(startTasksCount);
	const [offset, setOffset] = useState(0);

	//Props
	const { tasksTotalCount, setTasksDisplayCount, setMainOffset } = props;

	useEffect(() => {
		if (localStorage.getItem('taskCount')) {
			setTasksCount(+localStorage.getItem('taskCount'));
		}
		if (localStorage.getItem('offset')) {
			setOffset(+localStorage.getItem('offset'));
		}
		setTasksDisplayCount(tasksCount);
		setMainOffset(offset);
	}, [setTasksDisplayCount, tasksCount, setMainOffset, offset]);

	//The function forms a string with an interval of current objects
	const displayCurrentPages = () => {
		const firstTask = offset * tasksCount + 1;
		const lastTask = offset * tasksCount + tasksCount > tasksTotalCount ? tasksTotalCount : offset * tasksCount + tasksCount;
		return `${firstTask} - ${lastTask}`;
	};

	//The function forms an array of possible numbers of displayed items
	const tasksCountArray = () => {
		const array = [];
		for (let i = 5; i <= tasksTotalCount; i++) {
			if (i % 5 === 0) array.push(i);
		}
		return array;
	};

	const onChangeTaskCount = (e) => {
		localStorage.setItem('taskCount', +e.target.value);
		setTasksCount(+e.target.value);
		setOffset(0);
	};

	//Increasing/decreasing offset
	const onIncrOffset = () => {
		changeOffset(offset + 1);
	};

	const onDecrOffset = () => {
		changeOffset(offset - 1);
	};

	const onFirstOffset = () => {
		changeOffset(0);
	};

	const onLastOffset = () => {
		return tasksTotalCount % tasksCount === 0
			? () => changeOffset(tasksTotalCount / tasksCount - 1)
			: () => changeOffset(Math.trunc(tasksTotalCount / tasksCount));
	};

	const changeOffset = (curOffset) => {
		setOffset((offset) => curOffset);
		localStorage.setItem('offset', curOffset);
	};

	const selectTasksCount = (
		<select onChange={onChangeTaskCount} value={tasksCount}>
			{tasksCountArray().map((element, i) => {
				return (
					<option key={i} value={element}>
						{element}
					</option>
				);
			})}
		</select>
	);

	return (
		<div className="pagination-wrapper">
			<p className="current-pages">{displayCurrentPages()}</p>
			<Pagination>
				<Pagination.First disabled={offset === 0 ? true : false} onClick={onFirstOffset} />
				<Pagination.Prev disabled={offset === 0 ? true : false} onClick={onDecrOffset} />
				<Pagination.Item active>{offset + 1}</Pagination.Item>
				<Pagination.Next onClick={onIncrOffset} disabled={(offset + 1) * tasksCount >= tasksTotalCount ? true : false} />
				<Pagination.Last onClick={onLastOffset()} disabled={(offset + 1) * tasksCount >= tasksTotalCount ? true : false} />
			</Pagination>
			<div className="select-count">
				<p>по{selectTasksCount}записей</p>
			</div>
		</div>
	);
};

export default PaginationControl;
