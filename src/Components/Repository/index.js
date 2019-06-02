import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container, Name, Description, Stats, Stat, StatCount, Refresh, RefreshText } from './styles';

export default function Repository({ data, onRefresh }) {
  console.log(data);
  return (
    <Container>
      <Name>{data.item.name}</Name>
      <Description>{data.item.description}</Description>
      <Stats>
        <Stat>
          <StatCount>
            <Icon name="star" size={16} color="#333" />
            {data.item.stars}
          </StatCount>
          <StatCount>
            <Icon name="code-fork" size={16} color="#333" />
            {data.item.forks}
          </StatCount>
        </Stat>
      </Stats>
      <Refresh onPress={onRefresh}>
        <Icon name="refresh" color="#7159c1" size={16} />
        <RefreshText>Atualizar</RefreshText>
      </Refresh>
    </Container>
  );
}
