import Navbar from "../Navbar/Navbar"
export default function Footer(){
  return(
    <footer className="fixed left-0 bottom-0 w-full box-border flex justify-center items-center p-2.5 bg-gray-800 text-white">
      <div>
        <Navbar/>
      </div>
    </footer>
  )
}