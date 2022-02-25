import "./MidSec.css";
import quesi from "../assets/quesi.png";

function MidSec() {
  return (
    <div>
      <div className="wallet-sec">
        <ul>
          <li>
            <h5>Wallet Balance : Rs 0</h5>
          </li>
          <li>
            <button>Add Money</button>
          </li>
        </ul>
      </div>
      <div className="ask-ques">
        <h5>Ask a Question</h5>
        <p>
          Seek accurate answers to your life problems and get guidance towards
          the right path. Whether the problem is related to love, self, life,
          business, money, education or work, our astrologers will do an indepth
          study of your birth chart to provide personalized responses along with
          remedies.
        </p>
      </div>
      <div className="ques-cat">
        <h5>Choose Category</h5>
        <select name="category" id="category">
          <option value="love">Love</option>
          <option value="love">Love</option>
          <option value="love">Love</option>
        </select>
        <textarea
          name="type-ques"
          id="type-ques"
          placeholder="Type a question here"
          cols="35"
          rows="4"
        />
      </div>
      <div className="ideas">
        <h5>Ideas what to Ask(Select Any)</h5>
        <li>
          <img src={quesi} alt="" />
          When is the right for me to introduce my boyfriend/girlfriend?
        </li>
        <hr />
        <li>
          <img src={quesi} alt="" />
          Doubtful about taking my relationship to next level?
        </li>
        <hr />
        <li>
          <img src={quesi} alt="" />
          How will I meet my potential life partner?
        </li>
        <hr />
      </div>
      <div className="wallet-sec2">
        <ul>
          <li>
            <h5>Rs 150 (1 Question on Love)</h5>
          </li>
          <li>
            <button>Ask Now</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MidSec;
