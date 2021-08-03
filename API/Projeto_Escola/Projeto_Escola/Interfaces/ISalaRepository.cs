using Projeto_Escola.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Interfaces
{
    interface ISalaRepository
    {
        //O METODO ABAIXO LISTA AS SALA
        List<Sala> Listar();

        //O METODO ABAIXO BUSCA UMA SALA A PARTIR DO SEU ID QUE SERÁ PASSADO NA URL
        Sala BuscarPorId(int id);

        //O METODO ABAIXO CADASTRA UMA NOVA SALA
        void Cadastrar(Sala novaSala);

        //O METODO ABAIXO ATUALIZA UMA SALA, QUE FOI BUSCADA PRIMEIRO PELO ID
        void Atualizar(int id, Sala SalaAtualizada);

        //DELETA UMA SALA A PARTIR DO ID PASSADO NA URL
        void Deletar(int id);
    }
}
