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
    public class EquipamentosController : ControllerBase
    {

        private IEquipamentoRepository _equipamento { get; set; }


        public EquipamentosController()
        {
            _equipamento = new EquipamentoRepository();
        }

        //----------------------------------------------------------------------------------------------


        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_equipamento.Listar());
        }

        //----------------------------------------------------------------------------------------------

        [HttpGet("{id}")]
        public IActionResult BuscaEquipamento(int id)
        {
            return Ok(_equipamento.BuscarPorId(id));
        }

        //----------------------------------------------------------------------------------------------

        [HttpPost]
        public IActionResult CadastraEquipamento(Equipamento novoEquipamento)
        {
            //CHAMA O METODO CADASTRAR
            _equipamento.Cadastrar(novoEquipamento);

            //RETORNA STATUS CODE 201 CREATED
            return StatusCode(201);
        }

        //----------------------------------------------------------------------------------------------

        [HttpPut("{id}")]
        public IActionResult UpdateEquipamento(int id, Equipamento equipamentoAtualizado)
        {
            //CHAMA O METODO ATUALIZAR
            _equipamento.Atualizar(id, equipamentoAtualizado);

            //RETORNA STATUS CODE 204 NO CONTENT
            return StatusCode(204);
        }

        //----------------------------------------------------------------------------------------------

        [HttpDelete("{id}")]
        public IActionResult DeletarEquipamento(int id)
        {
            //CHAMA O METODO DE DELETAR
            _equipamento.Deletar(id);

            // RETORNA UM STATUS CODE 204 - NO CONTENT
            return StatusCode(204);
        }

        //----------------------------------------------------------------------------------------------
    }
}
