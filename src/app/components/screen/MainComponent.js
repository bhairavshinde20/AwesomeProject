// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { View, Text } from "react-native";
// import { fetchDataStart, fetchDataSuccess, fetchDataFailure ,fetchData} from "../redux/reducer/DataFetch";

// const MainComponent = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const { data, loading, error } = useSelector((state) => state);

//   useEffect(() => {
//     const fetch = async () => {
//       dispatch(fetchDataStart());
//       try {
//         const data = await fetchData(id);
//         dispatch(fetchDataSuccess(data));
//       } catch (error) {
//         dispatch(fetchDataFailure(error.message));
//       }
//     };
//     fetch();
//   }, [dispatch]);

//   return (
//     <View>
//       {loading ? (
//         <Text style={{color:"black"}}>Loading...</Text>
//       ) : error ? (
//         <Text style={{color:"black"}}>{error}</Text>
//       ) : (
//         <Text style={{color:"black"}}>{data.title}</Text>
//       )}
//     </View>
//   );
// };

// export default MainComponent;