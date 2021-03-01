import React from 'react'
import './stylesheets/resumePDF.css'
import PDFViewer from './PDFViewer'
import PDFJsBackend from './pdfjs'

function ResumePDF() {

    return (
        <div className={"resume-wrapper"}>
            <PDFViewer backend={PDFJsBackend}
                       src={'/Resume.pdf'} />
        </div>
    )
}

export default ResumePDF