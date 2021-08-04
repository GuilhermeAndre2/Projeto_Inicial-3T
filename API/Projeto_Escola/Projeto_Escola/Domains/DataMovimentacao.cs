using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Escola.Domains
{
    public partial class DataMovimentacao
    {
        public int? IdSala { get; set; }
        public int? IdEquipamento { get; set; }
        public DateTime? DataEntrada { get; set; }
        public DateTime? DataSaida { get; set; }

        public virtual Equipamento IdEquipamentoNavigation { get; set; }
        public virtual Sala IdSalaNavigation { get; set; }
    }
}
