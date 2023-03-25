import React from "react";
import "./MultiLineEditor.css";

const MultiLineEditor = ({ initialValue, label, onChange, isEnabled }) => {
    return (
        <div className="multi-line-editor-container">
            <div className={`multi-line-editor-item--${isEnabled ? "enabled" : "disabled"}`}>
                <textarea
                    className="multi-line-editor-textarea"
                    defaultValue={initialValue}
                    placeholder={label}
                    onChange={e => onChange(e.target.value)} />
                    {/* <input
                        type="text"
                        className="editor-input-text"
                        aria-label="Field name"
                        readOnly={!isEnabled}
                        isEnabled={isEnabled}
                        defaultValue={initialValue}
                        placeholder={label}
                        onChange={e => onChange(e.target.value)} /> */}
            </div>
        </div>
    );
}

export default MultiLineEditor;