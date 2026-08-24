import { View } from 'react-native';
import {
    BodyContainer,
    BodyEntry,
    BodyInfo,
    BodyInfoSubtitle,
    BodySubtitle,
    BodyTitle,
    Container,
    HeaderContainer,
    Title,
} from './style';

type CardProps = {
    completedDays: number;
    totalDays: number;
    completionRate: number;
    completedTasks: number;
    totalTasks: number;
    longestSequence: number;
};

export default function Card({
    completedDays,
    totalDays,
    completionRate,
    completedTasks,
    totalTasks,
    longestSequence,
}: CardProps) {
    return (
        <Container>
            <HeaderContainer>
                <Title>Informações</Title>
            </HeaderContainer>
            <BodyContainer>
                <BodyEntry>
                    <View>
                        <BodyTitle>Completados</BodyTitle>
                        <BodySubtitle>Totais</BodySubtitle>
                    </View>

                    <View>
                        <BodyInfo>{completedDays} Dias</BodyInfo>
                        <BodyInfoSubtitle>{totalDays} Dias</BodyInfoSubtitle>
                    </View>
                </BodyEntry>

                <BodyEntry>
                    <View>
                        <BodyTitle>Taxa de conclusão</BodyTitle>
                        <BodySubtitle>Dias completos</BodySubtitle>
                    </View>

                    <View>
                        <BodyInfo>{completionRate}%</BodyInfo>
                    </View>
                </BodyEntry>

                <BodyEntry>
                    <View>
                        <BodyTitle>Tarefas Concluidas</BodyTitle>
                        <BodySubtitle>Total de tarefas</BodySubtitle>
                    </View>

                    <View>
                        <BodyInfo>{completedTasks}</BodyInfo>
                        <BodyInfoSubtitle>{totalTasks}</BodyInfoSubtitle>
                    </View>
                </BodyEntry>
                <BodyEntry $isLast>
                    <View>
                        <BodyTitle>Maior Sequência</BodyTitle>
                    </View>

                    <View>
                        <BodyInfo>{longestSequence} Dias</BodyInfo>
                    </View>
                </BodyEntry>
            </BodyContainer>
        </Container>
    );
}
