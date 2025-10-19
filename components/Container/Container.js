import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

export default function Container(props) {
  return (
    <>
      <Navbar />
      {props.children}
      <Footer />
    </>
  )
}

// ou bien

// export default function Container({children}) {

//     return (
//       <>
//           <Navbar />
//           {children}
//       </>
//     )
//   }
