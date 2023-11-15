import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className='d-flex align-items-center justify-content-center w-100 flex-column' style={{height:'100vh' , backgroundColor:'black' }}>
      <div className='d-flex align-items-center justify-content-center flex-column p-5 rounded' style={{backgroundColor:'white'}}>
        <h1 className='text-primary'>Counter Application</h1>
        <Counter/>
      </div>
    </div>
  );
}

export default App;
