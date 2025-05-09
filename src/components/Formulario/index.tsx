 import { useState } from 'react';

const Formulario = () => {
    const [altura, setAltura] = useState<number>(0);
    const [peso, setPeso] = useState<number>(0);
    const [resultado, setResultado] =useState<number | null>(null);

    //FUNÇÕES
    const calcularIMC = () => {
        if (altura <= 0 || peso <= 0) return 0; //evitar divisão por zero
        const imc = peso / (altura * altura);
        return parseFloat(imc.toFixed(2));
    };

    //renderizar resultado de acordo com o IMC
    const renderizaResultado = (imc: number | null) =>{
        if (imc === null) return "Preencha os campos para calcular o IMC"
        if (imc <= 18.5){
            return `seu imc é ${imc} peso baixo`;
        } else if (imc > 18.5 && imc <= 24.9){
            return `Seu IMC é ${imc} - Peso adequado`;
        } else if (imc > 24.9 && imc <= 29.9){
            return `Seu IMC é ${imc} - Sobrepeso`;
        } else if (imc > 29.9 && imc <= 34.9){
            return `Seu IMC é ${imc} - Obesidade grau 1`;
        } else if (imc > 34.9 && imc <= 39.9){
            return `Seu IMC é ${imc} - Obesidade grau 2`;
        } else {
            return `Seu IMC é ${imc} - Obesidade grau 3`;
        }        
    } 

    return (
        <form>
            {/*inputs e eventos onChange*/}
            <input type="number" placeholder="Altura (em metros):" 
            onChange={evento => setAltura(Number(evento.target.value))}/>
            <input type="number" placeholder="Seu Peso:" 
            onChange={evento => setPeso(Number(evento.target.value))}/>
            <button onClick={(evento) => {
                evento.preventDefault();
                setResultado(Number(calcularIMC()));
            }}>Calcular IMC</button>
            <p>{renderizaResultado(resultado)}</p>
        </form>

        
    )
}

export default Formulario
