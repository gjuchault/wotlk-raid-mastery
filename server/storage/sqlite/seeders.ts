export const seeders = [
  `
    insert into playerClasses
      (name)
    values
      ('Death Knight'),
      ('Warrior'),
      ('Paladin'),
      ('Druid'),
      ('Hunter'),
      ('Warlock'),
      ('Mage'),
      ('Shaman'),
      ('Priest'),
      ('Rogue')
  `,
  `
    insert into playerSpecs
      (name)
    values
      ('DKBlood'),
      ('DKFrost'),
      ('DKUnholy'),
      ('WarArms'),
      ('WarFury'),
      ('WarProt'),
      ('PalRet'),
      ('PalProt'),
      ('PalHoly'),
      ('DroodFeral'),
      ('DroodResto'),
      ('DroodBalance'),
      ('HuntBM'),
      ('HuntSurvival'),
      ('HuntMMS'),
      ('WarlockDemono'),
      ('WarlockAffli'),
      ('WarlockDestru'),
      ('MageFrost'),
      ('MageFire'),
      ('MageArcane'),
      ('ShamEnh'),
      ('ShamResto'),
      ('ShamElem'),
      ('PriestDisc'),
      ('PriestHoly'),
      ('PriestShadow'),
      ('RogueCombat'),
      ('RogueSubtle'),
      ('RogueAssa')
  `,
  `
    insert into playerRoles
      (name)
    values
      ('Tank'),
      ('Healer'),
      ('RangedDps'),
      ('MeleeDps')
  `,
  `
    insert into instances
      (name, maxPlayers)
    values
      ('Icecrown Citadel 10', 10),
      ('Icecrown Citadel 25', 25),
      ('Ruby Sanctum 10', 10),
      ('Ruby Sanctum 25', 25),
      ('Trial of the Crusader 10', 10),
      ('Trial of the Crusader 25', 25)
  `,
  `
    insert into bosses
      (name, heroic)
    values
      ('Lord Marrowgar', 0),
      ('Lady Deathwhisper', 0),
      ('Gunship Battle', 0),
      ('Deathbringer Saurfang', 0),
      ('Festergut', 0),
      ('Rotface', 0),
      ('Professor Putricide', 0),
      ('Blood Prince Council', 0),
      ('Blood-Queen Lana''thel', 0),
      ('Valithria Dreamwalker', 0),
      ('Sindragosa', 0),
      ('The Lich King', 0),
      ('Lord Marrowgar', 1),
      ('Lady Deathwhisper', 1),
      ('Gunship Battle', 1),
      ('Deathbringer Saurfang', 1),
      ('Festergut', 1),
      ('Rotface', 1),
      ('Professor Putricide', 1),
      ('Blood Prince Council', 1),
      ('Blood-Queen Lana''thel', 1),
      ('Valithria Dreamwalker', 1),
      ('Sindragosa', 1),
      ('The Lich King', 1)
  `
]
