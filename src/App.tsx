import { useState } from 'react';
import { echo } from 'js-library-template';

function App() {
  const [message, setMessage] = useState<string>('');
  return (
    <div>
      <input
        type="text"
        placeholder="input your message"
        onChange={(e) => setMessage(e.target.value)}
      />
      <div>Echo: {echo(message)}</div>

      <hr />

      <textarea style={{ resize: 'none' }} cols={80} rows={10}>
        {`import { echo } from 'js-library-template';

<input
  type="text"
  onChange={(e) => setMessage(e.target.value)}
/>
<div>{echo(message)}</div>`}
      </textarea>
    </div>
  );
}

export default App;
