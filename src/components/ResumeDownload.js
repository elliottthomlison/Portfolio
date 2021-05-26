import React from 'react';
import FileSaver from 'file-saver';

export default function ResumeDownload() {
  return (
    FileSaver.saveAs(
      process.env.PUBLIC_URL + "/public/Thomlison, Elliott - Resume.pdf",
      "Thomlison, Elliott - Resume.pdf")
  )
}