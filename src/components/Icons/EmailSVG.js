import React from 'react';

const EmailSVG = (props) => {
  const { backFill, className, mainFill } = props.props;
  return(
    <svg
      className={className}
      height='512'
      id='Layer_1'
      version='1.1'
      viewBox='0 0 512 512'
      width='512'
      xmlSpace='preserve'
      xmlns='http://www.w3.org/2000/svg'
      xmlnscc='http://creativecommons.org/ns#'
      xmlnsdc='http://purl.org/dc/elements/1.1/'
      xmlnsinkscape='http://www.inkscape.org/namespaces/inkscape'
      xmlnsrdf='http://www.w3.org/1999/02/22-rdf-syntax-ns#'
      xmlnssodipodi='http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd'
      xmlnssvg='http://www.w3.org/2000/svg'
    >
      <defs id='defs12'/>
      <g id='g3885' transform='translate(297.22034,0)'>
        <rect
          height='512'
          id='rect2987'
          style={{
            fill: backFill,
            fillOpacity:1,
            fillRule: 'nonzero',
            stroke: 'none'
          }}
          width='512'
          x='-297.22034'
          y='5.6843419e-014'
        />
        <path
          d='M 127.88103,94.198045 -218.4667,227.78507 c -23.63879,9.48433 -23.4986,22.66901 -4.30871,28.54816 l 86.38017,26.96101 33.05108,101.33207 c 4.018041,11.09077 2.03732,15.48953 13.683731,15.48953 8.98786,0 12.97504,-4.09778 17.98087,-8.98786 3.1833,-3.11513 22.08378,-21.49087 43.18752,-42.00936 l 89.85158,66.38643 c 16.5339,9.12161 28.47227,4.39617 32.58935,-15.35577 L 152.92948,122.20987 C 158.96812,98.000015 143.69981,87.018565 127.88103,94.198045 z M -122.83885,277.09998 71.862531,154.2616 c 9.71969,-5.89458 18.63166,-2.72542 11.31455,3.76981 l -166.71528,150.41932 -6.49136,69.23533 -32.809291,-100.58608 z'
          id='path9'
          style={{fill: mainFill}}
      />
      </g>
    </svg>
  )
}

export default EmailSVG;
