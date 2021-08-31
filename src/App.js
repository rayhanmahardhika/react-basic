import logo from './logo.svg';
import './App.css';
import ListUserReview from './Reviews';
import PropTypes from 'prop-types';

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
      <ProductInfo isDiscount="yes" discount={50} name="Youdora Dora" category="LEBARAN"/>
      <ListUserReview/>
    </div>
  );
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
  const { isDiscount, discount } = props
  if(isDiscount == "yes") {
    return (
      <p>Diskon {discount}% Off</p>
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
  const { category, name, isDiscount, discount } = props
  const price = 99999
  // pemanfaatan mapping array
  const benefits = ["Tidak kusut terkena air", "Bahan lebih halus", "Tidak gerah"]
  const listBenefits = benefits.map((itemBenefit) =>
    <li key={itemBenefit}>{itemBenefit}</li>
  )

  return (
    // harus diberikan DIV / wrapper sebagai parent
    <div>
      <div className="Deskripsi">
        <p className="Cate">{category}</p>
        <h1 className="Title">{name}</h1>
        <p className="Price">IDR {price}</p>
        <CheckDiscount discount={discount} isDiscount={isDiscount}/>
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

// propTypes agar props yang masuk sesuai yang diinginkan (seperti typescript)
CheckDiscount.propTypes = {
  discount: PropTypes.number.isRequired
};

export default App;
