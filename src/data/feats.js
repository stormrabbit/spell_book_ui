const feats = [{
    cn_name: "警觉",
    en_name: 'alert'
}, {
    cn_name: "运动员",
    en_name: 'athlete'
}, {
    cn_name: "演员",
    en_name: 'actor'
}, {
    cn_name: "冲锋手",
    en_name: 'charger'
}, {
    cn_name: "强弩专家",
    en_name: 'crossbow_expert'
}, {
    cn_name: "防御式决斗",
    en_name: 'defensive_duelist'
}, {
    cn_name: "双持客",
    en_name: 'dual_wielder'
}, {
    cn_name: "地城探索者",
    en_name: 'dungeon_delver'
}, {
    cn_name: "耐性",
    en_name: 'durable'
}, {
    cn_name: "元素导师",
    en_name: 'elemental_adept'
}, {
    cn_name: "擒抱者",
    en_name: 'grappler'
}, {
    cn_name: "巨武器大师",
    en_name: 'great_weapon_master'
}, {
    cn_name: "医疗师",
    en_name: 'healer'
}, {
    cn_name: "重甲运用",
    en_name: 'heavily_armored'
}, {
    cn_name: "重甲大师",
    en_name: 'heavy_armor_master'
}, {
    cn_name: "领袖之证",
    en_name: 'inspiring_leader'
}, {
    cn_name: "敏锐心灵",
    en_name: 'keen_mind'
}, {
    cn_name: "轻甲运用",
    en_name: 'lightly_armored'
}, {
    cn_name: "语言学家",
    en_name: 'linguist'
}, {
    cn_name: "幸运",
    en_name: 'lucky'
}, {
    cn_name: "巫师杀手",
    en_name: 'mage_slayer'
}, {
    cn_name: "魔法学徒",
    en_name: 'magic_initiate'
}, {
    cn_name: "战技专家",
    en_name: 'martial_adept'
}, {
    cn_name: "中甲大师",
    en_name: 'medium_armor_master'
}, {
    cn_name: "灵活移动",
    en_name: 'mobile'
}, {
    cn_name: "中甲运用",
    en_name: 'moderately_armored'
}, {
    cn_name: "骑乘战斗",
    en_name: 'mounted_combatant'
}, {
    cn_name: "观察力",
    en_name: 'observant'
}, {
    cn_name: "长柄武器大师",
    en_name: 'polearm_master'
}, {
    cn_name: "强健身心",
    en_name: 'resilient'
}, {
    cn_name: "仪式施法者",
    en_name: 'ritual_caster'
}, {
    cn_name: "凶蛮打手",
    en_name: 'savage_attacker'
}, {
    cn_name: "哨兵",
    en_name: 'sentinel'
}];
const featsCN = feats.map( feat => feat.cn_name);
const featsEN = feats.map( feat => feat.en_name);
const locateFeatByEn = en => feats.find(feat => feat.en_name === en);
export {
    feats,
    featsCN,
    featsEN,
    locateFeatByEn
}