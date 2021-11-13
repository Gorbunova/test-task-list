import './PaginationControl.sass';
import Pagination from 'react-bootstrap/Pagination';
import { useEffect, useState } from 'react';
const PaginationControl = (props) => {
	//The number of displayed objects when viewed for the first time
	const startTasksCount = 25;
	const { tasksTotalCount, setTasksDisplayCount, setMainOffset } = props;
	const [tasksCount, setTasksCount] = useState(startTasksCount);
	const [offset, setOffset] = useState(0);

	useEffect(() => {
		setMainOffset(offset);
	}, [offset]);
	const tasksCountArray = () => {
		const array = [];
		for (let i = 5; i <= tasksTotalCount; i++) {
			if (i % 5 === 0) array.push(i);
		}
		return array;
	};
	const updateTaskCount = (e) => {
		setTasksCount(+e.target.value);
		setOffset(0);
	};

	const incrOffset = () => {
		setOffset((offset) => offset + 1);
	};

	const decrOffset = () => {
		setOffset((offset) => offset - 1);
	};

	setTasksDisplayCount(tasksCount);

	return (
		<div className="pahgination-wrapper">
			<Pagination>
				<p>
					{offset * tasksCount + 1}-{offset * tasksCount + tasksCount > tasksTotalCount ? tasksTotalCount : offset * tasksCount + tasksCount}
				</p>
				<Pagination.First disabled={offset == 0 ? true : false} onClick={() => setOffset(0)} />
				<Pagination.Prev disabled={offset == 0 ? true : false} onClick={decrOffset} />
				<Pagination.Item active>{offset + 1}</Pagination.Item>
				<Pagination.Next onClick={incrOffset} disabled={(offset + 1) * tasksCount >= tasksTotalCount ? true : false} />
				<Pagination.Last
					disabled={(offset + 1) * tasksCount >= tasksTotalCount ? true : false}
					onClick={
						tasksTotalCount % tasksCount === 0
							? () => setOffset(tasksTotalCount / tasksCount - 1)
							: () => setOffset(Math.trunc(tasksTotalCount / tasksCount))
					}
				/>
				<p>по</p>
				<select onChange={updateTaskCount} name="select" value={tasksCount}>
					{tasksCountArray().map((element, i) => {
						return (
							<option key={i} value={element}>
								{element}
							</option>
						);
					})}
				</select>
				<p>записей</p>
			</Pagination>
		</div>
	);
};

export default PaginationControl;
