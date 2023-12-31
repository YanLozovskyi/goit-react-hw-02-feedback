import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, children }) => (
  <section className={css.section}>
    <div className={css.container}>
      {title && <h2 className={css.title}>{title}</h2>}
      {children}
    </div>
  </section>
);

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
