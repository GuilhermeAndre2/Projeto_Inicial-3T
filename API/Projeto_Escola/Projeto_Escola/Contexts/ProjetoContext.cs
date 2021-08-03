using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Projeto_Escola.Domains;

#nullable disable

namespace Projeto_Escola.Contexts
{
    public partial class ProjetoContext : DbContext
    {
        public ProjetoContext()
        {
        }

        public ProjetoContext(DbContextOptions<ProjetoContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Equipamento> Equipamentos { get; set; }
        public virtual DbSet<Horario> Horarios { get; set; }
        public virtual DbSet<Sala> Salas { get; set; }
        public virtual DbSet<TipoEquipamento> TipoEquipamentos { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                #warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=LAPTOP-GUILHERM\\SQLEXPRESS; initial catalog=Projeto_escola; user Id=sa; pwd=48630533803;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Equipamento>(entity =>
            {
                entity.HasKey(e => e.IdEquipamento)
                    .HasName("PK__Equipame__E309D87FF007B346");

                entity.Property(e => e.Descricao)
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.Property(e => e.Marca)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NumeroPatrimonio)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.NumeroSerie)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Situacao).HasDefaultValueSql("((1))");

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK__Equipamen__IdSal__4AB81AF0");

                entity.HasOne(d => d.IdTipoEquipamentoNavigation)
                    .WithMany(p => p.Equipamentos)
                    .HasForeignKey(d => d.IdTipoEquipamento)
                    .HasConstraintName("FK__Equipamen__IdTip__49C3F6B7");
            });

            modelBuilder.Entity<Horario>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Horario");

                entity.HasOne(d => d.IdEquipamentoNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdEquipamento)
                    .HasConstraintName("FK__Horario__IdEquip__59063A47");

                entity.HasOne(d => d.IdSalaNavigation)
                    .WithMany()
                    .HasForeignKey(d => d.IdSala)
                    .HasConstraintName("FK__Horario__IdSala__5812160E");
            });

            modelBuilder.Entity<Sala>(entity =>
            {
                entity.HasKey(e => e.IdSala)
                    .HasName("PK__Sala__A04F9B3B0501CC29");

                entity.ToTable("Sala");

                entity.Property(e => e.Andar)
                    .HasMaxLength(10)
                    .IsUnicode(false);

                entity.Property(e => e.Metragem)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<TipoEquipamento>(entity =>
            {
                entity.HasKey(e => e.IdTipoEquipamento)
                    .HasName("PK__TipoEqui__0191D191F70E591E");

                entity.Property(e => e.Nome)
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuarios__5B65BF9746BBD950");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
