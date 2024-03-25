'use client'

export default function DownloadCV() {
    const handleDownload = () => {
        const pdfUrl = "/Rajan.pdf";
        window.open(pdfUrl, '_blank');
    };

    return (
        <button
            className="text-white bg-[#e86830] px-5 rounded-sm max-lg:px-3"
            onClick={handleDownload}
        >
            <h6 className="py-2">Download CV</h6>
        </button>
    );
}
