import React from 'react';
import Card from './Components/Card';
import Hov from './Components/hov';
const projects = [
  {
    title: 'Project One',
    category: 'Category One',
    users: [
      { name: 'User One', avatar: `https://picsum.photos/200/300?random=${Math.random()}` },
      { name: 'User Two', avatar: `https://picsum.photos/200/300?random=${Math.random()}` },
    ],
    url: '#',
  },
  {
    title: 'Project Two',
    category: 'Category Two',
    users: [
      { name: 'User Three', avatar: `https://picsum.photos/200/300?random=${Math.random()}` },
      { name: 'User Four', avatar: `https://picsum.photos/200/300?random=${Math.random()}` },
    ],
    url: '#',
  },
];

function App() {
  return (
    <>
    <Card/>
    <Hov projects={projects}/>
    </>
  );
}

export default App;
