import MenuItems from "./MenuItems";  

function Header(){
  return <header>
    <div className = "logo">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSka-Fo_tI4CeZwF17m4LtdegrsnmFUdcpuiw&s"alt=""width="50px"height="50px"/>
    </div>
    <MenuItems/>
  </header>
}
export default Header