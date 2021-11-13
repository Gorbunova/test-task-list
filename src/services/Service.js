import { useHttp } from '../hooks/http.hooks';

const useService = () => {
	const { loading, request, error, clearError } = useHttp();

	const getAllTasks = async () => {
		const res = await request(
			`https://s3.us-west-2.amazonaws.com/secure.notion-static.com/9f15021c-fcd4-4657-aff4-2782f62b60b6/test_data.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20211112%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211112T130900Z&X-Amz-Expires=86400&X-Amz-Signature=7f319de8e623e22ad42a31408fc92110434f5ab58622913e6d8b90019eb5fca7&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22test_data.json%22`
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
