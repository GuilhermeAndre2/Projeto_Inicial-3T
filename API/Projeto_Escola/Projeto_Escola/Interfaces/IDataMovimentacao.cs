using Projeto_Escola.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Interfaces
{
    interface IDataMovimentacao
    {
        List<DataMovimentacao> Listar();

        void Cadastrar(DataMovimentacao novaMovimentacao);

        
    }
}
