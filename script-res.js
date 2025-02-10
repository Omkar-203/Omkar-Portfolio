function downloadPDF() {
    const link = document.createElement("a");//This creates an anchor (<a>) tag in JavaScript
   link.href= "Omkar-resume.pdf"
    link.download = "Omkar-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function openPreview() {
    document.getElementById("resumeModal").style.display = "block";
}

function closePreview() {
    document.getElementById("resumeModal").style.display = "none";
}





