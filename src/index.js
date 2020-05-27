import './index.css';
import numeral from 'numeral';

const valueCourse = numeral(1000).format('%0,0.00');
console.log('I would pay ${valueCourse} for this course');
