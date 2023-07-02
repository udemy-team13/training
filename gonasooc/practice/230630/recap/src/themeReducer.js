import React, {useReducer} from 'react'

const initialState = {
  theme: 'light'
}

const reducer = (state, action) => {
  switch(action.type) {
    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light'
      }
    default:
      return state;
  }
}

const ThemeSwitcher = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <div>
      <p>테마 색상: {state.theme}</p>
      <button onClick={() => dispatch({type: "TOOGLE_THEME"})}>토글(색상변경)</button>
    </div>
  )
}

export default ThemeSwitcher;




// import React, { useReducer } from 'react';

// const initialState = 'white';

// const reducer = (state, action) => {
//   console.log('action', action);
//   switch (action.type) {
//     case "WHITE":
//       return state = 'white';
//     case "BLACK":
//       return state = 'black';
//     default:
//       return state;
//   }
// }

// const ThemeReducer = () => {
//   const [theme, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <h1>테마</h1>
//       <p>값: {theme}</p>
    

//       <button onClick={() => { dispatch({type: 'WHITE'})}}>white theme</button>
//       <button onClick={() => { dispatch({type: 'BLACK'})}}>black theme</button>
//     </div>
//   )
// }

// export default ThemeReducer;