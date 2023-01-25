import { Post}  from './components/Post'

export function App() {
  return (
    <div>
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
