import styles from '../styles/404.module.css'


/* Giphy.getUrlAsync('not found',function(videoURL){
  document.getElementById('gif').src = videoURL;
}) */

function PageNotFound(){
  return <>
      <div className={styles.container}>
        <h1 className={styles.title}>No se ha encontrado la página 😪</h1> 
        
      </div>
      
  </> 
}

export default PageNotFound; 

