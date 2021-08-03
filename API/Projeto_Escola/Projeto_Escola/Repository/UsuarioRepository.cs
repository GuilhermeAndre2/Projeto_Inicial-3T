using Projeto_Escola.Contexts;
using Projeto_Escola.Domains;
using Projeto_Escola.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Repository
{
    public class UsuarioRepository : IUsuarioRepository
    {
        ProjetoContext ctx = new ProjetoContext();

        //--------------------------------------------------------------------

        public Usuario BuscarPorId(int id)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.IdUsuario == id);
        }

        //--------------------------------------------------------------------

        public Usuario Login(string email, string senha)
        {
            return ctx.Usuarios.FirstOrDefault(u => u.Email == email && u.Senha == senha);
        }

        //--------------------------------------------------------------------

        public void Cadastrar(Usuario novoUsuario)
        {
            ctx.Usuarios.Add(novoUsuario);

            //SALVA AS ALTERAÇÕES FEITAS
            ctx.SaveChanges();
        }

        //--------------------------------------------------------------------

        public List<Usuario> Listar()
        {
            return ctx.Usuarios.ToList();
        }

        //--------------------------------------------------------------------

        public void Atualizar(int id, Usuario usuarioAtualizada)
        {
             Usuario usuarioBuscado = ctx.Usuarios.Find(id);

                if (usuarioBuscado.IdUsuario != null)
                {
                    usuarioBuscado.IdUsuario = usuarioAtualizada.IdUsuario;
                }

            if (usuarioBuscado.Email != null)
            {
                usuarioBuscado.Email = usuarioAtualizada.Email;
            }

            if (usuarioBuscado.Senha != null)
            {
                usuarioBuscado.Senha = usuarioAtualizada.Senha;
            }

            if (usuarioBuscado.Nome != null)
            {
                usuarioBuscado.Nome = usuarioAtualizada.Nome;
            }
            ctx.Usuarios.Update(usuarioBuscado);
               ctx.SaveChanges();
        }

        //--------------------------------------------------------------------
        public void Deletar(int id)
        {
            Usuario usuarioBuscado = ctx.Usuarios.Find(id);

            ctx.Usuarios.Remove(usuarioBuscado);

            ctx.SaveChanges();
        }

        //--------------------------------------------------------------------
    }
}
