using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace mahjongle_dotnet_api.Repository;

public partial class MahjongleContext : DbContext
{
    public MahjongleContext()
    {
    }

    public MahjongleContext(DbContextOptions<MahjongleContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Fuckyou> Fuckyous { get; set; }

    public virtual DbSet<GameSession> GameSessions { get; set; }

    public virtual DbSet<Hand> Hands { get; set; }

    public virtual DbSet<Session> Sessions { get; set; }

    public virtual DbSet<Suit> Suits { get; set; }

    public virtual DbSet<Tile> Tiles { get; set; }

    public virtual DbSet<User> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=mahjongle-db.corvffpxyrd6.us-east-2.rds.amazonaws.com:5432; Database=mahjongle; Username=postgres; Password=MinsshiFaker#3");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Fuckyou>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("fuckyou_pkey");

            entity.ToTable("fuckyou");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.Fuck).HasColumnName("fuck");
            entity.Property(e => e.You).HasColumnName("you");
        });

        modelBuilder.Entity<GameSession>(entity =>
        {
            entity.HasKey(e => e.SessionId).HasName("game_session_pkey");

            entity.ToTable("game_session");

            entity.Property(e => e.SessionId).HasColumnName("session_id");
            entity.Property(e => e.DateCreated)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("date_created");
            entity.Property(e => e.DateFinished)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("date_finished");
            entity.Property(e => e.PlayerIds).HasColumnName("player_ids");
            entity.Property(e => e.PlayerPoints).HasColumnName("player_points");
        });

        modelBuilder.Entity<Hand>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("hand_pkey");

            entity.ToTable("hand");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.ConcealedTiles)
                .HasColumnType("character varying(2)[]")
                .HasColumnName("concealed_tiles");
            entity.Property(e => e.CreatedAt)
                .HasDefaultValueSql("now()")
                .HasColumnName("created_at");
            entity.Property(e => e.RevealedTiles)
                .HasColumnType("character varying(2)[]")
                .HasColumnName("revealed_tiles");
            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.WinningTile)
                .HasMaxLength(2)
                .HasColumnName("winning_tile");
        });

        modelBuilder.Entity<Session>(entity =>
        {
            entity.HasKey(e => e.SessionId).HasName("session_pkey");

            entity.ToTable("session");

            entity.Property(e => e.SessionId)
                .ValueGeneratedNever()
                .HasColumnName("session_id");
            entity.Property(e => e.DateCreated)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("date_created");
            entity.Property(e => e.DateFinished)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("date_finished");
            entity.Property(e => e.PlayerIds).HasColumnName("player_ids");
            entity.Property(e => e.PlayerPoints).HasColumnName("player_points");
        });

        modelBuilder.Entity<Suit>(entity =>
        {
            entity.HasKey(e => e.Value).HasName("suit_pkey");

            entity.ToTable("suit");

            entity.Property(e => e.Value).HasColumnName("value");
        });

        modelBuilder.Entity<Tile>(entity =>
        {
            entity.HasKey(e => e.Key).HasName("tile_pkey");

            entity.ToTable("tile");

            entity.Property(e => e.Key)
                .HasMaxLength(2)
                .HasColumnName("key");
            entity.Property(e => e.Name).HasColumnName("name");
            entity.Property(e => e.NumValue).HasColumnName("num_value");
            entity.Property(e => e.Suit).HasColumnName("suit");
            entity.Property(e => e.Value).HasColumnName("value");

            entity.HasOne(d => d.SuitNavigation).WithMany(p => p.Tiles)
                .HasForeignKey(d => d.Suit)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("tile_suit_fkey");
        });

        modelBuilder.Entity<User>(entity =>
        {
            entity.HasKey(e => e.Id).HasName("user_pkey");

            entity.ToTable("user");

            entity.Property(e => e.Id).HasColumnName("id");
            entity.Property(e => e.DateCreated)
                .HasColumnType("timestamp without time zone")
                .HasColumnName("date_created");
            entity.Property(e => e.Email)
                .HasMaxLength(150)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(32)
                .HasColumnName("name");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
