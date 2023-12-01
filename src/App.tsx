import { useAppSelector } from './redux/hooks';
import Header from './components/Header';
import Input from './components/Input';
import Main from './components/Main';

function App() {
  const modeType = useAppSelector(state => state.mode);
  const error = useAppSelector(state => state.mode.error);

  return (
      <div className={`App ${modeType.mode}-mode`}>
        <Header />
        <Input />
        {!error && <Main />}
      </div>
  );
}

export default App;