using Microsoft.EntityFrameworkCore;
using Projeto_Escola.Contexts;
using Projeto_Escola.Domains;
using Projeto_Escola.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Repository
{
    public class EquipamentoRepository : IEquipamentoRepository

    {
        ProjetoContext ctx = new ProjetoContext();

        public void Atualizar(int id, Equipamento EquipamentoAtualizado)
        {
            Equipamento EquipamentoBuscado = ctx.Equipamentos.Find(id);

            if (EquipamentoBuscado.Marca != null)
            {
                EquipamentoBuscado.Marca = EquipamentoAtualizado.Marca;
            }

            if (EquipamentoBuscado.NumeroPatrimonio != null)
            {
                EquipamentoBuscado.NumeroPatrimonio = EquipamentoAtualizado.NumeroPatrimonio;
            }

            if (EquipamentoBuscado.NumeroSerie != null)
            {
                EquipamentoBuscado.NumeroSerie = EquipamentoAtualizado.NumeroSerie;
            }

            if (EquipamentoBuscado.Descricao != null)
            {
                EquipamentoBuscado.Descricao = EquipamentoAtualizado.Descricao;
            }
            ctx.Equipamentos.Update(EquipamentoBuscado);
            ctx.SaveChanges();
        }

        public Equipamento BuscarPorId(int id)
        {
            return ctx.Equipamentos.FirstOrDefault(c => c.IdEquipamento == id);
        }

        public void Cadastrar(Equipamento novoEquipamento)
        {
            ctx.Equipamentos.Add(novoEquipamento);

            //SALVA AS ALTERAÇÕES FEITAS
            ctx.SaveChanges();
        }

        public void Deletar(int id)
        {
            Equipamento EquipamentosBuscado = ctx.Equipamentos.Find(id);

            ctx.Equipamentos.Remove(EquipamentosBuscado);

            ctx.SaveChanges();
        }

        public List<Equipamento> Listar()
        {
            return ctx.Equipamentos
                .Include(c=> c.IdSalaNavigation)
                .Include(c=> c.IdTipoEquipamentoNavigation)
                .ToList();
        }

        public List<Equipamento> ListarSalaEquip(int id)
        {
            return ctx.Equipamentos
            .Include(c=> c.IdSalaNavigation)
            .Where(c=> c.IdSalaNavigation.IdSala == id)
            .ToList();
        }
    }   
}
