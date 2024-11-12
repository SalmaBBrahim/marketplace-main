import logo from './logo.png';

import surchemise2 from './Catalogue/surchemise2.png';
import pontalon1 from './Catalogue/pontalon.png';
import pontalon2 from './Catalogue/pontalongris.png';
import robenoir from './Catalogue/robenoir.png';

import pullOverF1 from './Populaire/pull_overF1.png';
import pullOverF2 from './Populaire/pull_overF2.png';
import pullOverH1 from './Populaire/pull_overH1.png';
import pullOverH2 from './Populaire/pull_overH2.png';

export const assets = {
    logo,
    surchemise2,
    pontalon1,
    pontalon2,
    robenoir,
    pullOverF1,
    pullOverF2,
    pullOverH1,
    pullOverH2,
};

export const products = [
    {
        id: 1,
        img: pullOverF1,
        title: "PULL OVER",
        price: 69.90 
    },
    {
        id: 2,
        img: pullOverH1,
        title: "PULL OVER",
        price: 59.90 
    },
    {
        id: 3,
        img: pullOverF2 ,
        title: "PULL OVER",
        price: 69.90
    },
    {
        id: 4,
        img: pullOverH2,
        title: "PULL OVER",
        price: 59.90 
    },
    {
        id: 5,
        title: "Sur Chemise",
        img: surchemise2,
        category: "vetements",
        price: 80

    },
    {
        id: 6,
        title: "Pontalon Gris",
        img: pontalon1,
        /*category:"Femme",
        subCategory: "vetements",*/
        price: 60

    },
    {
        id: 7,
        title: "Pontalon Gris",
        img: pontalon1,
        /*category:"Femme",
        subCategory: "vetements",*/
        price: 60

    }

    

];
  
