import './App.css';

// list item user reviews
// nama nya harus sama seperti di bagian export default karena ini sebagai fungsi utama di komponen ini
function Reviews() {
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
  
    // pada proses iterasi jmapping harus diberikan keyprops agar bisa digubakan untuk melempar ke views lain
    const listReview = users.map((user) => 
        <div key={user.id} className="Item">
            <img src={user.image}/>
            <div className="User">
                <h3>{user.name}</h3>
                <p>{user.review}</p>
            </div>
        </div>
    )
  
    return (
      <div className="Review-box">
        <h2>Reviews</h2>
        {listReview}  
      </div>
    )
  }

export default Reviews;