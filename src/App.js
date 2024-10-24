import './App.css';
import UserForm from "./components/userForm/userForm"

function App() {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <header className="w-full py-2 flex justify-center items-center bg-[#091057] text-white">
        User Form
      </header>
      <UserForm />
    </div>
  );
}

export default App;
