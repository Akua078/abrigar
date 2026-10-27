const sidebars = {
  abrigarSidebar: [

    {
      type: 'category',
      label: 'World',
      link: {
        type: 'doc',
        id: 'world/index',
      },
      items: [
        'world/map',
        'world/economy',
        'world/people',
        'world/bestiary',
        'world/floriary',
        'world/cuisine',
        'world/holidays_and_seasons',
        'world/biomes',
        'world/item_catalogue',
        'world/homebrew',
      ],
    },

    {
      type: 'category',
      label: 'Nations',
      link: {
        type: 'doc',
        id: 'nations/index',
      },
      items: [
        'nations/arutu',
        'nations/balbia',
        'nations/eplem',
        'nations/farith',
        'nations/fratera',
        'nations/gacte',
        'nations/ishkari',
        'nations/koral',
        'nations/kulcin',
        'nations/lewe',
        'nations/minera',
        'nations/morgana',
        'nations/theNull',
        'nations/uxbrid',
        'nations/visia',
        'nations/theWoods',
        'nations/theWarcradleNations',

        
      ],
    },

    {
      type: 'category',
      label: 'Groups',
      link: {
        type: 'doc',
        id: 'groups/index',
      },
      items: [
        'groups/azure_cooperation',
      ],
    },

    {
      type: 'category',
      label: 'Characters',
      items: [
        'characters/index',
        'characters/theSeven',
        'characters/theEverwinters',
        'characters/theMaddocks',
      ],
    },

    {
      type: 'category',
      label: 'Adventures',
      link: {
        type: 'doc',
        id: 'adventures/index',
      },
      items: [
        'adventures/eternities_edge',
        'adventures/the_hungry_ones',
      ],
    },

    {
      type: 'category',
      label: 'Other',
      items: [
        'other/table_rules',
        'other/the_pale_weave',
        'other/extra_goodies',
      ],
    },

  ],
};

export default sidebars;