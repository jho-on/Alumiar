# Arquitetura

## Tecnologias

| Nome               | Motivo                                                                      |
| ------------------ | --------------------------------------------------------------------------- |
| React Native       | Desenvolvimento mobile para Android utilizando um ecossistema já conhecido. |
| TypeScript         | Maior segurança de tipos e melhor manutenção do código.                     |
| SQLite             | Persistência local dos dados da aplicação.                                  |
| Expo Notifications | Agendamento de notificações locais.                                         |

## Estrutura de pastas

O código será organizado por funcionalidades (feature-first), de forma que cada módulo concentre seus componentes, telas, serviços e tipos.

Funcionalidades independentes devem permanecer isoladas dentro de seu próprio módulo, evitando dependências diretas entre features. Recursos compartilhados entre múltiplas funcionalidades deverão ser armazenados no diretório shared.

```
src/
│
├── features/
│   ├── tasks/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── screens/
│   │   ├── services/
│   │   └── types.ts
│   │
│   ├── calendar/
│   ├── settings/
│
├── shared/
└── database/
```
