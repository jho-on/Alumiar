import TaskName from '../TaskName/TaskName';
import TimeLine from '../TimeLine';
import {
    CardContainer,
    Container,
    Date,
    EntryContainer,
    Icon,
    InfoContainer,
    Time,
    Title,
} from './style';

type HistoryEntryProps =
    | {
          type: 'created';
          date: string;
          time: string;
          taskName: string;
      }
    | {
          type: 'deleted';
          date: string;
          time: string;
          taskName: string;
      }
    | {
          type: 'updated';
          date: string;
          time: string;
          oldTaskName: string;
          newTaskName: string;
      };

const historyTypeMap = {
    created: {
        icon: PlusIcon,
        title: 'Criou a Tarefa',
    },
    updated: {
        icon: PenIcon,
        title: 'Editou a Tarefa',
    },
    deleted: {
        icon: BinIcon,
        title: 'Removeu a Tarefa',
    },
} as const;

import BinIcon from '@/../assets/bin.svg';
import PenIcon from '@/../assets/pen.svg';
import PlusIcon from '@/../assets/plus.svg';

export default function HistoryEntry(props: HistoryEntryProps) {
    const { icon: IconComponent, title } = historyTypeMap[props.type];

    return (
        <Container>
            <Date>{props.date}</Date>

            <InfoContainer>
                <TimeLine />

                <EntryContainer>
                    <Icon>
                        <IconComponent width={32} height={32} />
                    </Icon>
                    <CardContainer>
                        <Time>{props.time}</Time>
                        <Title>{title}</Title>
                        <TaskName {...props} />
                    </CardContainer>
                </EntryContainer>
            </InfoContainer>
        </Container>
    );
}
