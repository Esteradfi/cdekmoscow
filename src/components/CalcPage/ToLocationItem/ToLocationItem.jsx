import styles from "./ToLocationItem.module.css"
import {
    updateToLocation,
    updateToLocationName
} from "../../../redux/calc-reducer";

const ToLocationItem = (props) => {
    let state = props.el;

    const onNewToLocation = () => {
        let newFromLocation = state.city + ", " + state.region + ", " + state.country;
        props.dispatch(updateToLocationName(newFromLocation));
        props.dispatch(updateToLocation(state.code));
    }

  return (
      <div onClick={onNewToLocation} className={styles.searchResultItem}>
          {state.city + ", " + state.region + ", " + state.country}
      </div>
  )
}

export default ToLocationItem;