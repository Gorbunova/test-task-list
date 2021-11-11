import { useHttp } from '../hooks/http.hooks';

const useService = () => {
	const { loading, request, error, clearError } = useHttp();

	return { loading, error, clearError };
};

export default useService;
