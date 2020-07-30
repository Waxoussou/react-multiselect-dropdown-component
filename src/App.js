import React, { useState } from 'react';
import './App.css';
import Checkbox from './components/Checkbox';

const options = [
  { name: 'Php', value: 'php' },
  { name: 'Node', value: "node.js" },
  { name: 'JS', value: 'javascript' },
  { name: 'js', value: 'javascript' },
  { name: 'noName', value: 'javascriptnoName' },
  { name: 'JavaScript', value: 'javascript' },
  { name: 'Java', value: 'java' },
  { name: 'SQL', value: 'sql' },
  { name: 'plsql', value: 'postgre' },
  { name: 'Rust', value: 'rust' },
  { name: 'GoLang', value: 'go' },
]

function App() {
  const [selection, setSelection] = useState([])

  const handleSelection = (e) => {
    const selectTarget = selection.includes(e.target.name) ? selection.filter(v => v !== e.target.name) : [...selection, e.target.name]
    setSelection(selectTarget)
  }

  return (
    <div className="App">
      <Checkbox
        options={options}
        handleState={handleSelection}
        state={selection}
        input={true}
        reset={true}
      />
      <h1>blablab</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut consequatur provident numquam incidunt enim, recusandae repudiandae quis illum dolores accusantium! Minima quasi, facere vel pariatur voluptas natus cumque ad adipisci.
      Repellat nulla ducimus est porro nemo unde, sed maiores quidem laboriosam, error praesentium repellendus quam voluptatem repudiandae quos libero quod quo sit saepe. Aut amet ea, vel hic rerum facilis.
        Possimus error eius teneturcumque doloremque. Quaerat eveniet iste eos molestiae? Expedita incidunt cupiditate voluptate aliquam, illo eveniet nobis architecto fuga tenetur neque debitis voluptatum reprehenderit perferendis facere dicta molestias?</p>
    </div>
  );
}

export default App;
