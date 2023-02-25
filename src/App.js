import './App.css';
import { withErrorBoundary } from 'react-error-boundary';
// библиотека обработки ошибок Error Boundary
import {Form} from './Form/Form.jsx';

function App() {
  return (
    <Form/>
  );
}

export default withErrorBoundary (App, {
  fallback: <div>Error</div>
});
