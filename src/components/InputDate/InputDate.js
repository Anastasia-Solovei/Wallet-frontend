// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

// const useStyles = makeStyles(theme => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//   },
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export default function NativeSelects() {
//   const classes = useStyles();
//   const [state, setState] = React.useState({
//     month: '',
//     year: 'hai',
//   });

//   const handleChangeMonth = event => {
//     const month = event.target.name;
//     setState({
//       ...state,
//       [month]: event.target.value,
//     });
//   };

//   const handleChangeYear = event => {
//     const year = event.target.name;
//     setState({
//       ...state,
//       [year]: event.target.value,
//     });
//   };

//   return (
//     <div>
//       <div>
//         <FormControl variant="filled" className={classes.formControl}>
//           <InputLabel htmlFor="filled-age-native-simple">Month</InputLabel>
//           <Select
//             native
//             value={state.month}
//             onChange={handleChangeMonth}
//             inputProps={{
//               month: 'age',
//               id: 'filled-age-native-simple',
//             }}
//           >
//             <option aria-label="None" value="" />
//             <option value={10}>Ten</option>
//             <option value={20}>Twenty</option>
//             <option value={30}>Thirty</option>
//           </Select>
//         </FormControl>
//       </div>
//       <div>
//         <FormControl variant="filled" className={classes.formControl}>
//           <InputLabel htmlFor="filled-age-native-simple">Month</InputLabel>
//           <Select
//             native
//             value={state.year}
//             onChange={handleChangeYear}
//             inputProps={{
//               name: 'age',
//               id: 'filled-age-native-simple',
//             }}
//           >
//             <option aria-label="None" value="" />
//             <option value={10}>Ten</option>
//             <option value={20}>Twenty</option>
//             <option value={30}>Thirty</option>
//           </Select>
//         </FormControl>
//       </div>
//     </div>
//   );
// }
