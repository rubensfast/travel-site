import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

import $ from 'jquery';

// objects
var mobileMenu = new MobileMenu();
var stickyheader = new StickyHeader();

// 
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");