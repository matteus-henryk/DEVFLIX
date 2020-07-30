import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';
import FormField from '../../../componentes/FormField';


function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }

    const [categorias, setCategory] = useState([]);
    const [values, setValues]=  useState(valoresIniciais);



    function setValue(chave, valor){
      setValues({
        ...values,
        [chave]: valor,
      })
    }

    function handleChange(infosDoEvento){
      setValue(
        infosDoEvento.target.getAttribute('name'),
        infosDoEvento.target.value
      );
    }

    return (
      <PageDefault>
        <h1>Página de cadastro de Categoria: {values.nome}</h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault();
          setCategory([
            ...categorias,
            values
          ]);

          setValues(valoresIniciais);
          
        }}>

          <div>

          <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleChange}/>
       

        

          <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}/>

          <FormField 
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}/>
        

            {/* <div>
              <label>
                Cor:
                <input 
                type="color" 
                value={values.cor}
                name="cor"
                onChange={handleChange}/>
              </label>
            </div> */}

          </div>

          <button>
            Cadastrar
          </button>

          <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            )
          })}
          </ul>

        </form>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;