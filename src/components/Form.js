import {useState} from 'react';

function Form() {

    function cadastrarUsuario(e) {

        e.preventDefault(); // Função para não enviar para o backend.
        console.log(`O usuário ${name} foi cadastrado com a senha: ${password}`);
    }

    const [name, setName] = useState();
    const [password, setPassword] = useState();

    return (

       <div>
           <h1>Meu cadastro:</h1>
           <form onSubmit={cadastrarUsuario}>
               <div>
                   <label htmlFor="name">Nome:</label>
                   <input type="text" 
                   id="name" name="name" 
                   placeholder="Digite o seu nome" 
                // value={name} <- Esse cara aqui está fazendo dar um erro Warning no console, pois já estamos controlando ele através do OnChange.
                   onChange={(e) => setName(e.target.value)}
                   />
               </div>
               <div>
                   <label htmlFor="password">Senha:</label>
                   <input type="password" 
                   id="password" name="password" 
                   placeholder="Digite a sua senha" 
                   onChange={(e) => setPassword(e.target.value)} 
                   />
               </div>
                <div>
                    <input type="submit" value="Cadastrar" />
                </div>
           </form>
       </div> 
    );
}

export default Form;