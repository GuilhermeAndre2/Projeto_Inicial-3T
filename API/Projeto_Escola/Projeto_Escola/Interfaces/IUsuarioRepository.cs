using Projeto_Escola.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Interfaces
{
    interface IUsuarioRepository
    {
        List<Usuario> Listar();

        Usuario BuscarPorId(int id);

        Usuario Login(string email, string senha);

        void Cadastrar(Usuario novoUsuario);

        void Atualizar(int id, Usuario usuarioAtualizada);

        //DELETA UM USUARIO A PARTIR DO ID PASSADO NA URL
        void Deletar(int id);
    }
}
