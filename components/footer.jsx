import React from 'react';
import {useState} from 'react'
import {Tabs, Tab} from "@nextui-org/react";
import {GalleryIcon} from "./icons/GalleryIcon";
import {MusicIcon} from "./icons/MusicIcon";
import {VideoIcon} from "./icons/VideoIcon";

function FooterPage() {
  const textClass = 'w-fit text-typoSecondary'
  const textBoxClass = 'flex'

  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleTabClick = (tabKey) => {
    alert()
    switch (tabKey) {
      case 'photos':
        // Handle photo tab click
        console.log('Photos tab clicked');
        // Add your desired logic here
        break;
      case 'music':
        // Handle music tab click
        console.log('Music tab clicked');
        // Add your desired logic here
        break;
      case 'videos':
        // Handle videos tab click
        console.log('Videos tab clicked');
        // Add your desired logic here
        break;
      default:
        console.log('Unknown tab clicked');
    }
  };


  // if (true) {
    return (

      <Tabs className="flex w-full flex-col bg-background" selectedIndex={selectedIndex} onSelectedIndexChange={setSelectedIndex} aria-label="Options" color="primary" variant="bordered" justify="center">
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <GalleryIcon/>
              <span >Photos</span>
            </div>
          }
          onClick={() => handleTabClick('photos')}
        />
        <Tab
          key="music"
          title={
            <div className="flex items-center space-x-2">
              <MusicIcon/>
              <span>Music</span>
            </div>
          }
          onClick={() => handleTabClick('music')}
        />
        <Tab
          key="videos"
          title={
            <div className="flex items-center space-x-2">
              <VideoIcon/>
              <span>Videos</span>
            </div>
          }
          onClick={() => handleTabClick('videos')}
        />
      </Tabs>

    )
  // }
};

export default FooterPage;