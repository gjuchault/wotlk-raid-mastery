import React from 'react'
import {
  PlayerSpec,
  getSpecName,
  PlayerClass,
  getClassName,
  PlayerRole,
  getRoleName
} from '../../domain/player'

import DeathKnight from '../../assets/classes/DeathKnight.png'
import Warrior from '../../assets/classes/Warrior.png'
import Paladin from '../../assets/classes/Paladin.png'
import Druid from '../../assets/classes/Druid.png'
import Hunter from '../../assets/classes/Hunter.png'
import Warlock from '../../assets/classes/Warlock.png'
import Mage from '../../assets/classes/Mage.png'
import Shaman from '../../assets/classes/Shaman.png'
import Priest from '../../assets/classes/Priest.png'
import Rogue from '../../assets/classes/Rogue.png'

import Tank from '../../assets/roles/Tank.png'
import Healer from '../../assets/roles/Healer.png'
import RangedDps from '../../assets/roles/RangedDps.png'
import MeleeDps from '../../assets/roles/MeleeDps.png'

import DKBlood from '../../assets/specs/DKBlood.png'
import DKFrost from '../../assets/specs/DKFrost.png'
import DKUnholy from '../../assets/specs/DKUnholy.png'
import WarArms from '../../assets/specs/WarArms.png'
import WarFury from '../../assets/specs/WarFury.png'
import WarProt from '../../assets/specs/WarProt.png'
import PalRet from '../../assets/specs/PalRet.png'
import PalProt from '../../assets/specs/PalProt.png'
import PalHoly from '../../assets/specs/PalHoly.png'
import DroodFeral from '../../assets/specs/DroodFeral.png'
import DroodResto from '../../assets/specs/DroodResto.png'
import DroodBalance from '../../assets/specs/DroodBalance.png'
import HuntBM from '../../assets/specs/HuntBM.png'
import HuntSurvival from '../../assets/specs/HuntSurvival.png'
import HuntMMS from '../../assets/specs/HuntMMS.png'
import WarlockDemono from '../../assets/specs/WarlockDemono.png'
import WarlockAffli from '../../assets/specs/WarlockAffli.png'
import WarlockDestru from '../../assets/specs/WarlockDestru.png'
import MageFrost from '../../assets/specs/MageFrost.png'
import MageFire from '../../assets/specs/MageFire.png'
import MageArcane from '../../assets/specs/MageArcane.png'
import ShamEnh from '../../assets/specs/ShamEnh.png'
import ShamResto from '../../assets/specs/ShamResto.png'
import ShamElem from '../../assets/specs/ShamElem.png'
import PriestDisc from '../../assets/specs/PriestDisc.png'
import PriestHoly from '../../assets/specs/PriestHoly.png'
import PriestShadow from '../../assets/specs/PriestShadow.png'
import RogueCombat from '../../assets/specs/RogueCombat.png'
import RogueSubtle from '../../assets/specs/RogueSubtle.png'
import RogueAssa from '../../assets/specs/RogueAssa.png'

import LordMarrowgar from '../../assets/bosses/lordmarrowgar.png'
import LadyDeathWhisper from '../../assets/bosses/ladydeathwhisper.png'
import GunshipBattle from '../../assets/bosses/gunshipbattle.png'
import DeathbringerSaurfang from '../../assets/bosses/deathbringersaurfang.png'
import Rotface from '../../assets/bosses/rotface.png'
import Festergut from '../../assets/bosses/festergut.png'
import ProfessorPutricide from '../../assets/bosses/professorputricide.png'
import BloodPrinceCouncil from '../../assets/bosses/bloodprincecouncil.png'
import BloodQueenLanathel from '../../assets/bosses/bloodqueenlanathel.png'
import Valithria from '../../assets/bosses/valithria.png'
import Sindragosa from '../../assets/bosses/sindragosa.png'
import LichKing from '../../assets/bosses/lichking.png'

import Heroic from '../../assets/heroic.png'

interface SpecIconProps {
  spec: PlayerSpec
}

