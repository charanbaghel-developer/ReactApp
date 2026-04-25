import logo1 from './images/icon-facebook.gif';
import logo2 from './images/icon-twitter.gif';
import logo3 from './images/icon-youtube.gif';
import FImages from './images/bg-footer.gif';
function Footer()
{
    return(
        <>
        <div id="footer">
  <div>
    <div id="connect"> <a href="#"><img src={logo1} alt="" /></a> <a href="#"><img src={logo2} alt="" /></a> <a href="#"><img src={logo3} alt="" /></a> </div>
    <div class="section">
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="admissions.html">Admissions</a></li>
        <li><a href="training-courses.html">Training Courses</a></li>
        <li><a href="career.html">Career</a></li>
        <li class="last"><a href="contact-us.html">Contact us</a></li>
      </ul>
      <p>Copyright &copy; <a href="#">Domain Name</a> - All Rights Reserved | Template By <a target="_blank" href="http://www.freewebsitetemplates.com/">FreeWebsiteTemplates.com</a></p>
    </div>
  </div>
</div>
        </>
    );
}
export default Footer;