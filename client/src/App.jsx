import { Footbar , Welcome, Transactions, Navbar, Services} from './components';
const App =() =>{
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcom">
        <Navbar />
        <Welcome />

      
    </div>
    <Services />
    <Transactions />
    <Footbar />
    </div>
  );
}

export default App;
