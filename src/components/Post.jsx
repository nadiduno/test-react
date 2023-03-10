import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'


export function Post({author,publishedAt,content}){
  const publishedDateFormat = format(publishedAt,"dd 'de' LLL 'às' HH:mm'h'",{
    locale: ptBR,
  });
  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,{
    locale: ptBR,
    addSuffix: true,
  });
  const [comments, setComments]= useState([
    'Muito bom, parabéns!!! 👏'
  ]);
  const [newCommentText,setNewCommentText]= useState('' );
  const isNewCommentEmpty = newCommentText.length === 0;
  function handleCreateNewComment(){
    event.preventDefault();  
    setComments([...comments,newCommentText]);
    setNewCommentText('');  
  }
  function handleNewCommentChange(){
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }
  function handleNewCommnentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatorio!');
  }
  function deleteComment(commentToDelete ){
    const commentWhithOutDeleteOne = comments.filter(comment => {
      return (comment !== commentToDelete);
    });
    setComments(commentWhithOutDeleteOne);
  }
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar 
            src={author.avatarUrl}
            // hasBorder
            //Posso não enviar as propiedades porque coloque uma Features de ES6 (Defaut Parameters) como argumento que recebem as propiedades
            //Em caso de não enviar o hasBorder coloca ele com true por defecto no props.hasBorder
          />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>Web Developer | Front-end</span>
          </div>
        </div>
        <time
          title={publishedDateFormat}
          dateTime={publishedAt.toISOString()}
        > 
          {publishedDateRelativeToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph')
            return <p key={line.content} >{line.content}</p>
          else if(line.type === 'link')
            return <p key={line.content}><a href={line.content} target="_blank">{line.content}</a></p>
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Escreva aqui um comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommnentInvalid}
          required
        />
        <footer>
          <button 
            type="submit"
            disabled={isNewCommentEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment=> {
          return (
            <Comment 
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}       
      </div>
    </article>
  );
}