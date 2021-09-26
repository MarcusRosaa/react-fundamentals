import React from 'react' 

import Post from './Post';
import Header from './Header.js';

const posts = [
  {
    title: "Título da notícia 01",
    subtitle: "Subtitulo da noticia 01",
    likes: 20
  },
  {
    title: "Título da notícia 02",
    subtitle: "Subtitulo da noticia 02",
    likes: 4
  },
  {
    title: "Título da notícia 03",
    subtitle: "Subtitulo da noticia 03",
    likes: 20
  }
]

function App() {
  return (
    <>
      <Header title="Blog do zequinha">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map((post) => (

        <Post 
          likes={ post.likes } 
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