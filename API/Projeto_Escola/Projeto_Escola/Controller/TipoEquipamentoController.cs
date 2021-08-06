using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Projeto_Escola.Interfaces;
using Projeto_Escola.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.Controller
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class TipoEquipamentoController : ControllerBase
    {
        private ITipoEquipamentoRepository tipoequipamentorepository { get; set; }

        public TipoEquipamentoController()
        {
            tipoequipamentorepository = new TipoEquipamentoRepository();
        }

        [HttpGet]
        public IActionResult listar()
        {
            return Ok(tipoequipamentorepository.listar());
        }
    }
}
