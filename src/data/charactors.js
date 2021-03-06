export default {
    "test": "test1",
    team: [{
        ability_scores: {
            str: 10,
            dex: 16,
            con: 14,
            int: 16,
            wis: 10,
            cha: 10
        },
        selectSkills: [
            'athletics',
            'arcana',
            'investigation',
            'insight',
            'perception',
            'performance',
            'intimidation'
        ],
        clazzItems: [{
                lvl: 1,
                clazz: '战士',
                hd: 10
            },
            {
                lvl: 1,
                clazz: '法师',
                hd: 6
            },
            {
                lvl: 1,
                clazz: '法师',
                hd: 6
            },
            {
                lvl: 1,
                clazz: '法师',
                hd: 6
            },
            {
                lvl: 1,
                clazz: '法师',
                hd: 6
            },
            {
                lvl: 1,
                clazz: '法师',
                hd: 6
            }
        ],
        featItems: [{
                feat_en: 'ability_score_increase_con',
                feat_cn: '属性值加成',
                source: '半精灵',
                description: '你的耐力加 1。'
            }, {
                feat_en: 'ability_score_increase_dex',
                feat_cn: '属性值加成',
                source: '半精灵',
                description: '你的敏捷加 1。'
            }, {
                feat_en: 'ability_score_increase_cha_2',
                feat_cn: '属性值加成',
                source: '半精灵',
                description: '你的魅力加 2。'
            },
            {
                feat_en: 'skill_versatility',
                feat_cn: '多才多艺',
                source: '半精灵',
                description: '你获得两项自选技能的熟练项。'
            }, {
                feat_en: 'darkvision',
                feat_cn: '黑暗视觉',
                source: '半精灵',
                description: '得益于你的精灵血统，你在黑暗和微 光光照中有着超出常人的视力。在微光光照下，你身边 60 尺 内可以视为等同于明亮光照。而在黑暗中，该范围内可视为等 同于微光光照。你无法在黑暗中分辨颜色，只能看到有灰度的 黑白画面。'
            }, {
                feat_en: 'fey_ancestry',
                feat_cn: '精类血统',
                source: '半精灵',
                description: '你进行对抗魅惑的豁免时具有优势， 并且不会因魔法效应而陷入睡眠。'
            }, {
                feat_en: 'fighting_style_defense',
                feat_cn: '战斗风格：防御',
                source: '战士 1 级',
                description: '着装护甲时，你的 AC 获得 +1 加值。'
            }, {
                feat_en: 'second_wind',
                feat_cn: '回气',
                source: '战士 1 级',
                description: '你拥有少量精力储备可用来保护自己免受伤害。你可以在自己回合内用一个附赠动作恢复生命值，其总值为 1d10+你的 战士职业等级。你必须完成一次短休或长休才能再次使用该特性。'
            }, {
                feat_en: 'observant_int',
                feat_cn: '观察力',
                source: '法师 4 级',
                description: '你能够迅速把握周遭环境的要点，并获得下列增益:\n• 你的智力加 1，上限为 20。\n• 某生物在讲话时，若你可以看见目标的嘴且你可以理解其语\n言，则你就可以依靠读唇来解读目标正在讲什么。\n• 你的被动感知(察觉)和智力(调查)检定具有+5 加值。'
            }

        ]
    }],

}