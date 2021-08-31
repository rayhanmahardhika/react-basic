import logo from './logo.svg';
import './App.css';

function App() {

  const userLogged = "Rayhan"

  // JSX ini bisa untuk menyelipkan HTML sehingga bisa untuk membuat SPA (single page app)
  const userLoggedJSX = <strong> BWA for Future! </strong>

  

  return (
    // harus diberikan DIV / wrapper sebagai parent
    <div className="Parentbox">
      {/* pemanggilan component */}
      <ProductImage/>
      {/* penerapan conditional rendering */}
      <ProductInfo isDiscount="yes" name="Youdora Dora" category="LEBARAN"/>
      <ListUserReview/>
    </div>
  );
}

// list item user reviews
function ListUserReview() {
  // menggunakan data dummy JSON
  const users = [
    {
      "id":1,
      "name":"Rayhan Original",
      "image":"https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg",
      "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      "id":2,
      "name":"Rayhan 1",
      "image":"https://images.pexels.com/photos/1080213/pexels-photo-1080213.jpeg?cs=srgb&dl=pexels-jo%C3%A3o-jesus-1080213.jpg&fm=jpg",
      "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      "id":3,
      "name":"Rayhan 2",
      "image":"https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      "review":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]

  const listReview = users.map((user) => 
    <UserReview uname={user.name} image={user.image} review={user.review}/>
  )

  return (
    <div className="Review-box">
      <h2>Reviews</h2>
      {listReview}  
    </div>
  )
}

// item user review
function UserReview(props) {
  const {uname, image,  review} = props

  return (
    <div className="Item">
      <img src={image}/>
      <div className="User">
        <h3>{uname}</h3>
        <p>{review}</p>
      </div>
    </div>
  )
}


function ProductImage() {
  return (
    <div className="Foto">
        <img src="Rayhan-Red.png"></img>
      </div>
  );
}

// fungsi conditional rendering
function CheckDiscount(props) {
  const { isDiscount } = props
  if(isDiscount == "yes") {
    return (
      <p>Diskon 50% Off</p>
    )
  } else if(isDiscount == "coming") {
    return (
      <p>Akan ada Discount ... !</p>
    )
  } else {
    return (
      <p>Belum ada Discount!</p>
    )
  }
}

// memberikan parameter props yang nanti diisi di saat pemanggilan fungsi di HTML
function ProductInfo(props) {

  // menggunakan object destruction
  const { category, name, isDiscount } = props
  const price = 99999
  // pemanfaatan mapping array
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak gerah"]
  const listBenefits = benefits.map((itemBenefit) =>
    <li>{itemBenefit}</li>
  )

  return (
    // harus diberikan DIV / wrapper sebagai parent
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount isDiscount={isDiscount}/>
        <p className="Info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
        {/* penerapan mapping array  */}
        <ul>
          {listBenefits}
        </ul>
        {/* pemanfaatan passing argument menggunkaan event handlers */}
        <a onClick={(e) => AddCart(name, e)} href="#">Add to chart!</a>
      </div>
    </div>
  );
}

function AddCart(e) {
  console.log('Membeli produk ' + e)
}

export default App;
