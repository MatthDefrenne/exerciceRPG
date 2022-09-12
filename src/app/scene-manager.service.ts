import { Injectable } from '@angular/core';



class CombatScene {
  round: number = 0;
  inProgress: boolean = true;
  creature: Creature;
  player: Player;

  constructor(player: Player, creature: Creature) {
    this.player = player;
    this.creature = creature;
  }

  nextRound() {
    this.round += 1;
  }

}

class Unit {
  // Attributs
  _name: string;
  _damage: number;
  _health: number;
  _maxHealth: number;
  _isAlive: boolean;
  _size: number;

  constructor(name: string, damage: number, health: number, size: number) {
    this._name = name;
    this._damage = damage;
    this._health = health;
    this._maxHealth = health;
    this._isAlive = true;
    this._size = size;
  }
  // methods
  MeleeAttack(attacker: Unit, victim: Unit) {
    victim._health -= attacker._damage
    this.OnReceiveDamage(victim);
  }

  OnReceiveDamage(victim: Unit) {
    if (victim._health < 0) {
      victim._health = 0;
    }
  }
};

class Player extends Unit {
  _buffs: Spell[];
  _inventory: Item[];
  constructor(name: string, damage: number, health: number, size: number) {
    super(name, damage, health, size);
    this._buffs = [];
    this._inventory = [];
  }
  CastSpell(spell: Spell, target: Creature) {
    switch (spell.effect) {
      case Effect.DirectDamage:
        target._health -= spell.value
        break;
      case Effect.Dot:
        target._debuffs.push(spell);
        break;
      case Effect.Hot:
        this._buffs.push(spell);
        break;
      default:
        break;
    }
  }
  UseItem(item: Item) { }
  GetItemsInInventory(): Item[] { return []; }
  AddItemToInventory(item: Item) { };
};



class Creature extends Unit {
  _debuffs: Spell[];
  constructor(name: string, damage: number, health: number, size: number) {
    super(name, damage, health, size);
    this._debuffs = [];
  }
};

class Item {
  _name: string;
  _bonusHealth: number;
  _bonusMaxHealth: number;
  constructor(name: string, bonusHealth: number, bonusMaxHealth: number) {
    this._name = name;
    this._bonusHealth = bonusHealth;
    this._bonusMaxHealth = bonusMaxHealth;
  }
}

enum Effect {
  DirectDamage = 1,
  Dot = 2,
  Hot = 3
}

class Spell {
  effect: number;
  duration: number;
  value: number;
  constructor(effect: Effect, duration: number, value: number) {
    this.effect = effect;
    this.duration = duration;
    this.value = value;
  }
}


@Injectable({
  providedIn: 'root'
})
export class SceneManagerService {

  Player: Player;
  Creature: Creature;

  constructor() {
    this.Player = new Player("Quentin", 20, 300, 1);
    this.Creature = new Creature("Matth", 20, 150, 1);
  }

}
