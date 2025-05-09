import {useEffect, useState} from 'react';

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState("");

    useEffect(() =>{
        console.log("O estado mudou")
    },[nome]
    );

    //TypeScript exigite que o evento seja tipado
    const alteraNome = (evento: React.ChangeEvent<HTMLInputElement>) => {
        setNome(evento.target.value);
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return <p>O aluno {nome} foi aprovado com média {media}</p>;
        } else if (media >= 5) {
            return <p>O aluno {nome} está de recuperação com média {media}</p>;
        } else {
            return <p>O aluno {nome} foi reprovado com média {media}</p>;
        }

    }

    return (
        <form>
            {/*inputs e eventos onChange*/}
            <input type="text" placeholder="Seu nome:" onChange={alteraNome} />
            <input type="number" placeholder="Nota Matéria A" 
            onChange={evento => setMateriaA(Number(evento.target.value))}/>
            <input type="number" placeholder="Nota Matéria B" 
            onChange={evento => setMateriaB(Number(evento.target.value))}/>
            <input type="number" placeholder="Nota Matéria C"
            onChange={evento => setMateriaC(Number(evento.target.value))}/>
            <p>{renderizaResultado()}</p>
        </form>

        
    )
}

export default Formulario
