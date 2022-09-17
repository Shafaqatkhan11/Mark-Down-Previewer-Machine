import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/style.css"
import { marked } from 'marked';//first we install marked using ''npm install marked''and then import it
import { useState } from 'react';
// a heading element (H1 size), a sub heading element (H2 size),
// a link, inline code, a code block,
// a list item, a blockquote, an image, and bolded text.
const App = () => {
  // now we are using  use state effect  initial value of text="" 
  const [text, setText] = useState(`
  # H1
  ## H2
  [title](https://www.example.com)
  \`code\`
  \`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\` 
- First item
- Second item
- Third item
> blockquote
![alt text](image.jpg)
**bold text**

  `)
  marked.setOptions({breaks:true})//show text in new line preview eitor..
  return (  
    //using bootstrap classess and some properties
    <div className="container text-center"><h1>Mark Down Previwer Machine</h1>
    <div className='row '>
      <div className="col-6">
        <h1 id="edi">Editor</h1>
    <textarea 
    id="editor"
    // we use on Change event handling...that set value in a text...
    onChange={(event)=>{setText(event.target.value)}}
    value={text} >
    </textarea>
    </div>
  <div className="col-6"><h1 id='pre'>Previewer</h1>
    <div id="preview"
// we use html property in react  and use objects to set value of _html:mark(text)
    dangerouslySetInnerHTML={{
      __html:marked(text),
      }}>
        </div>
        </div>
        <div id="new">OUT PUT</div>
        </div>
    <div><p>We can remove text that are pre written in editor and write our own text and can see on a previewer.</p>
      <p>Happy coading journy.</p>
    </div>
    </div>
    
  );
    }
export default App;//export default bexuse we can import it any were...