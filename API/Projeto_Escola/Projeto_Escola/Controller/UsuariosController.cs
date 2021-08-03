using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projeto_Escola.Domains;
using Projeto_Escola.Interfaces;
using Projeto_Escola.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Controller
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuariosController : ControllerBase
    {
        private IUsuarioRepository _user { get; set; }

        public UsuariosController()
        {
            _user = new UsuarioRepository();
        }

        //----------------------------------------------------------------------------------------------
        //METODO Listar

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_user.Listar());
        }

        //----------------------------------------------------------------------------------------------
        //METODO Buscar por id

        [HttpGet("{id}")]
        public IActionResult BuscaUsuario(int id)
        {
            return Ok(_user.BuscarPorId(id));
        }

        //----------------------------------------------------------------------------------------------
        //METODO Cadastrar

        [HttpPost]
        public IActionResult CadastraUsuario(Usuario novoUsuario)
        {
            //CHAMA O METODO
            _user.Cadastrar(novoUsuario);

            //RETORNA STATUS CODE
            return StatusCode(201);
        }

        //----------------------------------------------------------------------------------------------
        //METODO atualizar

        [HttpPut("{id}")]
        public IActionResult UpdateUsuario(int id, Usuario usuarioAtualizado)
        {
            _user.Atualizar(id, usuarioAtualizado);

            return StatusCode(204);
        }


        //----------------------------------------------------------------------------------------------
        //METODO DELETAR

        [HttpDelete("{id}")]
        public IActionResult DeletaUsuario(int id)
        {
            _user.Deletar(id);

            return StatusCode(204);
        }

    }
}
