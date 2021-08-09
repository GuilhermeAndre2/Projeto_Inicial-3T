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
    public class SalasController : ControllerBase
    {
        private ISalaRepository _sala { get; set; }


        public SalasController()
        {
            _sala = new SalaRepository();
        }

        //----------------------------------------------------------------------------------------------


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_sala.Listar());
        }

        //----------------------------------------------------------------------------------------------

        [HttpGet("{id}")]
        public IActionResult BuscaSala(int id)
        {
            return Ok(_sala.BuscarPorId(id));
        }

        //----------------------------------------------------------------------------------------------

        [HttpGet("salas/{id}")]
        public IActionResult listaSala (int id)
        {
            return Ok(_sala.ListarSalaEquip(id));
        }

        //----------------------------------------------------------------------------------------------

        [HttpPost]
        public IActionResult CadastraSala(Sala novaSala)
        {
            //CHAMA O METODO CADASTRAR
            _sala.Cadastrar(novaSala);

            //RETORNA STATUS CODE 201 CREATED
            return StatusCode(201);
        }

        //----------------------------------------------------------------------------------------------

        [HttpPut("{id}")]
        public IActionResult UpdateSala(int id, Sala salaAtualizada)
        {
            //CHAMA O METODO ATUALIZAR
            _sala.Atualizar(id, salaAtualizada);

            //RETORNA STATUS CODE 204 NO CONTENT
            return StatusCode(204);
        }

        //----------------------------------------------------------------------------------------------

        [HttpDelete("{id}")]
        public IActionResult DeletarSala(int id)
        {
            //CHAMA O METODO DE DELETAR
            _sala.Deletar(id);

            // RETORNA UM STATUS CODE 204 - NO CONTENT
            return StatusCode(204);
        }

        //----------------------------------------------------------------------------------------------
    }
}
