import styles from './Header.module.css';
import DrIMCLogo from '../../assets/img/DrIMC.png';

//Informação inicial da página
const InfoInicial = () => {
    
  return (
    <div className={styles['container-header']}>
        <img className={styles['logo']} src={DrIMCLogo} alt="Logo Dr" />
        <h3 className={styles['NomeDr']}>
          <span className={styles['CorNome1']}>Dr. Diego </span>
          <span className={styles['CorNome2']}>Soares</span>
        </h3>
        <p className={styles['especialidade']}>Cientista Computacional</p>
        <h1 className={styles['Header-titulo']}>Calculadora IMC</h1>
        <h2 className={styles['Subtitulo']}>Calcule o seu índice <br/>de massa corporal</h2>
        <p className={styles['TextoExplicativo']}>O cálculo faz a relação entre <br/> peso e a altura de uma pessoa.</p>

        
        <h3 className="Header-titulo"></h3>
    </div>
  );
}

export default InfoInicial;