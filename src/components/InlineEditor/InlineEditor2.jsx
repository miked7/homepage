import React, { useState, useEffect, useRef } from "react";
import useKeyPress from "../../hooks/useKeyPress";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import "./InlineEditor2.css";
import EditIcon from './../../static/img/edit-16.png';
import EditableStateIndicator from '../EditableStateIndicator/EditableStateIndicator';

const InlineEditor2 = ({ value, setValue, userProfile }) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const wrapperRef = useRef(null);
  const textRef = useRef(null);
  const inputRef = useRef(null);
  const enter = useKeyPress("Enter");
  const esc = useKeyPress("Escape");
  // check to see if the user clicked outside of this component
  useOnClickOutside(wrapperRef, () => {
    if (isInputActive) {
      setValue(inputValue);
      setIsInputActive(false);
    }
  });
  // focus the cursor in the input field on edit start
  useEffect(() => {
    if (isInputActive) {
      inputRef.current.focus();
    }
  }, [isInputActive]);
  useEffect(() => {
    if (isInputActive) {
      // if Enter is pressed, save the text and case the editor
      if (enter) {
        setValue(inputValue);
        setIsInputActive(false);
      }
      // if Escape is pressed, revert the text and close the editor
      if (esc) {
        setInputValue(value);
        setIsInputActive(false);
      }
    }
  }, [enter, esc]); // watch the Enter and Escape key presses
  useEffect(() => {
    setInputValue(value);
  }, [value]);
  return (
    <span className="inline-text" ref={wrapperRef}>
      <span
        ref={textRef}
        onClick={() => {
            if (userProfile.IsEditable) {
                setIsInputActive(true);
            }
        }}
        className={`inline-text_copy inline-text_copy--${!isInputActive ? userProfile.IsEditable ? "active" : "active--readonly" : "hidden"}`}>
        {value}
        { userProfile.IsEditable ? <img className="edit-icon" src={EditIcon} /> : <p hidden/> }
      </span>
      <input
        ref={inputRef}
        className="input-text"
        // set the width to the input length multiplied by the x height
        // it's not quite right but gets it close
        style={{ width: ( wrapperRef ? wrapperRef.width : 1 ) + "px" }}
        ////style={{ width: (inputValue ? Math.ceil(inputValue.length * 0.85) : 10) + "ex" }}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        className={`inline-text_input inline-text_input--${isInputActive ? "active" : "hidden"}`}
      />
    </span>
  );
}

export default InlineEditor2;