import React from 'react'
import REACTDOM from 'react-dom/client'
import App from './App.jsx'

function Myapp(){
  return  <div>
    <h1>this is heading</h1>
  </div>
}
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   Children: 'Click me to visit google'
// }
const anotherElement= (
<a href="https://google.com" target='_blank'>visit to google</a>
)
const anotheruser="aakash gupta"
const ReactElement = React.createElement(
  'a',
  {href:'https://google.com', target:'_blank'},
  'click to google',
  anotheruser
)
REACTDOM.createRoot(document.getElementById('root')).render(
 ReactElement
)
