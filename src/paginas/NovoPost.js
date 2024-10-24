import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";


const PostForm = ({ onPostSubmit }) => {
    const [title, setTitle] = useState('');
    const [post, setPost] = useState('');
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('blog/api/v1/rest/post', {
                title,
                post,
            });

            if (typeof onPostSubmit === 'function') {
                onPostSubmit(response.data);
            }
            // Limpar os campos do formulário após o envio
            setTitle('');
            setPost('');
            alert("Post criado com sucesso");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
      };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="content">Conteúdo:</label>
        <textarea
          id="content"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
      </div>
      <div>
        <button type="submit">Criar Post</button>
      </div>
    </form>
  );
};

export default PostForm;