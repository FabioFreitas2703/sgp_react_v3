import MyCard from './components/MyCard'  
import './App.css'
import Login from './pages/Login'

function App() {
 

  return (
    <>
      <div className='d-flex
      justify-content-center'>
        <MyCard
          imageUrl="https://picsum.photos/200/300"
          title="Card Title"
          text="This is a card description."
          buttonText="Click Me"
        />

      </div>

      <div className='d-flex
      justify-content-center'>
        <MyCard
          imageUrl="https://picsum.photos/200/300"
          title="Card Title"
          text="This is a card description."
          buttonText="Click Me"
        />

      </div>

      <Login />
    </>
  )
}

export default App
