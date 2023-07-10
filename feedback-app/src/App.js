import './App.css';

function App() {
  const title = 'Blog Post'; 
  const body = 'This is my blog post';

  // define list 
  const comments = [
    {id: 1, text: 'Comment one'},
    {id: 2, text: 'Comment two'},
    {id: 3, text: 'Comment three'},
  ]
  return (
    <div className="App">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      <div className='Comments'>
        <h3>Comments ({comments.length})</h3>

        <ul>
          {comments.map((comment, index) => (
            <li key = {index}> 
              {comment.text}
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}

export default App;
 