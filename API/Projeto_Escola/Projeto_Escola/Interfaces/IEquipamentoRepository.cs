using Projeto_Escola.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Interfaces
{
    interface IEquipamentoRepository
    {
        //O METODO ABAIXO LISTA OS EQUIPAMENTOS
        List<Equipamento> Listar();
        List<Equipamento> ListarSalaEquip(int id);

        //O METODO ABAIXO BUSCA UM EQUIPAMENTO A PARTIR DO SEU ID QUE SERÁ PASSADO NA URL
        Equipamento BuscarPorId(int id);

        //O METODO ABAIXO CADASTRA UMA NOVO EQUIPAMENTO
        void Cadastrar(Equipamento novoEquipamento);

        //O METODO ABAIXO ATUALIZA UM EQUIPAMENTO, QUE FOI BUSCADA PRIMEIRO PELO ID
        void Atualizar(int id, Equipamento EquipamentoAtualizado);

        //DELETA UM EQUIPAMENTO A PARTIR DO ID PASSADO NA URL
        void Deletar(int id);
    }
}
