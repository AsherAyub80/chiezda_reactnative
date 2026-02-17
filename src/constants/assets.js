/**
 * Flutter-style assets – same names as Flutter: funky_card, home_bg_texture, getSvg('great'), etc.
 * Add funky_card.png and home_bg_texture.png from Flutter project to assets/images/ for 100% match.
 * Until then, bg_texture is used for top card and content background so the app runs.
 */

const imagesPath = '../../assets/images';

// Images (PNG) – Flutter: 'funky_card'.getImage('png'), 'home_bg_texture'.getImage('png'), 'hand'.getImage('png')
export const img = {
  bg_texture: require('../../assets/images/bg_texture.png'),
  ellipse_center: require('../../assets/images/ellipse-center.png'),
  // Copy from Flutter project for 100% match; fallback to bg_texture so app runs without them
  funky_card: require('../../assets/images/funky_card.png'),
  bg_texture: require('../../assets/images/bg_texture.png'),
  home_bg_texture: require('../../assets/images/home_bg_texture.png'),
  hand: require('../../assets/images/hand.png'),
  blur_texture: require('../../assets/images/blur-texture.png'),

  // hand: add hand.png from Flutter for 100% match; UI uses svg.hand until then
};

const svgPath = '../../assets/svg';

// SVGs – Flutter: 'great'.getSvg(), 'crown'.getSvg(), etc.
export const svg = {
  great: require('../../assets/svg/great.svg'),
  good: require('../../assets/svg/good.svg'),
  okay: require('../../assets/svg/okay.svg'),
  bad: require('../../assets/svg/bad.svg'),
  struggling: require('../../assets/svg/struggling.svg'),
  star2: require('../../assets/svg/star2.svg'),
  crown: require('../../assets/svg/crown.svg'),
  hand: require('../../assets/svg/hand.svg'),
  delete: require('../../assets/svg/delete.svg'),
  heart: require('../../assets/svg/heart.svg'),
  ellipse_centered: require('../../assets/svg/ellipse-centered.svg'),
  book: require('../../assets/svg/book_selected.svg'),
  filter: require('../../assets/svg/filter.svg'),
  arrow_updown: require('../../assets/svg/arrow-updown.svg'),
  comment: require('../../assets/svg/comment.svg'),
  emoji: require('../../assets/svg/emojis.svg'),
};

/** getImage(name) – Flutter-style; use img.funky_card or img.home_bg_texture */
export function getImage(name) {
  return img[name] ?? null;
}

/** getSvg(name) – Flutter-style; use svg.great, svg.crown, etc. */
export function getSvg(name) {
  return svg[name] ?? null;
}
