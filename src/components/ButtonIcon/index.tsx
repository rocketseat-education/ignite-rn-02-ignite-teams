import { TouchableOpacityProps } from 'react-native';

import { Container, Icon } from './styles';

type Props = TouchableOpacityProps & {

}

export function ButtonIcon({}: Props) {
  return(
    <Container>
      <Icon name="home" type="PRIMARY" />
    </Container>
  );
}