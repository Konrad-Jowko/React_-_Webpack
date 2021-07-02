import React from 'react';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import Icon from '../Icon/Icon.js';
import {settings} from '../../data/dataStore';
import styles from './Column.scss';

class Column extends React.Component {
  state = {
    cards: this.props.cards || [],
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
  }

  addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          }
        ]
      }
    ));
  }

  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.title}
        <span class={styles.icon}><Icon name={this.props.icon} /></span>
        </h3>
        <div>
          {this.state.cards.map(({key, title}) => (
            <Card key={key} title={title} />
          ))}
        </div>
        <Creator text={settings.cardCreatorText} action={title => this.addCard(title)}/>
      </section>
    )
  }
}

export default Column;
