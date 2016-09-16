import React from 'react';
import {
  Deck,
  Heading,
  Link,
  List,
  ListItem,
  Slide,
  Spectacle,
  Text
} from 'spectacle';
import preloader from 'spectacle/lib/utils/preloader';
// import CodeSlide from 'spectacle-code-slide';
import createTheme from 'spectacle/lib/themes/default';
/* eslint-disable import/named */
import { user, title, repoName } from '../slide-info';
/* eslint-enable import/named */

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const images = {};
const reactBlue = '#00d8ff';
const theme = createTheme({
  primary: '#222',
  secondary: reactBlue,
  tertiary: 'white',
  quartenary: reactBlue
});

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck
          transition={['zoom', 'slide']}
          transitionDuration={ 500 }
          >
          <Slide
            bgColor='primary'
            transition={['zoom']}
            >
            <Heading
              caps={ true }
              fit={ true }
              lineHeight={ 1 }
              size={ 1 }
              >
              { title }
            </Heading>
          </Slide>
          <Slide
            bgColor='secondary'
            >
            <Link
              href={ `https://github.com/${ user }/${ repoName }` }
              target='_blank'
              >
              <Text
                bold={ true }
                caps={ true }
                >
                View on Github:
              </Text>
              <Heading
                caps={ true }
                fit={ true }
                size={ 1 }
                >
                { user }/{ repoName }
              </Heading>
            </Link>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'
              >
              Who I Am
            </Heading>
            <List
              bold={ true }
              caps={ true }
              >
              <ListItem>
                Developer at Free Code Camp
              </ListItem>
              <ListItem>
                Teacher at Real World React
              </ListItem>
              <ListItem>
                @BerkeleyTrue on the internet
              </ListItem>
              <ListItem>
                RxJS Advocate
              </ListItem>
              <ListItem>
                Self Taught Programming for over two years
              </ListItem>
              <ListItem>
                Fellow Human
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading
              textColor='secondary'
              textSize={ 60 }
              >
              Questions?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
