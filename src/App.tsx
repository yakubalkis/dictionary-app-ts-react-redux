import { useAppSelector } from './redux/hooks';
import Header from './components/Header';
import Input from './components/Input';
import Main from './components/Main';

function App() {
  const modeType = useAppSelector(state => state.mode);

  return (
      <div className={`App ${modeType.mode}-mode`}>
        <Header />
        <Input />
        <Main />
      </div>
  );
}

export default App;