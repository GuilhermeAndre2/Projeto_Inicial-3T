using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Escola.Domains
{
    public partial class Usuario
    {
        public int IdUsuario { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
    }
}
