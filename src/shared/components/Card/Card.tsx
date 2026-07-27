import { View } from 'react-native';
import {
    BodyContainer,
    BodyEntry,
    BodyInfo,
    BodySubtitle,
    BodyTitle,
    Container,
    HeaderContainer,
    Title,
} from './style';

export default function Card() {
    return (
        <Container>
            <HeaderContainer>
                <Title>Informações</Title>
            </HeaderContainer>
            <BodyContainer>
                <BodyEntry>
                    <View>
                        <BodyTitle>Titulo</BodyTitle>
                        <BodySubtitle>Subtitulo</BodySubtitle>
                    </View>

                    <View>
                        <BodyInfo>Info</BodyInfo>
                        <BodySubtitle>SubInfo</BodySubtitle>
                    </View>
                </BodyEntry>
                <BodyEntry $isLast>
                    <View>
                        <BodyTitle>Titulo</BodyTitle>
                        <BodySubtitle>Subtitulo</BodySubtitle>
                    </View>

                    <View>
                        <BodyInfo>Info</BodyInfo>
                        <BodySubtitle>SubInfo</BodySubtitle>
                    </View>
                </BodyEntry>
            </BodyContainer>
        </Container>
    );
}
