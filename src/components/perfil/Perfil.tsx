import './Perfil.css'

//Definindo interface para tipar as props do componente
interface PerfilProps {
    endereco: string;
    nome: string;
}
//fizemos a desetruturação da props para facilitar o uso
const Perfil = ({endereco, nome}: PerfilProps ) => {
    
  return (
    <div>
        <img className="perfil-avatar" src={endereco} alt="Avatar" />
        <h3 className="perfil-titulo">{nome}</h3>
    </div>
  );
}

export default Perfil;