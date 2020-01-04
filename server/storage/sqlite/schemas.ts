export const schemas = [
  `
    create table if not exists seeders
    (
      seed integer
    )
  `,
  `
    create table if not exists playerClasses
    (
      name string primary key
    )
  `,
  `
    create table if not exists playerSpecs
    (
      name string primary key
    )
  `,
  `
    create table if not exists playerRoles
    (
      name string primary key
    )
  `,
  `
    create table if not exists players
    (
      id integer primary key autoincrement,
      name string,
      gearscore integer,
      raidId integer not null references raids(id),
      class integer not null references playerClasses(name),
      spec integer not null references playerSpecs(name),
      role integer not null references playerRoles(name)
    )
  `,
  `
    create table if not exists bosses
    (
      name text,
      heroic integer,
      primary key (name, heroic)
    )
  `,
  `
    create table if not exists instances
    (
      name text primary key,
      maxPlayers integer
    )
  `,
  `
    create table if not exists raids
    (
      id integer primary key autoincrement,
      date integer,
      title text,
      instance name not null references instances(name),
      logs blob,
      logsSum string
    )
  `,
  `
    create table if not exists raidBosses
    (
      raidId integer not null references raids(id),
      name text not null,
      heroic integer,
      foreign key (name, heroic) references bosses(name, heroic)
    )
  `,
  `
    create table if not exists loot
    (
      id integer primary key autoincrement,
      raidId integer not null references raids(id),
      playerId integer not null references players(id),
      wowId integer
    )
  `
]
