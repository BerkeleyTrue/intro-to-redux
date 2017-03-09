/* eslint-disable max-len */
import React from 'react';
import dedent from 'dedent';
import {
  Appear,
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
import CodeSlide from 'spectacle-code-slide';
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
  primary: '#3D5B99',
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
          <Slide
            transition={ [] }
            >
            <Heading
              size={ 3 }
              textColor='secondary'
              >
              The Basics
            </Heading>
            <List>
              <List>
                <ListItem>
                  Actions
                </ListItem>
                <ListItem>
                  Reducer
                </ListItem>
                <ListItem>
                  Store
                </ListItem>
              </List>
            </List>
          </Slide>
          <Slide>
            <List>
              <ListItem>
                Concepts
              </ListItem>
              <List>
                <ListItem>
                  Dispatching
                </ListItem>
                <ListItem>
                  Data Flow
                </ListItem>
                <ListItem>
                  Connecting with React
                </ListItem>
              </List>
            </List>
          </Slide>
          <Slide>
            <Heading
              fit={ true }
              size={ 3 }
              textColor='seconday'
              >
              Basics
            </Heading>
          </Slide>
          <Slide>
            <Link
              href='http://redux.js.org/docs/basics/'
              target='_blank'
              >
              <Heading>
                Actions
              </Heading>
              <List textColor='secondary'>
                <ListItem>
                  Packets of Information
                </ListItem>
                <ListItem>
                  POJO
                </ListItem>
                <List>
                  <ListItem>
                    Type
                  </ListItem>
                  <ListItem>
                    payload: can be anything
                  </ListItem>
                </List>
              </List>
            </Link>
          </Slide>
          <CodeSlide
            code={ dedent`
              const action = {
                type: 'THIS_IS_MY_TYPE',
                payload: { data: 'dftba' }
              };
            `}
            lang='js'
            ranges={[
              { loc: [ 0, 255 ] },
              { loc: [ 1, 2 ] },
              { loc: [ 2, 3 ] }
            ]}
            transition={ [] }
          />
          <Slide>
            <Link
              href='http://redux.js.org/docs/basics/Actions.html'
              target='_blank'
              >
              <Heading>
                What is the purpose of an action?
              </Heading>
              <List textColor='secondary'>
                <ListItem>
                  Describe an event
                </ListItem>
                <ListItem>
                  Can be any event
                </ListItem>
                <ListItem>
                  Actions can be the cause of state change
                </ListItem>
              </List>
            </Link>
          </Slide>
          <Slide>
            <Heading
              size={ 2 }
              >
              State Change?
            </Heading>
            <Text>
              Reducers
            </Text>
            <List>
              <ListItem>
                Describes how actions can effect change
              </ListItem>
              <ListItem>
                Plain Old JavaScript Function (POJF)
              </ListItem>
              <Appear>
                <ListItem>
                  Called in response to actions
                </ListItem>
              </Appear>
              <Appear>
                <ListItem>
                  Called with current state and action
                </ListItem>
              </Appear>
            </List>
          </Slide>
          <CodeSlide
            code={dedent`
              // called for every action
              function myReducer(state, action) {
                // make sure state is defined
                state = state || { count: 0 };
                // all actions must have a type
                if (action.type === 'INC') {
                  const newState = {};
                  newState.count = state.count + 1;
                  return newState;
                } else {
                  return state;
                }
              }
            `}
            lang='jsx'
            ranges={[
              { loc: [ 0, 255 ], title: 'A Reducer function' },
              { loc: [ 0, 2 ] },
              { loc: [ 2, 4 ] },
              { loc: [ 4, 6 ] },
              { loc: [ 5, 9 ] },
              { loc: [ 10, 11 ] }
            ]}
            transition={ [] }
          />
          <Slide>
            <Heading>
              General Rules
            </Heading>
            <List>
              <ListItem>
                Never mutate state
              </ListItem>
              <ListItem>
                Create new state objects
              </ListItem>
              <ListItem>
                Always return state
              </ListItem>
              <ListItem>
                Do not assume the state shape
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={dedent`
              const initialState = {
                count: 0,
                showModal: false
              };
              // using ES2015 default params
              function myReducer(state = initialState, action) {
                if (action.type === 'INC') {
                  // do not assume the state shape
                  const newState = Object.assign({}, state);
                  newState.count= state.count + 1;
                  return newState;
                }
                if (action.types === 'DEC') {
                  const newState = Object.assign({}, state);
                  newState.count= state.count - 1;
                  return newState;
                }
                if (action.type === 'SHOW_MODAL') {
                  return Object.assign({}, state, {
                    showModal: true
                  });
                }
                if (action.type === 'HIDE_MODAL') {
                  // use spread operator
                  return {
                    ...state,
                    showModal: false
                  };
                }
                // always return state
                return state;
              }
            `}
            lang='jsx'
            ranges={[
              { loc: [ 0, 255], title: 'Better Reducer' },
              { loc: [ 0, 4 ] },
              // { loc: [ 2, 3 ] },
              { loc: [ 4, 6 ] },
              { loc: [ 6, 12 ] },
              { loc: [ 12, 17 ] },
              { loc: [ 17, 22 ] },
              { loc: [ 22, 29 ] },
              { loc: [ 29, 31 ] }
            ]}
            transition={ [] }
          />
          <Slide>
            <Heading>
              Object.assign
            </Heading>
            <List>
              <ListItem>
                Create a clone of an object.
              </ListItem>
              <ListItem>
                New object will have all the properties of the old.
              </ListItem>
              <ListItem>
                Modify this only.
              </ListItem>
              <ListItem>
                First object must be a new empty obect.
              </ListItem>
              <ListItem>
                Every other object will be cloned onto the new one
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Link
              href='http://redux.js.org/docs/basics/Reducers.html'
              >
              <Heading>
                combineReducers
              </Heading>
              <List textColor='secondary'>
                <ListItem>
                  Create multiple reducers
                </ListItem>
                <ListItem>
                  Each representing some discrete part of your app
                </ListItem>
                <ListItem>
                  Produce one reducer function
                </ListItem>
              </List>
            </Link>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/multi-reducer.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 255], title: 'combineReducers' },
              { loc: [ 0, 1 ] },
              { loc: [ 2, 13 ] },
              { loc: [ 14, 23 ] },
              { loc: [ 29, 34 ] },
              { loc: [ 24, 29 ] }
            ]}
            transition={ [] }
          />
          <Slide>
            <Heading>
              creatStore(reducer) => store
            </Heading>
            <List>
              <ListItem>
                Holds application state;
              </ListItem>
              <ListItem>
                Access to state via getState() method
              </ListItem>
              <ListItem>
                actions => reducer => store => newState
              </ListItem>
              <ListItem>
                Add store listeners
              </ListItem>
              <ListItem>
                unregister listeners
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={dedent`
          import { createStore } from 'redux'

          import mainReducer from './combinedCountAndModalReducer';

          const store = createStore(mainReducer);
          const unlisten = store.subscribe(() => {
            // prints whole state on every state change
            console.log(store.getState());
          });

          store.dispatch({ type: 'INC' });
          store.dispatch({ type: 'OPEN_MODAL' });
            `}
            lang='jsx'
            ranges={[
              { loc: [ 0, 255], title: 'createStore' },
              { loc: [ 0, 1 ] },
              { loc: [ 2, 3 ] },
              { loc: [ 4, 5 ] },
              { loc: [ 5, 9 ] },
              { loc: [ 10, 12 ] }
            ]}
            transition={ [] }
          />
          <Slide>
            <Heading>
              What about React?
            </Heading>
            <List>
              <ListItem>
                `connect` connects redux to react components
              </ListItem>
              <ListItem>
                `Provider` injects store into react app
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>
              connect
            </Heading>
            <Link
              href='https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options'
              >
              <List textColor='secondary'>
                <ListItem>
                  mapStateToProps
                </ListItem>
                <ListItem>
                  mapDispatchToProps
                </ListItem>
                <ListItem>
                  connect is a function that returns another function
                </ListItem>
                <ListItem>
                  pass in your component
                </ListItem>
                <ListItem>
                  HOC power
                </ListItem>
              </List>
            </Link>
          </Slide>
          <Slide>
            <Heading>
              container/presenter pattern
            </Heading>
            <List>
              <ListItem>
                Container => All the logic
              </ListItem>
              <ListItem>
                Presenter => Displays UI
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>
              Higher Order Component
            </Heading>
            <List>
              <ListItem>
                A component that wraps another component
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/connect.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 255], title: 'connect' },
              { loc: [ 1, 2 ] },
              { loc: [ 28, 32 ] },
              { loc: [ 3, 8 ] },
              { loc: [ 9, 14 ] },
              { loc: [ 28, 32 ] },
              { loc: [ 33, 34 ] },
              { loc: [ 15, 27 ] },
              { loc: [ 19, 20 ] },
              { loc: [ 22, 23 ] }
            ]}
            transition={ [] }
          />
          <Slide>
            <Heading>
              Things to remember
            </Heading>
            <List>
              <ListItem>
                mapStateToProps must return an object
              </ListItem>
              <ListItem>
                mapDispatchToProps must return an object
              </ListItem>
            </List>
          </Slide>
          <Slide>
            <Heading>
              Provider
            </Heading>
            <List>
              <ListItem>
                Adds store to react context
              </ListItem>
              <ListItem>
                makes connect work
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={ require('raw!../assets/provider.example') }
            lang='jsx'
            ranges={[
              { loc: [ 0, 255], title: 'Provider' },
              { loc: [ 0, 1] },
              { loc: [ 2, 8 ] },
              { loc: [ 9, 20 ] }
            ]}
            transition={ [] }
          />
          <Slide>
            <Heading>
              Helpers
            </Heading>
            <List>
              <ListItem>
                action creators
              </ListItem>
              <ListItem>
                mapDispatchToProps object form
              </ListItem>
            </List>
          </Slide>
          <CodeSlide
            code={dedent`
              const openModalActionCreator = () => {
                return { type: 'OPEN_MODAL' };
              };

              const mapDispatchToProps = {
                openModal: openModalActionCreator
              };

              const connectComponent = connect(
                mapStateToProps,
                mapDispatchToProps
              );
            `}
            lang='jsx'
            ranges={[
              { loc: [ 0, 255 ], title: 'helpers'},
              { loc: [ 0, 3] },
              { loc: [ 4, 7 ] },
              { loc: [ 8, 12 ] }
            ]}
            transition={ [] }
          />
          <Slide>
            <Heading
              fill={ true }
              textColor='secondary'
              >
              Questions?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
