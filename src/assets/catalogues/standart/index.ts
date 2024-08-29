import React from 'react'
import XA8000 from './images/ХА8000.png'
import XA8001 from './images/ХА8001.png'
import XA8003 from './images/ХА8003.png'
import XA8005 from './images/ХА8005.png'
import XAFrostA from './images/FrostA.png'
import DSS108 from './images/DSS108.png'
import DSS150 from './images/DSS150.png'
import DGS133 from './images/DGS133.png'
import XA3001 from './images/XA3001.png'
import XA3005 from './images/XA3005.png'
import DGS301 from './images/DGS301.png'
import DGS137 from './images/DGS137.png'
import DBS411 from './images/DBS411.png'
import DBS801 from './images/DBS801.png'
import DBS707 from './images/DBS707.png'
import DBS593 from './images/DBS593.png'
import DSS907 from './images/DSS907.png'
import XADUO21 from './images/DUO21.png'
import XADUO31 from './images/DUO31.png'


export interface IPigment {
    name:string;
    size:string;
    image:string;
    smyk:string
}

export const standartPigments :IPigment[] = [
    {name:'XA8000', size:'10-60', image:XA8000, smyk:'(0, 0, 2, 8)'},
    {name:'XA8001', size:'10-60', image:XA8001, smyk:'(0, 0, 0, 7)'},
    {name:'XA8003', size:'10-100', image:XA8003, smyk:'(1, 0, 0, 7)'},
    {name:'XA8005', size:'40-200', image:XA8005, smyk:'(1, 0, 0, 5)'},
    {name:'XA FrostA', size:'100-200', image:XAFrostA, smyk:'(0, 0, 1, 9)'},
    {name:'DSS108', size:'10-60', image:DSS108, smyk:'(1, 1, 0, 20)'},
    {name:'DSS150', size:'10-100', image:DSS150, smyk:'(0, 0, 2, 8)'},
    {name:'DGS133', size:'10-60', image:DGS133, smyk:'(0, 13, 36, 13)'},
    {name:'XA3001', size:'10-60', image:XA3001, smyk:'(0, 17, 56, 7)'},
    {name:'XA3005', size:'10-60', image:XA3005, smyk:'(0, 23, 66, 9)'},
    {name:'DGS301', size:'30-150', image:DGS301, smyk:'(0, 16, 51, 17)'},
    {name:'DGS137', size:'10-60', image:DGS137, smyk:'(0, 9, 43, 17)'},
    {name:'DBS411', size:'10-60', image:DBS411, smyk:'(0, 18, 31, 33)'},
    {name:'DBS801', size:'10-100', image:DBS801, smyk:'(0, 19, 27, 17)'},
    {name:'DBS707', size:'10-60', image:DBS707, smyk:'(0, 31, 42, 23)'},
    {name:'DBS593', size:'10-60', image:DBS593, smyk:'(0, 38, 35, 36)'},
    {name:'DSS907', size:'10-60', image:DSS907, smyk:'(9, 5, 0, 41)'},
    {name:'XA DUO21', size:'10-60', image:XADUO21, smyk:'(6, 5, 0, 51)'},
    {name:'XA DUO31', size:'10-60', image:XADUO31, smyk:'(8, 5, 0, 48)'},
]
