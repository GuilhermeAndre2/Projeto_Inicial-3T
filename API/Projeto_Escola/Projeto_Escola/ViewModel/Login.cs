using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Escola.ViewModel
{
    public class Login
    {
        public class LoginViewModel
        {
            [Required(ErrorMessage = "INFORME O EMAIL DO USUARIO")]
            public string Email { get; set; }

            [Required(ErrorMessage = "INFORME A SENHA DO USUARIO")]
            public string Senha { get; set; }
        }
    }
}
