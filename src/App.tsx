import { useAppSelector } from './redux/hooks';
import Header from './components/Header';
import Input from './components/Input';

function App() {
  const modeType = useAppSelector(state => state.mode);

  return (
      <div className={`App ${modeType.mode}-mode`}>
        <Header />
        <Input />
      </div>
  );
}

export default App;