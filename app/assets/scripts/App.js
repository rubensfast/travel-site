import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

import $ from 'jquery';

// objects
var mobileMenu = new MobileMenu();
var stickyheader = new StickyHeader();
var modal = new Modal();
// 
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");