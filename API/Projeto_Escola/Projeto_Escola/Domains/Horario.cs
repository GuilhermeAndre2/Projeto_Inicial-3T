using System;
using System.Collections.Generic;

#nullable disable

namespace Projeto_Escola.Domains
{
    public partial class Horario
    {
        public int? IdSala { get; set; }
        public int? IdEquipamento { get; set; }
        public TimeSpan? HorarioEntrada { get; set; }
        public TimeSpan? HorarioSaida { get; set; }

        public virtual Equipamento IdEquipamentoNavigation { get; set; }
        public virtual Sala IdSalaNavigation { get; set; }
    }
}
