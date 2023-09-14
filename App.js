// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   createHttpLink,
// } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';

// // import Home from './';
// // import Detail from './';
// // import NoMatch from './';
// // import Login from './';
// // import Signup from './';
// // import Nav from './';
// // import { StoreProvider } from './';
// // import Success from './';
// // import OrderHistory from 

// const httpLink = createHttpLink({
//   uri: '/graphql',
// });

// const authLink = setContext((_, { headers }) => {
//   const token = localStorage.getItem('id_token');
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     },
//   };
// });

// const client = new ApolloClient({
//   link: authLink.concat(httpLink),
//   cache: new InMemoryCache(),
// });

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div>
//           <StoreProvider>
//             <Nav />
//             <Routes>
//               <Route 
//                 path="/" 
//                 element={<Home />} 
//               />
//               <Route 
//                 path="/login" 
//                 element={<Login />} 
//               />
//               <Route 
//                 path="/signup" 
//                 element={<Signup />} 
//               />
//               <Route 
//                 path="/success" 
//                 element={<Success />} 
//               />
//               <Route 
//                 path="/orderHistory" 
//                 element={<History />} 
//               />
//               <Route 
//                 path="/products/:id" 
//                 element={<Detail />} 
//               />
//               <Route 
//                 path="*" 
//                 element={<NoMatch />} 
//               />
//             </Routes>
//           </StoreProvider>
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

// export default App;