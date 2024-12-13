import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css';




export function Comment({content, onDeleteComment}) {

  function handleDeleteComment(){
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/wwchacalww.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Alexandre Cartaxo</strong>
              <time title='28 de novembro  as 0:14' datatime="2024-12-25  08:13:00"> Cerca de 1h atrás</time>
            </div>

            <button  onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24} />
            </button>

          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Aplaudir <span>28</span>
          </button>
        </footer>

      </div>
    </div>
  )
}