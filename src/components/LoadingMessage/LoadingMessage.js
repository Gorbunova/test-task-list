//Message shows when loading is going

//Spinner from bootstrap-react
import Spinner from 'react-bootstrap/Spinner';
//Styles
import './LoadingMessage.sass';
const LoadingMessage = () => {
	return (
		<div className="loading-message">
			Идёт загрузка данных...
			<Spinner animation="border"></Spinner>
		</div>
	);
};

export default LoadingMessage;
