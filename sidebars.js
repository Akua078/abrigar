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
        'nations/minera',
        'nations/fratera',
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
      label: 'Adventures',
      link: {
        type: 'doc',
        id: 'adventures/index',
      },
      items: [
        'adventures/eternities_edge',
      ],
    },

    {
      type: 'category',
      label: 'Other',
      items: [
        'other/table_rules',
        'other/the_pale_weave',
        'characters/index'
      ],
    },

  ],
};

export default sidebars;