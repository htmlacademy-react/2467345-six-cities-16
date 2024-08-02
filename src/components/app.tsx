import MainScreen from '../pages/main-screen/main-screen';

type AppProps = {
  countPlaces: number;
}
function App({countPlaces}: AppProps): JSX.Element {
  return(
    <MainScreen countPlaces = {countPlaces}/>
  );
}

export default App;
