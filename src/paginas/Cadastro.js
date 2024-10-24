import React from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";


const Post = () => {
    const { postId } = useParams();
    const [post, setListaPosts] = React.useState([]);
    const [replies, setListaReplies] = React.useState([]);
    React.useEffect(() => {
        const res = axios.get("blog/api/v1/rest/post/"+postId);
        res.then((query) => {
            setListaPosts(query.data);
            console.log(post.id);
        });
        const res2 = axios.get("blog/api/v1/rest/postreply/"+postId);
        res2.then((query) => {
            setListaReplies(query.data);
            console.log(replies);
        });
        
      },
    []);
  return (
    <div>
        { post && (
        <div className="row">
            <h1>{post.title}</h1>
            <h2>{post.post}</h2>
            <h5>Post #{postId}, created {post.createdAt}, updated {post.updatedAt}</h5>
            <div className="row">
                 {replies.length > 0 && (<table className="table">
                     <thead>
                         <tr>
                             <th scope="col">ID</th>
                             <th scope="col">Resposta</th>
                             <th scope="col">Criado</th>
                         </tr>
                     </thead>
                     <tbody>
                         {replies &&
                             replies.map((reply, index) => (
                                 <tr key={index}>
                                     <th scope="row" key={reply.id}>{reply.id}</th>
                                     <td key={reply.reply}>{reply.reply}</td>
                                     <td key={reply.createdAt}>{reply.createdAt}</td>
                                 </tr>
                             ))}
                     </tbody>
                 </table>)}
             </div>
        </div>
        )}
      {/* Conteúdo da página "Sobre" */}
    </div>
  );
};

export default Post;