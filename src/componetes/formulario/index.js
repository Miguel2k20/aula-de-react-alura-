import CampoTexto from '../campoTexto'
import './formulario.css'
const Formualario = () => {
    return (
        <section className='formulario'>
            <form>
                <h2>Preencha os dados para criar o card o card do colaborador </h2>
                <CampoTexto  label="Nome" placeholder="Digite o seu nome"></CampoTexto>
                <CampoTexto label="Cargo" placeholder="Digite o seu cargo"></CampoTexto>
                <CampoTexto label="Imagem" placeholder="Digite o endere�o dessa imagem"></CampoTexto>
            </form>   
        </section>
      
    )
}

export default Formualario