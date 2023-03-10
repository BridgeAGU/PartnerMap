'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/agubridge/cler6uz1t001201pbzlkoht3w',
  accessToken:
    'pk.eyJ1IjoiYWd1YnJpZGdlIiwiYSI6ImNsZW9lZmU5cjAxazU0NHBsMGdlNHA5aTYifQ.RuKSa6CucFk9b0RQNkxung',
  CSV: './maphubexm.csv',
  center: [-97.077789, 41.803954],
  zoom: 3.51,
  title: 'AGU Bridge Partner Map',
  description:
    'Replace with information about your application. Ex. You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.',
  sideBarInfo: ['Institution', 'Type', 'Size', 'Setting'],
  popupInfo: ['Institution'],
  popupinfo2: ['Type'],
  popupinfo3: ['Size'],
  filters: [
    {
      type: 'dropdown',
      title: 'Type: ',
      columnHeader: 'Type',
      listItems: [ 'Public', 'Private'],
    },
    {
      type: 'checkbox',
      title: 'Minority Serving Institution: ',
      columnHeader: 'Minority_Serving_Institution', // Case sensitive - must match spreadsheet entry
      listItems: ['HSI', 'AANAPISI/PBI', 'No'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'checkbox',
      title: 'Size: ',
      columnHeader: 'Size',
      listItems: ['Large', 'Medium'],
    },
    {
      type: 'checkbox',
      title: 'Setting: ',
      columnHeader: 'Setting',
      listItems: ['Urban', 'Suburban'],
    },
  ],
};
