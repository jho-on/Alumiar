import {
    NewTaskName,
    OldTaskName,
    Name,
    UpdateContainer,
    LabelTask,
    InfoLineContainer,
} from './style';

type TaskInfoProps =
    | {
          type: 'created' | 'deleted';
          taskName: string;
      }
    | {
          type: 'updated';
          oldTaskName: string;
          newTaskName: string;
      };

export default function TaskName(props: TaskInfoProps) {
    if (props.type === 'updated') {
        return (
            <UpdateContainer>
                <InfoLineContainer>
                    <LabelTask>De:</LabelTask>
                    <OldTaskName>&quot;{props.oldTaskName}&quot;</OldTaskName>
                </InfoLineContainer>
                <InfoLineContainer>
                    <LabelTask>Para:</LabelTask>
                    <NewTaskName>&quot;{props.newTaskName}&quot;</NewTaskName>
                </InfoLineContainer>
            </UpdateContainer>
        );
    }

    return <Name>&quot;{props.taskName}&quot;</Name>;
}
