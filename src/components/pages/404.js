//"Page doesn't exists Component
import { Link } from 'react-router-dom';

const Page404 = () => {
	return (
		<div>
			<p>Такая страница не найдена :(</p>
			<Link to="/">Вернуться на главную страницу</Link>
		</div>
	);
};

export default Page404;
