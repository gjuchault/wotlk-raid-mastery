export interface Player {
  id: string
  name: string
  gearscore: number
  raidId: number
  class: PlayerClass
  spec: PlayerSpec
  role: PlayerRole
}

export enum PlayerClass {
  DeathKnight = 'DeathKnight',
  Warrior = 'Warrior',
  Paladin = 'Paladin',
  Druid = 'Druid',
  Hunter = 'Hunter',
  Warlock = 'Warlock',
  Mage = 'Mage',
  Shaman = 'Shaman',
  Priest = 'Priest',
  Rogue = 'Rogue'
}

export enum PlayerSpec {
  DKBlood = 'DKBlood',
  DKFrost = 'DKFrost',
  DKUnholy = 'DKUnholy',
  WarArms = 'WarArms',
  WarFury = 'WarFury',
  WarProt = 'WarProt',
  PalRet = 'PalRet',
  PalProt = 'PalProt',
  PalHoly = 'PalHoly',
  DroodFeral = 'DroodFeral',
  DroodResto = 'DroodResto',
  DroodBalance = 'DroodBalance',
  HuntBM = 'HuntBM',
  HuntSurvival = 'HuntSurvival',
  HuntMMS = 'HuntMMS',
  WarlockDemono = 'WarlockDemono',
  WarlockAffli = 'WarlockAffli',
  WarlockDestru = 'WarlockDestru',
  MageFrost = 'MageFrost',
  MageFire = 'MageFire',
  MageArcane = 'MageArcane',
  ShamEnh = 'ShamEnh',
  ShamResto = 'ShamResto',
  ShamElem = 'ShamElem',
  PriestDisc = 'PriestDisc',
  PriestHoly = 'PriestHoly',
  PriestShadow = 'PriestShadow',
  RogueCombat = 'RogueCombat',
  RogueSubtle = 'RogueSubtle',
  RogueAssa = 'RogueAssa'
}

export enum PlayerRole {
  Tank = 'Tank',
  Healer = 'Healer',
  RangedDps = 'RangedDps',
  MeleeDps = 'MeleeDps'
}

export const getSpecsFromClass = (playerClass?: PlayerClass): PlayerSpec[] => {
  switch (playerClass) {
    case PlayerClass.DeathKnight:
      return [PlayerSpec.DKBlood, PlayerSpec.DKFrost, PlayerSpec.DKUnholy]
    case PlayerClass.Druid:
      return [
        PlayerSpec.DroodBalance,
        PlayerSpec.DroodFeral,
        PlayerSpec.DroodResto
      ]
    case PlayerClass.Hunter:
      return [
        PlayerSpec.HuntBM,
        PlayerSpec.HuntMMS,
        PlayerSpec.HuntSurvival
      ]
    case PlayerClass.Mage:
      return [PlayerSpec.MageArcane, PlayerSpec.MageFire, PlayerSpec.MageFrost]
    case PlayerClass.Paladin:
      return [PlayerSpec.PalHoly, PlayerSpec.PalProt, PlayerSpec.PalRet]
    case PlayerClass.Priest:
      return [
        PlayerSpec.PriestDisc,
        PlayerSpec.PriestHoly,
        PlayerSpec.PriestShadow
      ]
    case PlayerClass.Rogue:
      return [
        PlayerSpec.RogueAssa,
        PlayerSpec.RogueCombat,
        PlayerSpec.RogueSubtle
      ]
    case PlayerClass.Shaman:
      return [PlayerSpec.ShamElem, PlayerSpec.ShamEnh, PlayerSpec.ShamResto]
    case PlayerClass.Warlock:
      return [
        PlayerSpec.WarlockAffli,
        PlayerSpec.WarlockDemono,
        PlayerSpec.WarlockDestru
      ]
    case PlayerClass.Warrior:
      return [PlayerSpec.WarArms, PlayerSpec.WarFury, PlayerSpec.WarProt]
    default:
      return [
        PlayerSpec.DKBlood,
        PlayerSpec.DKFrost,
        PlayerSpec.DKUnholy,
        PlayerSpec.WarArms,
        PlayerSpec.WarFury,
        PlayerSpec.WarProt,
        PlayerSpec.PalRet,
        PlayerSpec.PalProt,
        PlayerSpec.PalHoly,
        PlayerSpec.DroodFeral,
        PlayerSpec.DroodResto,
        PlayerSpec.DroodBalance,
        PlayerSpec.HuntBM,
        PlayerSpec.HuntSurvival,
        PlayerSpec.HuntMMS,
        PlayerSpec.WarlockDemono,
        PlayerSpec.WarlockAffli,
        PlayerSpec.WarlockDestru,
        PlayerSpec.MageFrost,
        PlayerSpec.MageFire,
        PlayerSpec.MageArcane,
        PlayerSpec.ShamEnh,
        PlayerSpec.ShamResto,
        PlayerSpec.ShamElem,
        PlayerSpec.PriestDisc,
        PlayerSpec.PriestHoly,
        PlayerSpec.PriestShadow,
        PlayerSpec.RogueCombat,
        PlayerSpec.RogueSubtle,
        PlayerSpec.RogueAssa
      ]
  }
}

