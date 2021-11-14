import { useHttp } from '../hooks/http.hooks';

const useService = () => {
	const { loading, request, error, clearError } = useHttp();

	const getAllTasks = async () => {
		const res = await request(
			/* 			`https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211113%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211113T175352Z&X-Amz-Expires=86400&X-Amz-Signature=aae2a0eeb835ef36e994e0516526862ae775de682065b08fa46ae6e131fd392a&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22`*/
			'test_data.json'
		);
		return res.map(_transformTask);
	};

	const _transformTask = (task) => {
		return {
			oguid: task.oguid,
			id: task.id,
			date: task.created_date,
			taskType: task.order_type.name,
			author: task.created_user.surname + ' ' + task.created_user.name + ' ' + task.created_user.patronymic,
			terminal: task.terminal.name,
			account: task.account.name,
			status: task.status,
		};
	};

	return { loading, error, clearError, getAllTasks };
};

export default useService;
