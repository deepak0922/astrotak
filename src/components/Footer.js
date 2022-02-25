import home from '../assets/home.png';
import talk from '../assets/talk.png';
import reports from '../assets/reports.png';
import chat from '../assets/chat.png';
import ask from '../assets/ask.png';
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <ul>
        <li>
          <img src={home} alt="home" className="home-icon" />
        </li>
        <li>
          <img src={talk} alt="talk" className="talk-icon" />
        </li>
        <li>
          <img src={ask} alt="ask" className="ask-icon" />
        </li>
        <li>
          <img src={reports} alt="reports" className="reports-icon" />
        </li>
        <li>
          <img src={chat} alt="chat" className="reports-icon" />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
