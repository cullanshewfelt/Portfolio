import React from 'react';

const LinkedInSVG = (props) => {
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
      <g id='g5891'>
        <rect
          height='512'
          id='rect2987'
          style={{
            fill: backFill,
            fillOpacity:1,
            fillRule:'nonzero',
            stroke:'none'
          }}
          width='512'
          x='0'
          y='5.6843419e-014'
        />
        <g
          id='g9-1'
          transform='matrix(1.5537946,0,0,1.5537946,-140.87332,-132.64552)'
        >
          <rect
            height='166.021'
            id='rect11'
            style={{fill: mainFill}}
            width='55.194'
            x='129.957'
            y='200.35699'
          />
          <path
            d='m 157.927,120.303 c -18.884,0 -31.222,12.415 -31.222,28.687 0,15.93 11.963,28.687 30.491,28.687 h 0.357 c 19.245,0 31.224,-12.757 31.224,-28.687 -0.357,-16.272 -11.978,-28.687 -30.85,-28.687 z'
            id='path13-0'
            style={{fill: mainFill}}
          />
          <path
            d='m 320.604,196.453 c -29.277,0 -42.391,16.101 -49.734,27.41 v -23.506 h -55.18 c 0.732,15.573 0,166.021 0,166.021 h 55.179 V 273.66 c 0,-4.963 0.357,-9.924 1.82,-13.471 3.982,-9.911 13.068,-20.178 28.313,-20.178 19.959,0 27.955,15.23 27.955,37.539 v 88.828 h 55.182 v -95.206 c 0,-50.996 -27.227,-74.719 -63.535,-74.719 z'
            id='path15'
            style={{fill: mainFill}}
          />
        </g>
      </g>
    </svg>
  )
}

export default LinkedInSVG;
