// This function is used to change a single boolean prop inside the state.

export default function toggleProp(stateSetter, prop) {

console.log(prop)

    return stateSetter(prevState => {
        return {
          ...prevState,
          [prop]: !prevState.prop
        };
      })
}