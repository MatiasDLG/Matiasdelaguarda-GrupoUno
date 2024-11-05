import Navbar from "../Navbar/Navbar"

export default function Header(){
  const Logo = '/tecomline_logo.png'
  return(
    <header className="top-0 mx-auto max-w pb-[150px]">
      <div className="fixed left-0 w-full box-border flex justify-between items-center py-1 px-20 bg-gray-800 ">
        <div><img src={Logo} alt="Logo Principal" width="140px" height="auto" /></div>
        <div><Navbar /></div>
      </div>
    </header>   
  )
} 