import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../componentes/PageDefault';

function CadastroCategoria() {
    return (
      <PageDefault>
        <h1>Página de cadastro de Categoria</h1>

        <form>

          <label>
            Nome da Categoria:
            <input type="text"></input>
          </label>

          <button>
            Cadastrar
          </button>

        </form>

        <Link to="/">
            Ir para home
        </Link>
      </PageDefault>
    )
  }

  export default CadastroCategoria;