import React from "react";
import "./Editor.css";

const Editor = ({ initialValue, label, onChange, isEnabled }) => {
    return (
        <div className="editor-container">
            <div className={`editor-item--${isEnabled ? "enabled" : "disabled"}`}>
                <input
                    type="text"
                    className="editor-input-text"
                    aria-label="Field name"
                    readOnly={!isEnabled}
                    isEnabled={isEnabled}
                    defaultValue={initialValue}
                    placeholder={label}
                    onChange={e => onChange(e.target.value)} />
            </div>
        </div>
    );
}

export default Editor;