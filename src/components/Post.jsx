import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';


export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src='https://github.com/wwchacalww.png' />
          <div className={styles.authorInfo}>
            <strong>Alexandre Cartaxo</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='28 de novembro  as 0:14' dataTime="2024-12-25  08:13:00"> Publicado a 1h atrás</time>

      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p>👉 &nbsp; <a href=''>jane.design/doctorcare</a></p>
        <p>
          <a href=''>#novoprojeto </a> &nbsp;
          <a href=''>#nlw </a> &nbsp;
          <a href=''>#rocketseat</a> {''}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder='Deixe um comentário'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}