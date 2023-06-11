import styles from "./FromLocationItem.module.css"
import {updateFromLocation, updateFromLocationName} from "../../../redux/calc-reducer";

const FromLocationItem = (props) => {
    let state = props.el;

    const onNewFromLocation = () => {
        let newFromLocation = state.city + ", " + state.region + ", " + state.country;
        props.dispatch(updateFromLocationName(newFromLocation));
        props.dispatch(updateFromLocation(state.code));
    }

  return (
      <div onClick={onNewFromLocation} className={styles.searchResultItem}>
          {state.city + ", " + state.region + ", " + state.country}
      </div>
  )
}

export default FromLocationItem;