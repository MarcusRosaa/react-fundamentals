import React, { useEffect, useState } from 'react' 

import Post from './Post';
import Header from './Header.js';

function App() {
  const [ posts, setPosts ] = useState([
    {
      id: Math.random(),
      title: "Título da notícia 01",
      subtitle: "Subtitulo da noticia 01",
      likes: 20
    },
    {
      id: Math.random(),
      title: "Título da notícia 02",
      subtitle: "Subtitulo da noticia 02",
      likes: 4
    },
    {
      id: Math.random(),
      title: "Título da notícia 03",
      subtitle: "Subtitulo da noticia 03",
      likes: 20
    }
  ]);

  console.log({ posts })

  function handleRefresh() {
   setTimeout(() => {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title#0${prevState.length + 1}`,
        subtitle: `Subtitulo#0${prevState.length + 1}`,
        likes: 20
      }
    ])
   }, 2000);

    console.log(posts)
  }

  return (
    <>
      <Header title="Blog do zequinha">
        <h2>
          Posts da semana
          <button onClick={handleRefresh}>Atualizar</button>  
        </h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post 
          key={post.id}
          likes={post.likes}
          post={{
            title: post.title,
            subtitle: post.subtitle
          }}
        />
      ))}
    </>
  );
}

export default App;