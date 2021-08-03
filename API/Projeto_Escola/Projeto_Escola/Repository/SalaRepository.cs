using Projeto_Escola.Contexts;
using Projeto_Escola.Domains;
using Projeto_Escola.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Repository
{
    public class SalaRepository : ISalaRepository
    {
        ProjetoContext ctx = new ProjetoContext();


    //-----------------------------------------------------------------------------------------
        public void Atualizar(int id, Sala SalaAtualizada)
        {
            Sala SalaBuscada = ctx.Salas.Find(id);

            if (SalaBuscada.Nome != null)
            {
                SalaBuscada.Nome = SalaAtualizada.Nome;
            }

            if (SalaBuscada.Andar != null)
            {
                SalaBuscada.Andar = SalaAtualizada.Andar;
            }

            if (SalaBuscada.Metragem != null)
            {
                SalaBuscada.Metragem = SalaAtualizada.Metragem;
            }
            ctx.Salas.Update(SalaBuscada);
            ctx.SaveChanges();

        }


     //-----------------------------------------------------------------------------------------
        public Sala BuscarPorId(int id)
        {
            return ctx.Salas.FirstOrDefault(c => c.IdSala == id);
        }

        public void Cadastrar(Sala novaSala)
        {
            ctx.Salas.Add(novaSala);

            //SALVA AS ALTERAÇÕES FEITAS
            ctx.SaveChanges();
        }

       //-----------------------------------------------------------------------------------------

        public void Deletar(int id)
        {
            Sala SalaBuscada = ctx.Salas.Find(id);

            ctx.Salas.Remove(SalaBuscada);

            ctx.SaveChanges();
        }

        //-----------------------------------------------------------------------------------------

        public List<Sala> Listar()
        {
            return ctx.Salas.ToList();
        }
    }
}
