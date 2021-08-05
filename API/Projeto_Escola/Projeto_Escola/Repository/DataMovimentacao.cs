using Projeto_Escola.Contexts;
using Projeto_Escola.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Repository
{
    public class DataMovimentacao : IDataMovimentacao
    {
        ProjetoContext ctx = new ProjetoContext();

        public void Cadastrar(Domains.DataMovimentacao novaMovimentacao)
        {
            throw new NotImplementedException();
        }

        public List<Domains.DataMovimentacao> Listar()
        {
            throw new NotImplementedException();
        }
    }
}
