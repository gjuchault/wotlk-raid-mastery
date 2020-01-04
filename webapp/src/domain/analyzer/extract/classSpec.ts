import { CombatLog } from '../../combatLog'
import { PlayerClass, PlayerRole, PlayerSpec } from '../../player'

enum Spells {
  VampiricBlood = 55233,
  FrostStrike = 55268,
  SummonGargoyle = 49206,
  ShieldWall = 871,
  MortalStrike = 47486,
  BloodThirst = 23881,
  DivineStorm = 53385,
  HolyShield = 48952,
  BeaconOfLight = 53563,
  SwipeBear = 48562,
  Rake = 48574,
  Starfall = 53201,
  Lifebloom = 48451,
  ExplosiveShot = 60053,
  KillCommand = 34026,
  ChimeraShot = 53209,
  Metamorphosis = 47241,
  UnstableAffliction = 47843,
  Conflagrate = 17962,
  LivingBomb = 55360,
  IcyVeins = 12472,
  ArcaneBlast = 42897,
  FeralSpirit = 51533,
  LavaBurst = 60043,
  FlameShock = 49233,
  EarthShield = 49284,
  ChainHeal = 55459,
  MindFlay = 48156,
  CircleOfHealing = 48089,
  PowerInfusion = 10060,
  KillingSpree = 51690,
  Mutilate = 48666,
  ShadowDance = 51713
}

export const getClassSpecAndRole = (log: CombatLog, playerName: string) => {
  for (const { eventType, sourceName, params } of log.events) {
    if (eventType !== 'SPELL_CAST_SUCCESS' || sourceName !== playerName) {
      continue
    }

    const spellCast = params[0]

    if (spellCast === Spells.VampiricBlood) {
      return {
        class: PlayerClass.DeathKnight,
        spec: PlayerSpec.DKBlood,
        role: PlayerRole.Tank
      }
    }

    if (spellCast === Spells.FrostStrike) {
      return {
        class: PlayerClass.DeathKnight,
        spec: PlayerSpec.DKFrost,
        role: PlayerRole.MeleeDps
      }
    }

    if (spellCast === Spells.SummonGargoyle) {
      return {
        class: PlayerClass.DeathKnight,
        spec: PlayerSpec.DKUnholy,
        role: PlayerRole.MeleeDps
      }
    }

    if (spellCast === Spells.ShieldWall) {
      return {
        class: PlayerClass.Warrior,
        spec: PlayerSpec.WarProt,
        role: PlayerRole.Tank
      }
    }

    if (spellCast === Spells.MortalStrike) {
      return {
        class: PlayerClass.Warrior,
        spec: PlayerSpec.WarArms,
        role: PlayerRole.MeleeDps
      }
    }

    if (spellCast === Spells.BloodThirst) {
      return {
        class: PlayerClass.Warrior,
        spec: PlayerSpec.WarFury,
        role: PlayerRole.MeleeDps
      }
    }

    if (spellCast === Spells.DivineStorm) {
      return {
        class: PlayerClass.Paladin,
        spec: PlayerSpec.PalRet,
        role: PlayerRole.MeleeDps
      }
    }

    if (spellCast === Spells.HolyShield) {
      return {
        class: PlayerClass.Paladin,
        spec: PlayerSpec.PalProt,
        role: PlayerRole.Tank
      }
    }

    if (spellCast === Spells.BeaconOfLight) {
      return {
        class: PlayerClass.Paladin,
        spec: PlayerSpec.PalHoly,
        role: PlayerRole.Healer
      }
    }

    if (spellCast === Spells.SwipeBear) {
      return {
        class: PlayerClass.Druid,
        spec: PlayerSpec.DroodFeral,
        role: PlayerRole.Tank
      }
    }

    if (spellCast === Spells.Rake) {
      return {
        class: PlayerClass.Druid,
        spec: PlayerSpec.DroodFeral,
        role: PlayerRole.MeleeDps
      }
    }

    if (spellCast === Spells.Starfall) {
      return {
        class: PlayerClass.Druid,
        spec: PlayerSpec.DroodBalance,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.Lifebloom) {
      return {
        class: PlayerClass.Druid,
        spec: PlayerSpec.DroodResto,
        role: PlayerRole.Healer
      }
    }

    if (spellCast === Spells.ExplosiveShot) {
      return {
        class: PlayerClass.Hunter,
        spec: PlayerSpec.HuntSurvival,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.KillCommand) {
      return {
        class: PlayerClass.Hunter,
        spec: PlayerSpec.HuntBM,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.ChimeraShot) {
      return {
        class: PlayerClass.Hunter,
        spec: PlayerSpec.HuntMMS,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.Metamorphosis) {
      return {
        class: PlayerClass.Warlock,
        spec: PlayerSpec.WarlockDemono,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.UnstableAffliction) {
      return {
        class: PlayerClass.Warlock,
        spec: PlayerSpec.WarlockAffli,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.Conflagrate) {
      return {
        class: PlayerClass.Warlock,
        spec: PlayerSpec.WarlockDestru,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.LivingBomb) {
      return {
        class: PlayerClass.Mage,
        spec: PlayerSpec.MageFire,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.IcyVeins) {
      return {
        class: PlayerClass.Mage,
        spec: PlayerSpec.MageFrost,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.ArcaneBlast) {
      return {
        class: PlayerClass.Mage,
        spec: PlayerSpec.MageArcane,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.FeralSpirit) {
      return {
        class: PlayerClass.Shaman,
        spec: PlayerSpec.ShamEnh,
        role: PlayerRole.MeleeDps
      }
    }

    if (spellCast === Spells.LavaBurst) {
      return {
        class: PlayerClass.Shaman,
        spec: PlayerSpec.ShamElem,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.EarthShield) {
      return {
        class: PlayerClass.Shaman,
        spec: PlayerSpec.ShamResto,
        role: PlayerRole.Healer
      }
    }

    if (spellCast === Spells.MindFlay) {
      return {
        class: PlayerClass.Priest,
        spec: PlayerSpec.PriestShadow,
        role: PlayerRole.RangedDps
      }
    }

    if (spellCast === Spells.CircleOfHealing) {
      return {
        class: PlayerClass.Priest,
        spec: PlayerSpec.PriestHoly,
        role: PlayerRole.Healer
      }
    }

    if (spellCast === Spells.PowerInfusion) {
      return {
        class: PlayerClass.Priest,
        spec: PlayerSpec.PriestDisc,
        role: PlayerRole.Healer
      }
    }

    if (spellCast === Spells.KillingSpree) {
      return {
        class: PlayerClass.Rogue,
        spec: PlayerSpec.RogueCombat,
        role: PlayerRole.MeleeDps
      }
    }

    if (spellCast === Spells.Mutilate) {
      return {
        class: PlayerClass.Rogue,
        spec: PlayerSpec.RogueAssa,
        role: PlayerRole.MeleeDps
      }
    }

    if (spellCast === Spells.ShadowDance) {
      return {
        class: PlayerClass.Rogue,
        spec: PlayerSpec.RogueSubtle,
        role: PlayerRole.MeleeDps
      }
    }
  }

  return {
    class: '' as PlayerClass,
    spec: '' as PlayerSpec,
    role: '' as PlayerRole
  }
}