export const SpecIcon: React.FC<SpecIconProps> = ({ spec }) => {
  let src = ''

  if (spec === PlayerSpec.DKBlood) src = DKBlood
  if (spec === PlayerSpec.DKFrost) src = DKFrost
  if (spec === PlayerSpec.DKUnholy) src = DKUnholy
  if (spec === PlayerSpec.WarArms) src = WarArms
  if (spec === PlayerSpec.WarFury) src = WarFury
  if (spec === PlayerSpec.WarProt) src = WarProt
  if (spec === PlayerSpec.PalRet) src = PalRet
  if (spec === PlayerSpec.PalProt) src = PalProt
  if (spec === PlayerSpec.PalHoly) src = PalHoly
  if (spec === PlayerSpec.DroodFeral) src = DroodFeral
  if (spec === PlayerSpec.DroodResto) src = DroodResto
  if (spec === PlayerSpec.DroodBalance) src = DroodBalance
  if (spec === PlayerSpec.HuntBM) src = HuntBM
  if (spec === PlayerSpec.HuntSurvival) src = HuntSurvival
  if (spec === PlayerSpec.HuntMMS) src = HuntMMS
  if (spec === PlayerSpec.WarlockDemono) src = WarlockDemono
  if (spec === PlayerSpec.WarlockAffli) src = WarlockAffli
  if (spec === PlayerSpec.WarlockDestru) src = WarlockDestru
  if (spec === PlayerSpec.MageFrost) src = MageFrost
  if (spec === PlayerSpec.MageFire) src = MageFire
  if (spec === PlayerSpec.MageArcane) src = MageArcane
  if (spec === PlayerSpec.ShamEnh) src = ShamEnh
  if (spec === PlayerSpec.ShamResto) src = ShamResto
  if (spec === PlayerSpec.ShamElem) src = ShamElem
  if (spec === PlayerSpec.PriestDisc) src = PriestDisc
  if (spec === PlayerSpec.PriestHoly) src = PriestHoly
  if (spec === PlayerSpec.PriestShadow) src = PriestShadow
  if (spec === PlayerSpec.RogueCombat) src = RogueCombat
  if (spec === PlayerSpec.RogueSubtle) src = RogueSubtle
  if (spec === PlayerSpec.RogueAssa) src = RogueAssa

  return <img src={src} title={getSpecName(spec)} alt={getSpecName(spec)} width="24" height="24" />
}

interface ClassIconProps {
  playerClass: PlayerClass
}

export const ClassIcon: React.FC<ClassIconProps> = ({ playerClass }) => {
  let src = ''

  if (playerClass === PlayerClass.DeathKnight) src = DeathKnight
  if (playerClass === PlayerClass.Warrior) src = Warrior
  if (playerClass === PlayerClass.Paladin) src = Paladin
  if (playerClass === PlayerClass.Druid) src = Druid
  if (playerClass === PlayerClass.Hunter) src = Hunter
  if (playerClass === PlayerClass.Warlock) src = Warlock
  if (playerClass === PlayerClass.Mage) src = Mage
  if (playerClass === PlayerClass.Shaman) src = Shaman
  if (playerClass === PlayerClass.Priest) src = Priest
  if (playerClass === PlayerClass.Rogue) src = Rogue

  return (
    <img src={src} title={getClassName(playerClass)} alt={getClassName(playerClass)} width="24" height="24" />
  )
}

interface RoleIconProps {
  role: PlayerRole
}

export const RoleIcon: React.FC<RoleIconProps> = ({ role }) => {
  let src = ''

  if (role === PlayerRole.Healer) src = Healer
  if (role === PlayerRole.MeleeDps) src = MeleeDps
  if (role === PlayerRole.RangedDps) src = RangedDps
  if (role === PlayerRole.Tank) src = Tank

  return <img src={src} title={getRoleName(role)} alt={getRoleName(role)} width="24" height="24" />
}

interface BossIconProps {
  boss: string
}

export const BossIcon: React.FC<BossIconProps> = ({ boss }) => {
  let src = ''

  if (boss === 'Lord Marrowgar') src = LordMarrowgar
  if (boss === 'Lady Deathwhisper') src = LadyDeathWhisper
  if (boss === 'Gunship Battle') src = GunshipBattle
  if (boss === 'Deathbringer Saurfang') src = DeathbringerSaurfang
  if (boss === 'Rotface') src = Rotface
  if (boss === 'Festergut') src = Festergut
  if (boss === 'Professor Putricide') src = ProfessorPutricide
  if (boss === 'Blood Prince Council') src = BloodPrinceCouncil
  if (boss === "Blood-Queen Lana'thel") src = BloodQueenLanathel
  if (boss === 'Valithria') src = Valithria
  if (boss === 'Sindragosa') src = Sindragosa
  if (boss === 'The Lich King') src = LichKing

  return <img src={src} title={boss} alt={boss} width="24" height="24" />
}

interface HeroicIconProps {
  heroic: boolean
}

export const HeroicIcon: React.FC<HeroicIconProps> = ({ heroic }) => {
  if (!heroic) return null

  return <img src={Heroic} title="Heroic" alt="Heroic" width="24" height="24" />
}