export const getSpecName = (spec?: PlayerSpec) => {
  switch (spec) {
    case PlayerSpec.DKBlood: return 'Blood'
    case PlayerSpec.DKFrost: return 'Frost'
    case PlayerSpec.DKUnholy: return 'UH'
    case PlayerSpec.WarArms: return 'Arms'
    case PlayerSpec.WarFury: return 'Fury'
    case PlayerSpec.WarProt: return 'Prot'
    case PlayerSpec.PalRet: return 'Ret'
    case PlayerSpec.PalProt: return 'Prot'
    case PlayerSpec.PalHoly: return 'Holy'
    case PlayerSpec.DroodFeral: return 'Feral'
    case PlayerSpec.DroodResto: return 'Resto'
    case PlayerSpec.DroodBalance: return 'Balance'
    case PlayerSpec.HuntBM: return 'BM'
    case PlayerSpec.HuntSurvival: return 'Survival'
    case PlayerSpec.HuntMMS: return 'MMS'
    case PlayerSpec.WarlockDemono: return 'Demono'
    case PlayerSpec.WarlockAffli: return 'Affli'
    case PlayerSpec.WarlockDestru: return 'Destru'
    case PlayerSpec.MageFrost: return 'Frost'
    case PlayerSpec.MageFire: return 'Fire'
    case PlayerSpec.MageArcane: return 'Arcane'
    case PlayerSpec.ShamEnh: return 'Enh'
    case PlayerSpec.ShamResto: return 'Resto'
    case PlayerSpec.ShamElem: return 'Elem'
    case PlayerSpec.PriestDisc: return 'Disco'
    case PlayerSpec.PriestHoly: return 'Holy'
    case PlayerSpec.PriestShadow: return 'Spriest'
    case PlayerSpec.RogueCombat: return 'Combat'
    case PlayerSpec.RogueSubtle: return 'Sub'
    case PlayerSpec.RogueAssa: return 'Assa'
    default: return ''
  }
}

export const getRolesFromClass = (playerClass?: PlayerClass): PlayerRole[] => {
  switch (playerClass) {
    case PlayerClass.DeathKnight:
      return [PlayerRole.Tank, PlayerRole.MeleeDps]
    case PlayerClass.Druid:
      return [
        PlayerRole.Tank,
        PlayerRole.Healer,
        PlayerRole.MeleeDps,
        PlayerRole.RangedDps
      ]
    case PlayerClass.Hunter:
      return [PlayerRole.RangedDps]
    case PlayerClass.Mage:
      return [PlayerRole.RangedDps]
    case PlayerClass.Paladin:
      return [PlayerRole.Tank, PlayerRole.Healer, PlayerRole.MeleeDps]
    case PlayerClass.Priest:
      return [PlayerRole.Healer, PlayerRole.RangedDps]
    case PlayerClass.Rogue:
      return [PlayerRole.MeleeDps]
    case PlayerClass.Shaman:
      return [PlayerRole.Healer, PlayerRole.MeleeDps, PlayerRole.RangedDps]
    case PlayerClass.Warlock:
      return [PlayerRole.RangedDps]
    case PlayerClass.Warrior:
      return [PlayerRole.Tank, PlayerRole.MeleeDps]
    default:
      return [
        PlayerRole.Tank,
        PlayerRole.Healer,
        PlayerRole.MeleeDps,
        PlayerRole.RangedDps
      ]
  }
}
