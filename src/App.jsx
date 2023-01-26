import { Header } from './components/Header'
import { Post}  from './components/Post'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <Post
        author = 'Nadi Duno'
        content = 'Developer'
      />
      <Post
        author = 'Diego Fernandez'
        content = 'Teacher'
      />
    </div>

  )
}
