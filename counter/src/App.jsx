import './App.css'
import { Button } from "../components/ui/button"
import { ModeToggle } from "../components/mode-toggle.tsx"
 
function App() {

  return (
    <div className='flex justify-center items-center h-dvh'>
      <div>
        <h1>Counter</h1>
        <div className='absolute top-0 right-0 m-5'>
          <ModeToggle />
        </div>
        <div>
          <Button variant="outline">Button</Button>
        </div>
      </div>
    </div>
  )
}

export default App
