
import img2 from "./images/model2.jpg";
import React, { useEffect, useState } from "react";
function Abouts()
{
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
   useEffect(() => {
    fetch("https://localhost:7224/api/Membe/GetAllMembers")
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
    return(
        <>
        <div id="content">
  <div>

    <h3>About</h3>
    <ul>
        {users.map(user => (
          <li key={user.memberId}>
            {user.firstName} - {user.lastName}
          </li>
        ))}
      </ul>
    {/* <div class="first"> <a href="#"><img src={img2} alt="" /></a>
      <h2>We Have Free Templates for Everyone</h2>
      <p>Our website templates are created with inspiration, checked for quality and originality and meticulously sliced and coded. What's more, they're absolutely free! You can do a lot with them. You can modify them. You can use them to design websites for clients, so long as you agree with the Terms of Use. You can even remove all our links if you want to.</p>
    </div>
    <div>
      <h2>We Have More Templates for You</h2>
      <p>Looking for more templates? Just browse through all our Free Website Templates and find what you're looking for. But if you don't find any website template you can use, you can try our Free Web Design service and tell us all about it. Maybe you're looking for something different, something special. And we love the challenge of doing something different and something special.</p>
    </div>
    <div>
      <h2>Be Part of Our Community</h2>
      <p>If you're experiencing issues and concerns about this website template, join the discussion on our forum and meet other people in the community who share the same interests with you.</p>
    </div>
    <div>
      <h2>Template details</h2>
      <p>Version 4</p>
      <p>Website Template details, discussion and updates for this Aviation School template. Website Template design by Free Website Templates. Please feel free to remove some or all the text and links of this page and replace it with your own About content.</p>
    </div> */}
  </div>
</div>
        </>
    );
}
export default Abouts;