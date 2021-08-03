using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Escola.Domains
{
    public partial class Sala
    {
        public Sala()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdSala { get; set; }
        public string Andar { get; set; }
        public string Nome { get; set; }
        public string Metragem { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
