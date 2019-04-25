export class Administrador {
    static navItems = [
        {
          name: 'Plano de Ação',
          url: '/plano/acao',
          icon: 'cui-layers',
          role: ['ROLE_PLANO_ACAO_SEARCH']
        },
        {
          title: true,
          name: 'Manutenções',
          role: ['ROLE_PMC_LANCAMENTO_SEARCH', 'ROLE_PMC_SEARCH', 'ROLE_PMP_SEARCH', 'ROLE_PMP_LANCAMENTO_SEARCH']
        },
        {
          name: 'Corretiva',
          url: '/pmc',
          icon: 'icon-note',
          role: ['ROLE_PMC_LANCAMENTO_SEARCH', 'ROLE_PMC_SEARCH'],
          children: [
            {
              name: 'Preenchimento',
              url: '/pmc/lancamento',
              icon: 'icon-note',
              role: 'ROLE_PMC_LANCAMENTO_SEARCH'
            },
            {
              name: 'Ordem de Serviço',
              url: '/pmc/os',
              icon: 'icon-note',
              role: 'ROLE_PMC_SEARCH'
            },
          ]
        },
        {
          name: 'Preventiva',
          url: '/pmp',
          icon: 'icon-cursor',
          role: ['ROLE_PMP_SEARCH', 'ROLE_PMP_LANCAMENTO_SEARCH'],
          children: [
            {
              name: 'Gestão',
              url: '/pmp/gestao',
              icon: 'icon-cursor',
              role: 'ROLE_PMP_SEARCH'
            },
            {
              name: 'Lançamentos',
              url: '/pmp/lancamento',
              icon: 'icon-cursor',
              role: 'ROLE_PMP_LANCAMENTO_SEARCH',
            },
          ]
        },
        {
          title: true,
          name: 'Extras',
          role: ['ROLE_REPORT_PLANO', 'ROLE_REPORT_MANUTENCAO', 'ROLE_EQUIPAMENTO_SEARCH', 'ROLE_EQUIPAMENTO_TIPO_SEARCH',
          'ROLE_MANUTENCAO_SEARCH', 'ROLE_DEPARTAMENTO_SEARCH', 'ROLE_FABRICANTE_SEARCH', 'ROLE_TIPO_DOCUMENTO_SEARCH']
        },
        {
          name: 'Relatórios',
          url: '/report',
          icon: 'icon-printer',
          role: ['ROLE_REPORT_PLANO', 'ROLE_REPORT_MANUTENCAO'],
          children: [
            {
              name: 'Plano de Manutenção',
              url: '/report/plano',
              icon: 'icon-printer',
              role: 'ROLE_REPORT_PLANO',
            },
            {
              name: 'Manutenções Previstas',
              url: '/report/previstas',
              icon: 'icon-printer',
              role: 'ROLE_REPORT_MANUTENCAO',
            },
          ]
        },
        {
          name: 'Tabelas básicas',
          url: '/app',
          icon: 'icon-puzzle',
          role: ['ROLE_EQUIPAMENTO_SEARCH', 'ROLE_EQUIPAMENTO_TIPO_SEARCH', 'ROLE_MANUTENCAO_SEARCH', 'ROLE_DEPARTAMENTO_SEARCH',
        'ROLE_FABRICANTE_SEARCH', 'ROLE_TIPO_DOCUMENTO_SEARCH'],
          children: [
            {
              name: 'Equipamentos',
              url: '/app/equipamento',
              icon: 'icon-puzzle',
              role: 'ROLE_EQUIPAMENTO_SEARCH',
            },
            {
              name: 'Tipo de Equipamentos',
              url: '/app/equipamento_tipo',
              icon: 'icon-puzzle',
              role: 'ROLE_EQUIPAMENTO_TIPO_SEARCH',
            },
            {
              name: 'Manutenções',
              url: '/app/manutencoes',
              icon: 'icon-puzzle',
              role: 'ROLE_MANUTENCAO_SEARCH',
            },
            {
              name: 'Departamentos',
              url: '/app/departamento',
              icon: 'icon-puzzle',
              role: 'ROLE_DEPARTAMENTO_SEARCH',
            },
            {
              name: 'Fabricantes',
              url: '/app/fabricantes',
              icon: 'icon-puzzle',
              role: 'ROLE_FABRICANTE_SEARCH',
            },
            {
              name: 'Tipo de Documentos',
              url: '/app/tipodocumento',
              icon: 'icon-puzzle',
              role: 'ROLE_TIPO_DOCUMENTO_SEARCH',
            },
          ]
        },
        {
          title: true,
          name: 'Controle de Acesso',
          role: ['ROLE_USUARIO_SEARCH', 'ROLE_USUARIO_SEARCH']
        },
        {
          name: 'Configurações',
          url: '/conf',
          icon: 'icon-settings',
          role: ['ROLE_USUARIO_SEARCH', 'ROLE_USUARIO_SEARCH'],
          children: [
            {
              name: 'Usuários',
              url: '/conf/usuario',
              icon: 'icon-people',
              role: 'ROLE_USUARIO_SEARCH',
            },
            {
              name: 'Autorizações',
              url: '/conf/autorizacao',
              icon: 'icon-people',
              role: 'ROLE_USUARIO_SEARCH',
            }
          ]
        }
      ];
}
