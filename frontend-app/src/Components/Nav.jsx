const Nav = () => {
  return (
    <nav style={{ backgroundColor: "goldenrod", height: "99px" }}>
      <ol style={ListStylings.orderList}>
        <li style={ListStylings.list}>Home</li>
        <li style={ListStylings.list}>Login</li>
        <li style={ListStylings.list}>Register</li>
        <li style={ListStylings.list}>About</li>
      </ol>
    </nav>
  );
};

//declaring Stylings
const ListStylings={
    list:{
        backgroundColor:"powderblue",
        padding:"10px 30px",
        fontSize:"22px",
        fonrStyle:"italic",
        fontWeight:"bold"


    },
    orderList:{
        display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          height: "80px",
          listStyle: "none"
  
    }
}

export default Nav;