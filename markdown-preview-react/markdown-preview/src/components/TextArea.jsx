import React from 'react'
// import bootstrap from 'bootstrap'
// import * from 'bootstrap/dist/bootstrap.min.css'
// import TextArea from './components/TextArea'

export default function TextArea() {
    return (
        <div className="container">
            <textarea name="textarea_editor" id="editor" cols="30" rows="10"></textarea>
            <textarea name="textarea_preview" id="preview" cols="30" rows="10"></textarea>
        </div>
    )
}
