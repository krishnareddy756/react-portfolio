import React, { useState } from 'react';
import { Download, FileText, Printer } from 'lucide-react';
import { PERSONAL_INFO } from '../../utils/constants';
import './DownloadResume.css';

const DownloadResume = ({ variant = 'primary', showLabel = true }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      // Create a temporary link element
      const link = document.createElement('a');
      link.href = PERSONAL_INFO.resumePath;
      link.download = `${PERSONAL_INFO.name.replace(/\s+/g, '_')}_Resume.pdf`;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Optional: Track download analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'download', {
          event_category: 'Resume',
          event_label: 'PDF Download'
        });
      }
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open(PERSONAL_INFO.resumePath, '_blank');
    } finally {
      setTimeout(() => setIsDownloading(false), 1000);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (variant === 'icon') {
    return (
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="btn-modern btn-modern-primary focus-ring"
        aria-label="Download Resume"
        title="Download Resume"
      >
        {isDownloading ? (
          <div className="skeleton w-4 h-4 rounded"></div>
        ) : (
          <Download className="h-4 w-4" />
        )}
      </button>
    );
  }

  if (variant === 'compact') {
    return (
      <div className="flex gap-2">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className="btn-modern btn-modern-primary focus-ring"
          aria-label="Download Resume"
        >
          {isDownloading ? (
            <div className="skeleton w-4 h-4 rounded"></div>
          ) : (
            <Download className="h-4 w-4" />
          )}
          {showLabel && <span>Resume</span>}
        </button>
        <button
          onClick={handlePrint}
          className="btn-modern btn-modern-outline focus-ring"
          aria-label="Print Portfolio"
          title="Print Portfolio"
        >
          <Printer className="h-4 w-4" />
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="btn-modern btn-modern-primary focus-ring"
      >
        {isDownloading ? (
          <div className="skeleton w-5 h-5 rounded"></div>
        ) : (
          <Download className="h-5 w-5" />
        )}
        <div className="flex flex-col items-start">
          <span className="font-medium">
            {isDownloading ? 'Downloading...' : 'Download Resume'}
          </span>
          {showLabel && (
            <span className="text-xs opacity-75">
              PDF • {PERSONAL_INFO.name}
            </span>
          )}
        </div>
      </button>
      
      <button
        onClick={handlePrint}
        className="btn-modern btn-modern-outline focus-ring"
        aria-label="Print Portfolio"
        title="Print this portfolio"
      >
        <Printer className="h-5 w-5" />
        <span>Print</span>
      </button>
    </div>
  );
};

export default DownloadResume;