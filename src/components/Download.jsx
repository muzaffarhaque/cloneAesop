import React, { useState, useEffect } from 'react';
import FileSaver from 'file-saver';
import { Button } from 'react-bootstrap';

const Download = () => {
  const [videoUrl, setVideoUrl] = useState('');

  let blob;
  const handleDownloadVideo = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(videoUrl);
       blob = await response.blob();
    } catch (error) {
      console.error('Error fetching video:', error);
    }
    if (blob) {
      FileSaver.saveAs(blob, videoUrl.split('/').pop());
    } else {
      console.error('Video not available for download.');
    }
  };

  return (
    <form action="" onSubmit={handleDownloadVideo}>
    <div className='d-flex align-items-center justify-content-center flex-column gap-3 px-4 vh-100'>
      
      <input
        type="text"
        className='w-100 px-3 mx-4 fs-3 fw-semibold border border-primary'
        placeholder="Enter Video URL"
        required
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
      />
      <Button type='submit' className=' btn-primary'>Download Video</Button>
    
    </div>
    </form>
  );
};

export default Download;
