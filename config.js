'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/agubridge/cler6uz1t001201pbzlkoht3w',
  accessToken:
    'pk.eyJ1IjoiYWd1YnJpZGdlIiwiYSI6ImNsZW9lZmU5cjAxazU0NHBsMGdlNHA5aTYifQ.RuKSa6CucFk9b0RQNkxung',
  CSV: 'mapdatasheet.csv',
  center: [-97.077789, 41.803954],
  zoom: 3.51,
  title: 'AGU Bridge Partner Map',
  description:
    'This map displays all current AGU Bridge Program partner departments. Users can filter both the map and list of departments by a variety of characteristics explained in the map legend (below/above) the map. When filtering by more than one characteristic, users will see departments that match ANY of the chosen characteristics.',
  sideBarInfo: ['Institution', 'Type', 'Size', 'Setting', 'GRE_Requirement', 'GRE_Notes', 'Minority_Serving_Institution'],
  popupInfo: ['Institution'],
  popupinfolink: ['Link'],
  filters: [
    {
      type: 'dropdown',
      title: 'Type: ',
      columnHeader: 'Type',
      listItems: [ 'Public', 'Private'],
    },
    {
      type: 'dropdown',
      title: 'Size: ',
      columnHeader: 'Size',
      listItems: [ 'Large', 'Medium'],
    }, 
    {
      type: 'checkbox',
      title: 'Setting:',
      columnHeader: 'Setting',
      listItems: ['Urban', 'Suburban', 'Rural'],
    },
    {
      type: 'checkbox',
      title: 'GRE Requirement:',
      columnHeader: 'GRE_Requirement',
      listItems: ['GRE required', 'GRE not required'],
    },
    {
      type: 'checkbox',
      title: 'Minority Serving Institution: ',
      columnHeader: 'Minority_Serving_Institution', // Case sensitive - must match spreadsheet entry
      listItems: ['HSI', 'AANAPISI', 'No MSI status', 'PBI', 'HBCU', 'ANNHI'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
  ],
};
