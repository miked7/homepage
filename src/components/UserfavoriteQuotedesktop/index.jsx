import React, { useEffect, useState } from "react";
import InlineEditor2 from "../InlineEditor/InlineEditor2"
import "./UserfavoriteQuotedesktop.css";

function UserfavoriteQuotedesktop(props) {
  const { userProfile } = props;
  const [quote, setQuote] = useState(userProfile.Quote);

  useEffect(() => {
    userProfile.addListener(() => {
      setQuote(userProfile.Quote);
    })
  }, []);

  return (
    <div className="quote">
      <div className="quote-text bio-quote">
        { (quote !== "") || userProfile.IsEditable ? <span className="quote-span">"</span> : <p hidden/> }
        <InlineEditor2 value={quote} defaultValue="click to edit quote" setValue={(qte) => { userProfile.Quote = qte; userProfile.save(); } } userProfile={userProfile} />
        { (quote !== "") || userProfile.IsEditable ? <span className="quote-span">"</span> : <p hidden/> }
          {/* <span className="quote-span">{spanText}</span>
          <span className="span2">{spanText2}</span> */}
      </div>
    </div>
  );
}

export default UserfavoriteQuotedesktop;
