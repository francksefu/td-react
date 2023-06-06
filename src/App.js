import TodoLogic from './components/TodoLogic';
import './styles/app.css';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodoLogic />
      </div>
    </div>
  );
}

export default App;
