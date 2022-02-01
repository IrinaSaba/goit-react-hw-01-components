import PropTypes from "prop-types";
import s from '../Statistics/Statistics.module.scss'

const Statistics = ({title, stats}) => {
   // console.log(stats)
   return (
   <section className={s["statistics"]}> 
      {title && <h2 className={s["title"]}>{title}</h2>}
         <ul className={s["stat-list"]}>
            {stats.map(stat => (
               <li className={s["item"]} key={stat.id}>
                  <span className={s["label"]}>{stat.label}</span>
                  <span className={s["statistics"]}>{stat.percentage}%</span>
               </li>
            ))}
         </ul>   
 </section>)

};

Statistics.propTypes = {
   title: PropTypes.string,
   stats: PropTypes.arrayOf(
   PropTypes.shape({
     id: PropTypes.string,
     label: PropTypes.string,
     percentage: PropTypes.number,
   }).isRequired),
 };
 
 export default  Statistics;
