import PropTypes from "prop-types";
import s from '../TransactionHistory/TransactionHistory.module.scss'

const TransactionHistory = ({items}) => {
   // console.log(items)
   return (
      <table className={s["transaction-history"]}>
         <thead>
            <tr>
               <th>Type</th>
               <th>Amount</th>
               <th>Currency</th>
            </tr>
         </thead>
         {items.map(item => (
            <tbody key={item.id}>  
               <tr>
                  <td>{item.type}</td>
                  <td>{item.amount}</td>
                  <td>{item.currency}</td>
               </tr>
            </tbody>
      ))}
    </table>
   )
};

TransactionHistory.propTypes = {
   friends: PropTypes.arrayOf(
   PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
   }).isRequired),
 };
 
 export default TransactionHistory;