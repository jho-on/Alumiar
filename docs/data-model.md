# Modelo de Dados

## Entidades

### Tarefa (task)

Representa uma tarefa referente a rotina do usuario.

| Campo     | Tipo     | Descrição                 |
| --------- | -------- | ------------------------- |
| id        | UUID     | Identificador da tarefa.  |
| title     | TEXT     | Nome da tarefa.           |
| createdAt | DATETIME | Data de criação.          |
| updatedAt | DATETIME | Data da última alteração. |

---

### Tarefa Concluida (taskCompletion)

Representa a conclusao de uma tarefa da rotina em um determinado dia.

| Campo  | Tipo | Descrição                           |
| ------ | ---- | ----------------------------------- |
| id     | UUID | Identificador do registro.          |
| taskId | FK   | Referência para a tarefa concluida. |
| date   | DATE | Dia da conclusão.                   |

---

### Histórico da Rotina (routineHistory)

Representa alterações realizadas na rotina.

| Campo     | Tipo     | Descrição                  |
| --------- | -------- | -------------------------- |
| id        | UUID     | Identificador do registro. |
| taskId    | FK       | Tarefa afetada.            |
| type      | TEXT     | CREATE, UPDATE ou DELETE.  |
| timestamp | DATETIME | Momento da alteração.      |

## Relacionamentos

Task
1 ─────── N
TaskCompletion

Task
1 ─────── N
RoutineHistory
