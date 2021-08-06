using Projeto_Escola.Contexts;
using Projeto_Escola.Domains;
using Projeto_Escola.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Repository
{
    public class TipoEquipamentoRepository : ITipoEquipamentoRepository
    {
        ProjetoContext ctx = new ProjetoContext();
        public List<TipoEquipamento> listar()
        {
            return ctx.TipoEquipamentos.ToList();
        }
    }
}
