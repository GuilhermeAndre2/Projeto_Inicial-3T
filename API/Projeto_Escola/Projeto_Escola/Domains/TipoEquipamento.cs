using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Escola.Domains
{
    public partial class TipoEquipamento
    {
        public TipoEquipamento()
        {
            Equipamentos = new HashSet<Equipamento>();
        }

        public int IdTipoEquipamento { get; set; }
        public string Nome { get; set; }

        public virtual ICollection<Equipamento> Equipamentos { get; set; }
    }
}
