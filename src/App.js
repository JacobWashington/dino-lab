import './App.css';
import Blog from './components/Blog'

function App() {
  const post = {
    title: "Dinosaurs Are Awesome",
    author: "Stealthy Stegosaurus",
    body: "Check out this body property!",
    comments: ["First!", "Great post", "Hire this author now!"]
  }
  return (
    <div className="App">
      <Blog title={post.title} author={post.author} body={post.body} comments={post.comments[0]} />
    </div>
  );
}

export default App;
