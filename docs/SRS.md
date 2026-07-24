# SRS — Especificação de Requisitos de Software

**Versão:** 0.1.0  
**Última atualização:** 21/07/2026

---

# 1. Introdução

## 1.1 Contexto

Muitas pessoas possuem dificuldade em manter consistência em hábitos diários. Embora existam diversos aplicativos de gerenciamento de tarefas, muitos focam em produtividade ou listas extensas, em vez de fornecer uma representação visual simples da constância ao longo do tempo. O Alumiar surge com a proposta de utilizar um calendário visual para representar a conclusão diária da rotina.

---

# 2. Visão Geral do Produto

## 2.1 Escopo

O Alumiar é um aplicativo móvel para gerenciamento de rotinas diárias.

O sistema permitirá o cadastro de tarefas recorrentes, o acompanhamento de sua conclusão diária e a visualização do histórico por meio de um calendário.

O aplicativo será destinado ao uso individual e funcionará integralmente offline.

## 2.2 Usuários

| Papel   | Descrição                                                         |
| ------- | ----------------------------------------------------------------- |
| Usuário | Pessoa que utiliza o aplicativo para gerenciar sua rotina diária. |

## 2.3 Restrições

- O sistema armazenará todos os dados exclusivamente de forma local.
- A primeira versão do sistema será destinada apenas à plataforma Android.
- O sistema não oferecerá sincronização entre dispositivos ou serviços em nuvem.

## 2.4 Premissas

- O estímulo visual fornecido pelo sistema contribui positivamente para a motivação do usuário na construção de novos hábitos.
- O usuário realizará o preenchimento das atividades concluídas de forma consistente, permitindo que o sistema represente corretamente sua evolução.

---

# 3. Requisitos Funcionais

| ID   | Requisito                                                                                                  |
| ---- | ---------------------------------------------------------------------------------------------------------- |
| RF01 | O sistema deve permitir o cadastro de tarefas.                                                             |
| RF02 | O sistema deve permitir a edição de tarefas cadastradas.                                                   |
| RF03 | O sistema deve permitir a exclusão de tarefas cadastradas.                                                 |
| RF04 | O sistema deve permitir a visualização das tarefas de uma rotina.                                          |
| RF05 | O sistema deve permitir o registro da conclusão de uma tarefa.                                             |
| RF06 | O sistema deve armazenar o histórico diário de conclusão das tarefas.                                      |
| RF07 | O sistema deve registrar alterações realizadas na rotina, incluindo criação, edição e exclusão de tarefas. |
| RF08 | O sistema deve representar visualmente no calendário o progresso da rotina ao longo do tempo.              |
| RF09 | O sistema deve permitir a navegação entre diferentes meses e anos no calendário.                           |
| RF10 | O sistema deve permitir a exclusão de todos os dados armazenados pelo usuário.                             |
| RF11 | O sistema deve enviar notificações locais para lembrar o usuário da realização das tarefas.                |
| RF12 | O sistema deve permitir a configuração do feedback sonoro, incluindo sua ativação e volume.                |
| RF13 | O sistema deve permitir a configuração das notificações locais.                                            |
| RF14 | O sistema deve fornecer informações textuais equivalentes aos elementos visuais apresentados.              |

---

# 4. Requisitos Não Funcionais

| ID    | Requisito                                                                                                                                 |
| ----- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| RNF01 | O sistema deve seguir boas práticas de acessibilidade para aplicativos Android.                                                           |
| RNF02 | O sistema deve ser compatível com recursos de acessibilidade nativos do Android.                                                          |
| RNF03 | O sistema deve responder às interações do usuário sem atrasos perceptíveis durante o gerenciamento da rotina e navegação pelo calendário. |
| RNF04 | O sistema deve ser desenvolvido para a plataforma Android.                                                                                |
| RNF05 | O sistema deve funcionar integralmente sem conexão com a internet.                                                                        |
| RNF06 | O sistema deve armazenar todos os dados do usuário exclusivamente de forma local no dispositivo.                                          |
| RNF07 | O sistema deve possuir uma interface simples e intuitiva para o gerenciamento de rotinas.                                                 |

---

# 5. Regras de Negócio

