import React from 'react';
import PropTypes from 'prop-types';
import Hero from '../Hero/Hero.js';
import Column from '../Column/ColumnContainer.js';
import ReactHtmlParser from 'react-html-parser';
import Creator from '../Creator/Creator.js';
import Container from '../Container/Container.js';
import styles from './List.scss';
import {settings} from '../../data/dataStore';

class List extends React.Component {
    static propTypes = {
      title: PropTypes.node.isRequired,
      description: PropTypes.node,
      columns: PropTypes.array,
      image: PropTypes.string,
      addColumn: PropTypes.func,
    }

  static defaultProps = {
    description: settings.defaultListDescription,
  }

  render() {
    const {title, image, description, columns, addColumn} = this.props;

    console.log(this.props);

    return (
      <Container>
        <section className={styles.component}>
          <Hero titleText={title} imgSrc={image} />
          <div className={styles.description}>
            {ReactHtmlParser(description)}
          </div>
          <div className={styles.columns}>
            {columns.map(columnData => (
              <Column key={columnData.id} {...columnData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.columnCreatorText} action={addColumn}/>
          </div>
        </section>
      </Container>
    );
  }
}

export default List;
