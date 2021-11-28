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
      <span className="span1">"</span>
      <InlineEditor2 value={quote} setValue={(qte) => userProfile.Quote = qte} userProfile={userProfile} />
      <span className="span1">"</span>
        {/* <span className="span1">{spanText}</span>
        <span className="span2">{spanText2}</span> */}
      </div>
    </div>
  );
}

export default UserfavoriteQuotedesktop;