| ID   | Regra                                                                                                                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------ |
| RN01 | O sistema deve possuir apenas uma rotina ativa por usuário                                                               |
| RN02 | Toda tarefa deve pertencer à rotina do usuário.                                                                          |
| RN03 | A rotina só é considerada completa se todas as tarefas forem concluídas em um determinado dia                            |
| RN04 | Uma tarefa só pode ser concluída uma vez por dia                                                                         |
| RN05 | A representação visual de um dia deve ser atualizada automaticamente quando todas as tarefas da rotina forem concluídas. |
| RN06 | O usuário não poderá alterar manualmente a representação visual do calendário.                                           |

---

# 6. Critérios de Aceitação

## RF01 - Cadastro de tarefas

### Dado

Que o usuário esteja na tela da rotina.

### Quando

O usuário cadastrar uma nova tarefa.

### Então

A tarefa deve ser adicionada à rotina e exibida na lista de tarefas.

---

## RF02 - Edição de tarefas

### Dado

Que exista uma tarefa cadastrada.

### Quando

O usuário editar suas informações e salvar as alterações.

### Então

A tarefa deve ser atualizada na rotina.

---

## RF03 - Exclusão de tarefas

### Dado

Que exista uma tarefa cadastrada.

### Quando

O usuário solicitar sua exclusão e confirmar a ação.

### Então

A tarefa deve ser removida da rotina.

---

## RF04 - Visualização da rotina

### Dado

Que existam tarefas cadastradas.

### Quando

O usuário acessar a tela principal da rotina.

### Então

Todas as tarefas cadastradas devem ser exibidas.

---

## RF05 - Conclusão de tarefa

### Dado

Que exista uma tarefa pendente.

### Quando

O usuário marcá-la como concluída.

### Então

O sistema deve registrar sua conclusão e atualizar o estado da tarefa.

---

## RF06 - Histórico diário

### Dado

Que existam registros de conclusão.

### Quando

O usuário visualizar um dia do histórico.

### Então

O sistema deve apresentar as conclusões registradas para aquele dia.

---

## RF07 - Histórico de alterações da rotina

### Dado

Que o usuário crie, edite ou exclua uma tarefa.

### Quando

A alteração for concluída.

### Então

O sistema deve registrar essa alteração em seu histórico.

---

## RF08 - Representação visual

### Dado

Que existam registros de conclusão.

### Quando

O usuário visualizar o calendário.

### Então

O sistema deve representar visualmente a evolução da rotina ao longo do tempo.

---

## RF09 - Navegação no calendário

### Dado

Que o calendário esteja sendo exibido.

### Quando

O usuário navegar entre meses ou anos.

### Então

O sistema deve apresentar corretamente o período selecionado.

---

## RF10 - Exclusão de dados

### Dado

Que existam dados armazenados.

### Quando

O usuário solicitar a exclusão de todos os dados e confirmar a ação.

### Então

Todos os dados armazenados devem ser removidos.

---

## RF11 - Notificações locais

### Dado

Que exista um lembrete configurado.

### Quando

Chegar o horário programado.

### Então

O sistema deve exibir uma notificação local ao usuário.

---

## RF12 - Configuração do feedback sonoro

### Dado

Que o usuário esteja nas configurações do aplicativo.

### Quando

O usuário alterar as configurações do feedback sonoro.

### Então

O sistema deve aplicar as configurações selecionadas.

---

## RF13 - Configuração das notificações

### Dado

Que o usuário esteja nas configurações do aplicativo.

### Quando

O usuário alterar as configurações das notificações locais.

### Então

O sistema deve aplicar as novas configurações.

---

## RF14 - Informações textuais

### Dado

Que o usuário esteja utilizando o aplicativo.

### Quando

Uma informação for apresentada por meio de elementos visuais.

### Então

O sistema deve fornecer uma descrição textual equivalente.

---

# 7. Glossário

| Termo  | Definição                                                                           |
| ------ | ----------------------------------------------------------------------------------- |
| Rotina | Conjunto único de tarefas cadastradas pelo usuário para acompanhamento diário.      |
| Tarefa | Atividade individual pertencente a uma rotina, que pode ser marcada como concluída. |
